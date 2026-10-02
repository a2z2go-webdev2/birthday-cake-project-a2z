define([
    'jquery',
    'mage/utils/wrapper'
], function ($, wrapper) {
    'use strict';

    return function (targetModule) {
        var initialize = targetModule.prototype.initialize,
            cookieOptions = {
                samesite: 'strict',
                domain: '',
                path: '/'
            };

        targetModule.prototype.initialize = wrapper.wrap(initialize, function (original) {
            original();

            // Ensure toast messages slide in after cookie messages are loaded
            if (this.cookieMessagesObservable && this.cookieMessagesObservable().length) {
                this.showHideMess();
            }

            $.mage.cookies.set('mage-messages', '', cookieOptions);
        });

        targetModule.prototype.showHideMess = function () {
            var $elm = $('.page.messages .messages .message, .messages-wrap .messages .message');

            if (!$elm.length) {
                return;
            }

            setTimeout(function () {
                $elm.addClass('active');
            }, 100);

            setTimeout(function () {
                $elm.removeClass('active');
            }, 15000);

            $elm.find('.close-message').off('click.magebigMessages').on('click.magebigMessages', function () {
                $(this).closest('.message').removeClass('active');
            });
        };

        targetModule.prototype.prepareMessageForHtml = function (message) {
            return message;
        };

        return targetModule;
    };
});
