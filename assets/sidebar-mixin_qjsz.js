/**
 * Minicart sidebar is still used for qty/remove actions, but checkout redirect
 * is handled by minicart-mixin / proceed-to-checkout with accurate login state.
 */
define([
    'jquery'
], function ($) {
    'use strict';

    return function (SidebarWidget) {
        $.widget('mage.sidebar', SidebarWidget, {
            /**
             * @inheritdoc
             */
            _initContent: function () {
                var originalCheckoutButton = this.options.button.checkout;

                this.options.button.checkout = '#minicart-sidebar-checkout-disabled';
                this._super();
                this.options.button.checkout = originalCheckoutButton;
            }
        });

        return $.mage.sidebar;
    };
});
