/**
 * Theme minicart mixin:
 * - Magnific Popup checkout redirect
 * - Re-apply cart section after customer-data init so the header qty survives refresh
 */
define([
    'jquery',
    'Magento_Customer/js/model/authentication-popup',
    'Magento_Customer/js/customer-data',
    'Magento_Checkout/js/model/customer-login-state',
    'mage/cookies'
], function ($, authenticationPopup, customerData, loginState) {
    'use strict';

    return function (Minicart) {
        return Minicart.extend({
            /**
             * @inheritdoc
             */
            initialize: function () {
                var self = this,
                    cartData = customerData.get('cart');

                this._super();
                this.update(cartData());

                customerData.getInitCustomerData().done(function () {
                    self.update(cartData());

                    if (!cartData() || cartData().summary_count === undefined) {
                        customerData.reload(['cart'], false);
                    }
                });

                return this;
            },

            /**
             * Redirect to checkout (same rules as proceed-to-checkout.js / sidebar.js).
             *
             * @param {Object} data
             * @param {Event} event
             * @returns {Boolean}
             */
            proceedToCheckout: function (data, event) {
                var checkoutUrl = window.checkout && window.checkout.checkoutUrl;

                if (event) {
                    event.preventDefault();
                }

                if (!checkoutUrl) {
                    return false;
                }

                loginState.whenReady().done(function () {
                    if (loginState.requiresLoginBeforeCheckout()) {
                        $.cookie('login_redirect', checkoutUrl);

                        if (window.checkout.isRedirectRequired) {
                            window.location.href = window.checkout.customerLoginUrl;
                        } else {
                            authenticationPopup.showModal();
                        }

                        return;
                    }

                    $('#top-cart-btn-checkout').prop('disabled', true);

                    if ($.magnificPopup && $.magnificPopup.instance && $.magnificPopup.instance.isOpen) {
                        $.magnificPopup.close();
                    }

                    window.location.href = checkoutUrl;
                });

                return false;
            }
        });
    };
});
