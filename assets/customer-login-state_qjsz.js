/**
 * Reliable logged-in detection for checkout entry points on non-checkout pages.
 */
define([
    'jquery',
    'Magento_Customer/js/customer-data'
], function ($, customerData) {
    'use strict';

    /**
     * @returns {boolean}
     */
    function getPersistedLoginFlag() {
        var loginFlag = $.localStorage.get('mage-customer-login');

        if (loginFlag === undefined || loginFlag === null) {
            loginFlag = $.cookieStorage.get('mage-customer-login');
        }

        return parseInt(loginFlag, 10) === 1;
    }

    return {
        /**
         * @returns {boolean}
         */
        isLoggedIn: function () {
            var customer = customerData.get('customer')();

            if (customer && customer.firstname) {
                return true;
            }

            return getPersistedLoginFlag();
        },

        /**
         * @returns {boolean}
         */
        requiresLoginBeforeCheckout: function () {
            var cart = customerData.get('cart')() || {};

            return !this.isLoggedIn() && cart.isGuestCheckoutAllowed === false;
        },

        /**
         * @returns {jQuery.Promise}
         */
        whenReady: function () {
            return customerData.getInitCustomerData();
        }
    };
});
