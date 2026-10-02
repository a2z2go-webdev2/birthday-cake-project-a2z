/**
 * Ensures proceed-to-checkout widgets bind even when mage/apply misses dynamic buttons.
 */
define([
    'jquery',
    'Magento_Checkout/js/proceed-to-checkout',
    'domReady!'
], function ($, proceedToCheckout) {
    'use strict';

    function bindProceedButtons() {
        $('[data-role="proceed-to-checkout"]').each(function () {
            var element = this,
                $element = $(element),
                mageInit,
                config;

            if ($element.data('proceedToCheckoutBound')) {
                return;
            }

            mageInit = $element.data('mage-init') || $element.attr('data-mage-init');

            if (typeof mageInit === 'string') {
                try {
                    mageInit = JSON.parse(mageInit);
                } catch (e) {
                    mageInit = null;
                }
            }

            config = mageInit && mageInit['Magento_Checkout/js/proceed-to-checkout']
                ? mageInit['Magento_Checkout/js/proceed-to-checkout']
                : {
                    checkoutUrl: window.checkout ? window.checkout.checkoutUrl : null
                };

            if (!config.checkoutUrl) {
                return;
            }

            proceedToCheckout(config, element);
            $element.data('proceedToCheckoutBound', true);
        });
    }

    bindProceedButtons();

    $('body').on('contentUpdated', bindProceedButtons);
});
