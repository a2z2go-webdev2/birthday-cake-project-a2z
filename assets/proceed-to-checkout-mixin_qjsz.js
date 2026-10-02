/**
 * Fix false guest detection when customer-data firstname is not hydrated yet.
 */
define([
    'jquery',
    'Magento_Customer/js/model/authentication-popup',
    'Magento_Checkout/js/model/customer-login-state'
], function ($, authenticationPopup, loginState) {
    'use strict';

    return function (proceedToCheckout) {
        return function (config, element) {
            $(element).on('click', function (event) {
                event.preventDefault();

                loginState.whenReady().done(function () {
                    if (loginState.requiresLoginBeforeCheckout()) {
                        authenticationPopup.showModal();
                        return;
                    }

                    $(element).attr('disabled', true);
                    location.href = config.checkoutUrl;
                });

                return false;
            });
        };
    };
});
