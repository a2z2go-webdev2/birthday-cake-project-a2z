(function(require){
(function() {
/**
 * Copyright 2024 Adobe
 * All Rights Reserved.
 */

var config = {
    map: {
        '*': {
            'nonceInjector': 'Magento_Csp/js/nonce-injector'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright 2021 Adobe
 * All Rights Reserved.
 */

var config = {
    map: {
        '*': {
            directoryRegionUpdater: 'Magento_Directory/js/region-updater'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright 2014 Adobe
 * All Rights Reserved.
 */

var config = {
    waitSeconds: 0,
    map: {
        '*': {
            'ko': 'knockoutjs/knockout',
            'knockout': 'knockoutjs/knockout',
            'mageUtils': 'mage/utils/main',
            'rjsResolver': 'mage/requirejs/resolver',
            'jquery-ui-modules/accordion': 'jquery/ui-modules/widgets/accordion',
            'jquery-ui-modules/autocomplete': 'jquery/ui-modules/widgets/autocomplete',
            'jquery-ui-modules/button': 'jquery/ui-modules/widgets/button',
            'jquery-ui-modules/datepicker': 'jquery/ui-modules/widgets/datepicker',
            'jquery-ui-modules/dialog': 'jquery/ui-modules/widgets/dialog',
            'jquery-ui-modules/draggable': 'jquery/ui-modules/widgets/draggable',
            'jquery-ui-modules/droppable': 'jquery/ui-modules/widgets/droppable',
            'jquery-ui-modules/effect-blind': 'jquery/ui-modules/effects/effect-blind',
            'jquery-ui-modules/effect-bounce': 'jquery/ui-modules/effects/effect-bounce',
            'jquery-ui-modules/effect-clip': 'jquery/ui-modules/effects/effect-clip',
            'jquery-ui-modules/effect-drop': 'jquery/ui-modules/effects/effect-drop',
            'jquery-ui-modules/effect-explode': 'jquery/ui-modules/effects/effect-explode',
            'jquery-ui-modules/effect-fade': 'jquery/ui-modules/effects/effect-fade',
            'jquery-ui-modules/effect-fold': 'jquery/ui-modules/effects/effect-fold',
            'jquery-ui-modules/effect-highlight': 'jquery/ui-modules/effects/effect-highlight',
            'jquery-ui-modules/effect-scale': 'jquery/ui-modules/effects/effect-scale',
            'jquery-ui-modules/effect-pulsate': 'jquery/ui-modules/effects/effect-pulsate',
            'jquery-ui-modules/effect-shake': 'jquery/ui-modules/effects/effect-shake',
            'jquery-ui-modules/effect-slide': 'jquery/ui-modules/effects/effect-slide',
            'jquery-ui-modules/effect-transfer': 'jquery/ui-modules/effects/effect-transfer',
            'jquery-ui-modules/effect': 'jquery/ui-modules/effect',
            'jquery-ui-modules/menu': 'jquery/ui-modules/widgets/menu',
            'jquery-ui-modules/mouse': 'jquery/ui-modules/widgets/mouse',
            'jquery-ui-modules/position': 'jquery/ui-modules/position',
            'jquery-ui-modules/progressbar': 'jquery/ui-modules/widgets/progressbar',
            'jquery-ui-modules/resizable': 'jquery/ui-modules/widgets/resizable',
            'jquery-ui-modules/selectable': 'jquery/ui-modules/widgets/selectable',
            'jquery-ui-modules/selectmenu': 'jquery/ui-modules/widgets/selectmenu',
            'jquery-ui-modules/slider': 'jquery/ui-modules/widgets/slider',
            'jquery-ui-modules/sortable': 'jquery/ui-modules/widgets/sortable',
            'jquery-ui-modules/spinner': 'jquery/ui-modules/widgets/spinner',
            'jquery-ui-modules/tabs': 'jquery/ui-modules/widgets/tabs',
            'jquery-ui-modules/tooltip': 'jquery/ui-modules/widgets/tooltip',
            'jquery-ui-modules/widget': 'jquery/ui-modules/widget',
            'jquery-ui-modules/timepicker': 'jquery/timepicker',
            'vimeo': 'vimeo/player',
            'vimeoWrapper': 'vimeo/vimeo-wrapper'
        }
    },
    shim: {
        'mage/adminhtml/backup': ['prototype'],
        'mage/captcha': ['prototype'],
        'mage/new-gallery': ['jquery'],
        'jquery/ui': ['jquery'],
        'matchMedia': {
            'exports': 'mediaCheck'
        },
        'magnifier/magnifier': ['jquery'],
        'vimeo/player': {
            'exports': 'Player'
        }
    },
    paths: {
        'jquery/validate': 'jquery/jquery.validate',
        'jquery/uppy-core': 'jquery/uppy/dist/uppy.min',
        'prototype': 'legacy-build.min',
        'jquery/jquery-storageapi': 'js-storage/storage-wrapper',
        'text': 'mage/requirejs/text',
        'domReady': 'requirejs/domReady',
        'spectrum': 'jquery/spectrum/spectrum',
        'tinycolor': 'jquery/spectrum/tinycolor',
        'jquery-ui-modules': 'jquery/ui-modules'
    },
    config: {
        text: {
            'headers': {
                'X-Requested-With': 'XMLHttpRequest'
            }
        }
    }
};

require(['jquery'], function ($) {
    'use strict';

    $.noConflict();
});

require.config(config);
})();
(function() {
/**
 * Copyright 2014 Adobe
 * All Rights Reserved.
 */

var config = {
    map: {
        '*': {
            'rowBuilder':             'Magento_Theme/js/row-builder',
            'toggleAdvanced':         'mage/toggle',
            'translateInline':        'mage/translate-inline',
            'sticky':                 'mage/sticky',
            'tabs':                   'mage/tabs',
            'collapsible':            'mage/collapsible',
            'dropdownDialog':         'mage/dropdown',
            'dropdown':               'mage/dropdowns',
            'accordion':              'mage/accordion',
            'loader':                 'mage/loader',
            'tooltip':                'mage/tooltip',
            'deletableItem':          'mage/deletable-item',
            'itemTable':              'mage/item-table',
            'fieldsetControls':       'mage/fieldset-controls',
            'fieldsetResetControl':   'mage/fieldset-controls',
            'redirectUrl':            'mage/redirect-url',
            'loaderAjax':             'mage/loader',
            'menu':                   'mage/menu',
            'popupWindow':            'mage/popup-window',
            'validation':             'mage/validation/validation',
            'breadcrumbs':            'Magento_Theme/js/view/breadcrumbs',
            'jquery/ui':              'jquery/compat',
            'cookieStatus':           'Magento_Theme/js/cookie-status'
        }
    },
    deps: [
        'mage/common',
        'mage/dataPost',
        'mage/bootstrap'
    ],
    config: {
        mixins: {
            'Magento_Theme/js/view/breadcrumbs': {
                'Magento_Theme/js/view/add-home-breadcrumb': true
            }
        }
    }
};

/* eslint-disable max-depth */
/**
 * Adds polyfills only for browser contexts which prevents bundlers from including them.
 */
if (typeof window !== 'undefined' && window.document) {
    /**
     * Polyfill localStorage and sessionStorage for browsers that do not support them.
     */
    try {
        if (!window.localStorage || !window.sessionStorage) {
            throw new Error();
        }

        localStorage.setItem('storage_test', 1);
        localStorage.removeItem('storage_test');
    } catch (e) {
        config.deps.push('mage/polyfill');
    }
}
/* eslint-enable max-depth */

require.config(config);
})();
(function() {
/**
 * Copyright 2020 Adobe
 * All Rights Reserved.
 */

var config = {
    map: {
        '*': {
            escaper: 'Magento_Security/js/escaper'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright 2014 Adobe
 * All Rights Reserved.
 */

var config = {
    map: {
        '*': {
            checkoutBalance:    'Magento_Customer/js/checkout-balance',
            address:            'Magento_Customer/js/address',
            changeEmailPassword: 'Magento_Customer/js/change-email-password',
            passwordStrengthIndicator: 'Magento_Customer/js/password-strength-indicator',
            zxcvbn: 'Magento_Customer/js/zxcvbn',
            addressValidation: 'Magento_Customer/js/addressValidation',
            showPassword: 'Magento_Customer/js/show-password',
            'Magento_Customer/address': 'Magento_Customer/js/address',
            'Magento_Customer/change-email-password': 'Magento_Customer/js/change-email-password',
            globalSessionLoader:    'Magento_Customer/js/customer-global-session-loader.js'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright 2019 Adobe
 * All Rights Reserved.
 */

var config = {
    map: {
        '*': {
            priceBox:             'Magento_Catalog/js/price-box',
            priceOptionDate:      'Magento_Catalog/js/price-option-date',
            priceOptionFile:      'Magento_Catalog/js/price-option-file',
            priceOptions:         'Magento_Catalog/js/price-options',
            priceUtils:           'Magento_Catalog/js/price-utils',
            catalogAddToCart:       'Magento_Catalog/js/catalog-add-to-cart'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright 2014 Adobe
 * All Rights Reserved.
 */

var config = {
    map: {
        '*': {
            compareList:            'Magento_Catalog/js/list',
            relatedProducts:        'Magento_Catalog/js/related-products',
            upsellProducts:         'Magento_Catalog/js/upsell-products',
            productListToolbarForm: 'Magento_Catalog/js/product/list/toolbar',
            catalogGallery:         'Magento_Catalog/js/gallery'
        }
    },
    config: {
        mixins: {
            'Magento_Theme/js/view/breadcrumbs': {
                'Magento_Catalog/js/product/breadcrumbs': true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright 2014 Adobe
 * All Rights Reserved.
 */

var config = {
    map: {
        '*': {
            creditCardType: 'Magento_Payment/js/cc-type',
            'Magento_Payment/cc-type': 'Magento_Payment/js/cc-type'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright 2014 Adobe
 * All Rights Reserved.
 */

var config = {
    map: {
        '*': {
            addToCart: 'Magento_Msrp/js/msrp'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright 2014 Adobe
 * All Rights Reserved.
 */

var config = {
    map: {
        '*': {
            quickSearch: 'Magento_Search/js/form-mini',
            'Magento_Search/form-mini': 'Magento_Search/js/form-mini'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright 2014 Adobe
 * All Rights Reserved.
 */

var config = {
    map: {
        '*': {
            giftMessage:    'Magento_Sales/js/gift-message',
            ordersReturns:  'Magento_Sales/js/orders-returns',
            'Magento_Sales/gift-message':    'Magento_Sales/js/gift-message',
            'Magento_Sales/orders-returns':  'Magento_Sales/js/orders-returns'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright 2014 Adobe
 * All Rights Reserved.
 */

var config = {
    map: {
        '*': {
            discountCode:           'Magento_Checkout/js/discount-codes',
            shoppingCart:           'Magento_Checkout/js/shopping-cart',
            regionUpdater:          'Magento_Checkout/js/region-updater',
            sidebar:                'Magento_Checkout/js/sidebar',
            checkoutLoader:         'Magento_Checkout/js/checkout-loader',
            checkoutData:           'Magento_Checkout/js/checkout-data',
            proceedToCheckout:      'Magento_Checkout/js/proceed-to-checkout',
            catalogAddToCart:       'Magento_Catalog/js/catalog-add-to-cart'
        }
    },
    shim: {
        'Magento_Checkout/js/model/totals' : {
            deps: ['Magento_Customer/js/customer-data']
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright 2014 Adobe
 * All Rights Reserved.
 */

var config = {
    map: {
        '*': {
            configurable: 'Magento_ConfigurableProduct/js/configurable'
        }
    },
    config: {
        mixins: {
            'Magento_Catalog/js/catalog-add-to-cart': {
                'Magento_ConfigurableProduct/js/catalog-add-to-cart-mixin': true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright 2015 Adobe
 * All Rights Reserved.
 */

var config = {
    map: {
        '*': {
            requireCookie: 'Magento_Cookie/js/require-cookie',
            cookieNotices: 'Magento_Cookie/js/notices'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright 2014 Adobe
 * All Rights Reserved.
 */

var config = {
    map: {
        '*': {
            bundleOption:   'Magento_Bundle/bundle',
            priceBundle:    'Magento_Bundle/js/price-bundle',
            slide:          'Magento_Bundle/js/slide',
            productSummary: 'Magento_Bundle/js/product-summary'
        }
    },
    config: {
        mixins: {
            'mage/validation': {
                'Magento_Bundle/js/validation': true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright 2014 Adobe
 * All Rights Reserved.
 */

var config = {
    map: {
        '*': {
            downloadable: 'Magento_Downloadable/js/downloadable',
            'Magento_Downloadable/downloadable': 'Magento_Downloadable/js/downloadable'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright 2014 Adobe
 * All Rights Reserved.
 */

var config = {
    map: {
        '*': {
            subscriptionStatusResolver: 'Magento_Newsletter/js/subscription-status-resolver',
            newsletterSignUp:  'Magento_Newsletter/js/newsletter-sign-up'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright 2014 Adobe
 * All Rights Reserved.
 */

var config = {
    map: {
        '*': {
            catalogSearch: 'Magento_CatalogSearch/form-mini'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright 2014 Adobe
 * All Rights Reserved.
 */

var config = {
    map: {
        '*': {
            giftOptions:    'Magento_GiftMessage/js/gift-options',
            'Magento_GiftMessage/gift-options':    'Magento_GiftMessage/js/gift-options'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright 2014 Adobe
 * All Rights Reserved.
 */

var config = {
    deps: [],
    shim: {
        'chartjs/chartjs-adapter-moment': ['moment'],
        'chartjs/es6-shim.min': {},
        'hugerte/hugerte.min': {
            exports: 'hugerte',
            init: function () {
                'use strict';
                window.tinymce = window.hugerte;
                window.tinyMCE = window.hugerte;
                return window.hugerte;
            }
        }
    },
    paths: {
        'ui/template': 'Magento_Ui/templates'
    },
    map: {
        '*': {
            uiElement:      'Magento_Ui/js/lib/core/element/element',
            uiCollection:   'Magento_Ui/js/lib/core/collection',
            uiComponent:    'Magento_Ui/js/lib/core/collection',
            uiClass:        'Magento_Ui/js/lib/core/class',
            uiEvents:       'Magento_Ui/js/lib/core/events',
            uiRegistry:     'Magento_Ui/js/lib/registry/registry',
            consoleLogger:  'Magento_Ui/js/lib/logger/console-logger',
            uiLayout:       'Magento_Ui/js/core/renderer/layout',
            buttonAdapter:  'Magento_Ui/js/form/button-adapter',
            chartJs:        'chartjs/Chart.min',
            'chart.js':     'chartjs/Chart.min',
            tinymce:        'hugerte/hugerte.min',
            wysiwygAdapter: 'mage/adminhtml/wysiwyg/tiny_mce/tinymceAdapter'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright 2021 Adobe
 * All Rights Reserved.
 */

var config = {
    deps: [
        'Magento_Ui/js/core/app'
    ]
};

require.config(config);
})();
(function() {
/**
 * Copyright 2014 Adobe
 * All Rights Reserved.
 */

var config = {
    map: {
        '*': {
            pageCache:  'Magento_PageCache/js/page-cache'
        }
    },
    deps: ['Magento_PageCache/js/form-key-provider']
};

require.config(config);
})();
(function() {
/**
 * Copyright 2023 Adobe
 * All Rights Reserved.
 */

var config = {
    map: {
        '*': {
            groupedProduct: 'Magento_GroupedProduct/js/grouped-product'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright 2014 Adobe
 * All Rights Reserved.
 */

var config = {
    map: {
        '*': {
            captcha: 'Magento_Captcha/js/captcha',
            'Magento_Captcha/captcha': 'Magento_Captcha/js/captcha'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright 2020 Adobe
 * All Rights Reserved.
 */

var config = {
    map: {
        '*': {
            configurableVariationQty: 'Magento_InventoryConfigurableProductFrontendUi/js/configurable-variation-qty'
        }
    },
    config: {
        mixins: {
            'Magento_ConfigurableProduct/js/configurable': {
                'Magento_InventoryConfigurableProductFrontendUi/js/configurable': true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright 2014 Adobe
 * All Rights Reserved.
 */

var config = {
    map: {
        '*': {
            multiShipping: 'Magento_Multishipping/js/multi-shipping',
            orderOverview: 'Magento_Multishipping/js/overview',
            payment: 'Magento_Multishipping/js/payment',
            billingLoader: 'Magento_Checkout/js/checkout-loader',
            cartUpdate: 'Magento_Checkout/js/action/update-shopping-cart',
            multiShippingBalance: 'Magento_Multishipping/js/multi-shipping-balance'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright 2014 Adobe
 * All Rights Reserved.
 */

var config = {
    map: {
        '*': {
            recentlyViewedProducts: 'Magento_Reports/js/recently-viewed'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright 2019 Adobe
 * All Rights Reserved.
 */

var config = {
    config: {
        mixins: {
            'Magento_Checkout/js/model/quote': {
                'Magento_InventoryInStorePickupFrontend/js/model/quote-ext': true
            },
            'Magento_Checkout/js/view/shipping-information': {
                'Magento_InventoryInStorePickupFrontend/js/view/shipping-information-ext': true
            },
            'Magento_Checkout/js/model/checkout-data-resolver': {
                'Magento_InventoryInStorePickupFrontend/js/model/checkout-data-resolver-ext': true
            },
            'Magento_Checkout/js/checkout-data': {
                'Magento_InventoryInStorePickupFrontend/js/checkout-data-ext': true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright 2020 Adobe
 * All Rights Reserved.
 */

var config = {
    config: {
        mixins: {
            'Magento_Swatches/js/swatch-renderer': {
                'Magento_InventorySwatchesFrontendUi/js/swatch-renderer': true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright 2020 Adobe
 * All Rights Reserved.
 */

var config = {
    config: {
        mixins: {
            'Magento_Checkout/js/action/select-payment-method': {
                'Magento_SalesRule/js/action/select-payment-method-mixin': true
            },
            'Magento_Checkout/js/model/shipping-save-processor': {
                'Magento_SalesRule/js/model/shipping-save-processor-mixin': true
            },
            'Magento_Checkout/js/action/place-order': {
                'Magento_SalesRule/js/model/place-order-mixin': true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright 2023 Adobe
 * All Rights Reserved.
 */
var config = {
    map: {
        '*': {
            'cancelOrderModal': 'Magento_OrderCancellationUi/js/cancel-order-modal'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            'slick': 'Magento_PageBuilder/js/resource/slick/slick',
            'jarallax': 'Magento_PageBuilder/js/resource/jarallax/jarallax',
            'jarallaxVideo': 'Magento_PageBuilder/js/resource/jarallax/jarallax-video',
            'Magento_PageBuilder/js/resource/vimeo/player': 'vimeo/player',
            'Magento_PageBuilder/js/resource/vimeo/vimeo-wrapper': 'vimeo/vimeo-wrapper',
            'jarallax-wrapper': 'Magento_PageBuilder/js/resource/jarallax/jarallax-wrapper'
        }
    },
    shim: {
        'Magento_PageBuilder/js/resource/slick/slick': {
            deps: ['jquery']
        },
        'Magento_PageBuilder/js/resource/jarallax/jarallax-video': {
            deps: ['jarallax-wrapper', 'vimeoWrapper']
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright 2019 Adobe
 * All Rights Reserved.
 */

var config = {
    shim: {
        cardinaljs: {
            exports: 'Cardinal'
        },
        cardinaljsSandbox: {
            exports: 'Cardinal'
        }
    },
    paths: {
        cardinaljsSandbox: 'https://includestest.ccdc02.com/cardinalcruise/v1/songbird',
        cardinaljs: 'https://songbird.cardinalcommerce.com/edge/v1/songbird'
    }
};


require.config(config);
})();
(function() {
/**
 * Copyright 2015 Adobe
 * All Rights Reserved.
 */

var config = {
    map: {
        '*': {
            transparent: 'Magento_Payment/js/transparent',
            'Magento_Payment/transparent': 'Magento_Payment/js/transparent'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright 2014 Adobe
 * All Rights Reserved.
 */

var config = {
    map: {
        '*': {
            orderReview: 'Magento_Paypal/js/order-review',
            'Magento_Paypal/order-review': 'Magento_Paypal/js/order-review',
            paypalCheckout: 'Magento_Paypal/js/paypal-checkout'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright 2018 Adobe
 * All Rights Reserved.
 */

var config = {
    config: {
        mixins: {
            'Magento_Customer/js/customer-data': {
                'Magento_Persistent/js/view/customer-data-mixin': true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright 2015 Adobe
 * All Rights Reserved.
 */

var config = {
    map: {
        '*': {
            loadPlayer: 'Magento_ProductVideo/js/load-player',
            fotoramaVideoEvents: 'Magento_ProductVideo/js/fotorama-add-video-events',
            'vimeoWrapper': 'vimeo/vimeo-wrapper'
        }
    },
    shim: {
        vimeoAPI: {},
        'Magento_ProductVideo/js/load-player': {
            deps: ['vimeoWrapper']
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright 2015 Adobe
 * All Rights Reserved.
 */

var config = {
    config: {
        mixins: {
            'Magento_Checkout/js/action/place-order': {
                'Magento_CheckoutAgreements/js/model/place-order-mixin': true
            },
            'Magento_Checkout/js/action/set-payment-information': {
                'Magento_CheckoutAgreements/js/model/set-payment-information-mixin': true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright 2020 Adobe
 * All Rights Reserved.
 */

// eslint-disable-next-line no-unused-vars
var config = {
    config: {
        mixins: {
            'Magento_Checkout/js/model/place-order': {
                'Magento_ReCaptchaCheckout/js/model/place-order-mixin': true
            },
            'Magento_ReCaptchaWebapiUi/js/webapiReCaptchaRegistry': {
                'Magento_ReCaptchaCheckout/js/webapiReCaptchaRegistry-mixin': true
            }
        }
    }
};


require.config(config);
})();
(function() {
/**
 * Copyright 2020 Adobe
 * All Rights Reserved.
 */

/*eslint strict: ["error", "global"]*/

'use strict'; // eslint-disable-line

var config = {
    config: {
        mixins: {
            'Magento_Ui/js/view/messages': {
                'Magento_ReCaptchaFrontendUi/js/ui-messages-mixin': true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright 2020 Adobe
 * All Rights Reserved.
 */

// eslint-disable-next-line no-unused-vars
var config = {
    config: {
        mixins: {
            'Magento_Paypal/js/view/payment/method-renderer/payflowpro-method': {
                'Magento_ReCaptchaPaypal/js/payflowpro-method-mixin': true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright 2020 Adobe
 * All Rights Reserved.
 */

// eslint-disable-next-line no-unused-vars
var config = {
    config: {
        mixins: {
            'jquery': {
                'Magento_ReCaptchaWebapiUi/js/jquery-mixin': true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            scriptLoader: 'Magento_PaymentServicesPaypal/js/lib/script-loader-wrapper',
            paymentSdkLoader: 'Magento_PaymentServicesPaypal/js/lib/payment-sdk-loader',
        }
    },
    shim: {
        'Magento_PaymentServicesPaypal/js/lib/script-loader': {
            init: function () {
                'use strict';

                return {
                    load: window.paypalLoadScript,
                    loadCustom: window.paypalLoadCustomScript
                };
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * ADOBE CONFIDENTIAL
 *
 * Copyright 2022 Adobe
 * All Rights Reserved.
 *
 * NOTICE: All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 */

var config = {
    map: {
        '*': {
            'Magento_Vault/js/view/payment/vault': 'Magento_PaymentServicesPaypal/js/view/payment/vault'
        }
    },
    config: {
        mixins: {
            'Magento_Checkout/js/model/payment-service': {
                'Magento_PaymentServicesPaypal/js/model/payment-service-mixin': true
            },
            'Magento_Checkout/js/model/step-navigator': {
                'Magento_PaymentServicesPaypal/js/model/step-navigator-mixin': true
            },
            'Magento_Checkout/js/view/form/element/email': {
                'Magento_PaymentServicesPaypal/js/view/form/element/email-mixin': true
            },
            'Magento_Checkout/js/view/shipping': {
                'Magento_PaymentServicesPaypal/js/view/shipping-mixin': true
            },
            'Magento_Checkout/js/view/shipping-information': {
                'Magento_PaymentServicesPaypal/js/view/shipping-information-mixin': true
            }
        }
    },
    paths: {
        fastlane: 'https://www.paypalobjects.com/connect-boba'
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright 2020 Adobe
 * All Rights Reserved.
 */

var config = {
    map: {
        '*': {
            mageTranslationDictionary: 'Magento_Translation/js/mage-translation-dictionary'
        }
    },
    deps: [
        'mageTranslationDictionary'
    ]
};

require.config(config);
})();
(function() {
/**
 * Copyright 2015 Adobe
 * All Rights Reserved.
 */

var config = {
    map: {
        '*': {
            editTrigger: 'mage/edit-trigger',
            addClass: 'Magento_Translation/js/add-class',
            'Magento_Translation/add-class': 'Magento_Translation/js/add-class'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright 2019 Adobe
 * All Rights Reserved.
 */

var config = {
    config: {
        mixins: {
            'Magento_Checkout/js/view/payment/list': {
                'Magento_PaypalCaptcha/js/view/payment/list-mixin': true
            },
            'Magento_Paypal/js/view/payment/method-renderer/payflowpro-method': {
                'Magento_PaypalCaptcha/js/view/payment/method-renderer/payflowpro-method-mixin': true
            },
            'Magento_Captcha/js/view/checkout/defaultCaptcha': {
                'Magento_PaypalCaptcha/js/view/checkout/defaultCaptcha-mixin': true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright 2014 Adobe
 * All Rights Reserved.
 */

var config = {
    map: {
        '*': {
            'taxToggle': 'Magento_Weee/js/tax-toggle',
            'Magento_Weee/tax-toggle': 'Magento_Weee/js/tax-toggle'
        }
    },
    config: {
        mixins: {
            'Magento_Catalog/js/price-box': {
                'Magento_Weee/js/price-box-mixin': true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright 2011 Adobe
 * All Rights Reserved.
 */

var config = {
    map: {
        '*': {
            wishlist:       'Magento_Wishlist/js/wishlist',
            addToWishlist:  'Magento_Wishlist/js/add-to-wishlist',
            wishlistSearch: 'Magento_Wishlist/js/search'
        }
    },
    config: {
        mixins: {
            'Magento_Wishlist/js/view/wishlist': {
                'Magento_Wishlist/js/view/wishlist-mixin': true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * CedCommerce
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the End User License Agreement (EULA)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://cedcommerce.com/license-agreement.txt
 *
 * @category    Ced
 * @package     Ced_CsMarketplace
 * @author      CedCommerce Core Team <connect@cedcommerce.com>
 * @copyright   Copyright CedCommerce (https://cedcommerce.com/)
 * @license     https://cedcommerce.com/license-agreement.txt
 */
var config = {
    map: {
        '*': {
            csjquery: "Ced_CsMarketplace/dist/js/jquery.min",
            csnoconflict: "Ced_CsMarketplace/js/ced/csmarketplace/noconflict",
            csvendor: "Ced_CsMarketplace/js/ced/csmarketplace/vendor",
            csbootstrap: "Ced_CsMarketplace/bower_components/bootstrap/dist/js/bootstrap",
            metismenu : "Ced_CsMarketplace/bower_components/metisMenu/dist/metisMenu.min",
            csvendorpanel: "Ced_CsMarketplace/dist/js/sb-admin-2",
            checkoutbalance:    'Magento_Customer/js/checkout-balance',
            captcha: 'Magento_Captcha/js/captcha',
            flot: "Ced_CsMarketplace/js/ced/csmarketplace/flot/jquery.flot",
            flotResize: "Ced_CsMarketplace/js/ced/csmarketplace/flot/jquery.flot.resize.min",
            raphael : "Ced_CsMarketplace/bower_components/raphael/raphael-min",
            morrisMin : "Ced_CsMarketplace/js/ced/csmarketplace/morris.min",
            ceddropdown : "Ced_CsMarketplace/js/view/header"
        }
    },
    shim: {
        'Ced_CsMarketplace/bower_components/bootstrap/dist/js/bootstrap': {
            deps: ['jquery']
        },
        'Ced_CsMarketplace/bower_components/metisMenu/dist/metisMenu.min': {
            deps: ['jquery', 'csbootstrap']
        },
        'Ced_CsMarketplace/dist/js/sb-admin-2': {
            deps: ['jquery', 'metismenu']
        }
    },
    deps: [
        "jquery",
        "jquery/ui",
        "jquery/validate",
        "mage/translate"
    ]
};



require.config(config);
})();
(function() {
/**
 * CedCommerce
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the End User License Agreement (EULA)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://cedcommerce.com/license-agreement.txt
 *
 * @category    Ced
 * @package     Ced_CsMultiShipping
 * @author      CedCommerce Core Team <connect@cedcommerce.com>
 * @copyright   Copyright CedCommerce (https://cedcommerce.com/)
 * @license     https://cedcommerce.com/license-agreement.txt
 */
// var is_multishipping_enable = !window.ced_multishipping_enable;
var is_multishipping_enable = true;
var config = {
    map: {
        '*': {
            'Magento_Checkout/shipping': 'Ced_CsMultiShipping/shipping',
            regionUpdater:   'Magento_Checkout/js/region-updater'
        }
    },
    config: {
        mixins: {
            'Magento_Checkout/js/view/shipping': {
                'Ced_CsMultiShipping/js/view/shipping-mixin': true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * CedCommerce
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the End User License Agreement (EULA)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://cedcommerce.com/license-agreement.txt
 *
 * @category    Ced
 * @package     Ced_CsProduct
 * @author      CedCommerce Core Team <connect@cedcommerce.com>
 * @copyright   Copyright CedCommerce (https://cedcommerce.com/)
 * @license      https://cedcommerce.com/license-agreement.txt
 */
var config = {
    "bundles": {
        "js/theme": [
            "globalNavigation",
            "globalSearch",
            "modalPopup",
            "useDefault",
            "loadingPopup",
            "collapsable"
        ]
    },
    map: {
        '*': {

            "Magento_CatalogInventory/js/components/use-config-settings": "Ced_CsProduct/js/components/use-config-settings",
            "Magento_CatalogInventory/js/components/qty-validator-changer": "Ced_CsProduct/js/components/qty-validator-changer",
            "Magento_CatalogInventory/js/components/use-config-min-sale-qty": "Ced_CsProduct/js/components/use-config-min-sale-qty",
            "Magento_Downloadable/js/components/is-downloadable-handler": "Ced_CsProduct/js/components/is-downloadable-handler",
            "Magento_Bundle/js/components/bundle-input-type": "Ced_CsProduct/js/components/bundle-input-type",
            "Magento_Catalog/js/bundle-proxy-button": "Ced_CsProduct/js/bundle-proxy-button",
            "Magento_Catalog/js/custom-options-type": "Ced_CsProduct/js/custom-options-type",
            "Magento_Catalog/component/static-type-input": "Ced_CsProduct/component/static-type-input",
            //"Magento_Downloadable/js/components/file-uploader":"Ced_CsProduct/js/components/file-uploader",
            //"Magento_Downloadable/js/components/upload-type-handler":"Ced_CsProduct/js/components/upload-type-handler",
            //"Magento_Downloadable/js/components/price-handler":"Ced_CsProduct/js/components/price-handler",
            "Magento_Bundle/js/components/bundle-checkbox": "Ced_CsProduct/js/components/bundle-checkbox",
            "Magento_Bundle/js/components/bundle-option-qty": "Ced_CsProduct/js/components/bundle-option-qty",
            //"Magento_Ui/js/form/client":"Ced_CsProduct/js/form/client",

            "Magento_Backend/js/media-uploader": "Ced_CsProduct/js/media-uploader",
            "Magento_Catalog/js/components/new-category": "Ced_CsProduct/js/components/new-category",
            "Magento_Catalog/js/components/dynamic-rows-import-custom-options": "Ced_CsProduct/js/components/dynamic-rows-import-custom-options",
            "Magento_Catalog/js/components/attribute-set-select": "Ced_CsProduct/js/components/attribute-set-select",
            "Magento_Catalog/js/components/import-handler": "Ced_CsProduct/js/components/import-handler",
            //"mage/tabs" : "mage/backend/tabs",
            "Magento_Catalog/catalog/type-events": "Ced_CsProduct/catalog/type-events",
            "Magento_Catalog/js/product/weight-handler": "Ced_CsProduct/js/product/weight-handler",
            "Magento_Catalog/catalog/apply-to-type-switcher": "Ced_CsProduct/catalog/apply-to-type-switcher",
            // Magento 2.4.x renamed lib path; Ced still requires the old alias.
            "jquery/file-uploader": "jquery/fileUploader/jquery.fileuploader",
            form: "mage/backend/form",
            calendar: "mage/calendar",
            productGallery: 'Ced_CsProduct/js/product-gallery',
            newCategoryDialog: 'Ced_CsProduct/js/new-category-dialog',
            baseImage: 'Ced_CsProduct/catalog/base-image-uploader',
            suggest: "mage/backend/suggest",
            "floatingHeader": "mage/backend/floating-header",
            "button": "mage/backend/button",

            // "jquery/jquery.tabs" : "jquery/jquery.tabs",
            //"toolbar_entry" : "Ced_CsProduct/catalog/toolbar_entry",
            "backend/bootstrap": "mage/backend/bootstrap",
            "globals": "mage/adminhtml/globals",
            "dropdown-old": "mage/dropdown_old",
            "product-attributes": "Ced_CsProduct/catalog/product-attributes",
            "select": "Magento_Ui/js/form/element/select",
            "integration": "Ced_CsProduct/catalog/integration",
            "notification": "mage/backend/notification",
            "productAttributes": "Ced_CsProduct/catalog/product-attributes",


            //"Magento_Downloadable/template/components/file-uploader.html":"Ced_CsProduct/template/components/file-uploader.html",

            //"Magento_Downloadable/downloadable-type-handler" : "Ced_CsProduct/js/DownloadableProduct/downloadable-type-handler",

            "mage/adminhtml/browser": "Ced_CsProduct/js/adminhtml/browser",

            "Magento_Bundle/js/bundle-product": "Ced_CsProduct/js/BundleProduct/bundle-product",
            "Magento_Bundle/js/bundle-type-handler": "Ced_CsProduct/js/BundleProduct/bundle-type-handler",

            "groupedProduct": "Ced_CsProduct/js/GroupedProduct/grouped-product",

            "Magento_Theme/js/sortable": "Ced_CsProduct/js/Theme/sortable",

            //"js/theme" : "Ced_CsProduct/js/Theme_admin_backend/theme",

            "Magento_Catalog/js/custom-options": "Ced_CsProduct/js/custom-options",

            "mediabrowser": "jquery/jstree/jquery.jstree",
            "folderTree": "Ced_CsProduct/js/folder-tree",

            "Magento_Variable/variables": "Ced_CsProduct/js/variables",
            "treeSuggest": "mage/backend/tree-suggest",
            "jstree": "jquery/jstree/jquery.jstree",
            "actionLink": "mage/backend/action-link",

            newVideoDialog: "Ced_CsProduct/js/video/new-video-dialog",
            openVideoModal: "Ced_CsProduct/js/video/video-modal",
            "Magento_ProductVideo/js/get-video-information": "Ced_CsProduct/js/video/get-video-information",

            "global": "mage/adminhtml/globals"
        }
    }

};

require.config(config);
})();
(function() {

/**
 * CedCommerce
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the End User License Agreement (EULA)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://cedcommerce.com/license-agreement.txt
 *
 * @category  Ced
 * @package   Ced_CsImportExport
 * @author    CedCommerce Core Team <connect@cedcommerce.com>
 * @copyright Copyright CedCommerce (http://cedcommerce.com/)
 * @license      http://cedcommerce.com/license-agreement.txt
 */

var config = {
    map: {
        '*': {
            jqueryform:   'Ced_CsImportExport/js/jquery.form',
        }
    }
   
};

require.config(config);
})();
(function() {

/**
 * CedCommerce
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the End User License Agreement (EULA)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://cedcommerce.com/license-agreement.txt
 *
 * @category  Ced
 * @package   Ced_CsMultiShipping
 * @author    CedCommerce Core Team <connect@cedcommerce.com>
 * @copyright Copyright CedCommerce (http://cedcommerce.com/)
 * @license      http://cedcommerce.com/license-agreement.txt
 */


var config = {
    config: {
        mixins: {
            'Magento_ConfigurableProduct/js/configurable': {
                'Ced_CsMultiSeller/js/configurable-mixin': true
            },
            'Magento_Swatches/js/swatch-renderer': {
                'Ced_CsMultiSeller/js/swatch-renderer-mixin': true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * CedCommerce
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the End User License Agreement (EULA)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://cedcommerce.com/license-agreement.txt
 *
 * @category  Ced
 * @package   Ced_StorePickup
 * @author    CedCommerce Core Team <connect@cedcommerce.com >
 * @copyright Copyright CEDCOMMERCE (http://cedcommerce.com/)
 * @license      http://cedcommerce.com/license-agreement.txt
 */
const config = {
    config: {
        mixins: {
            'Magento_Checkout/js/view/shipping': {
                'Ced_StorePickup/js/shipping-mixin': true
            },
            // Send data when saving shipping information
            'Magento_Checkout/js/model/shipping-save-processor/payload-extender': {
                'Ced_StorePickup/js/shipping-save-processor/payload-extender-mixin': true
            },
        }
    }
};

require.config(config);
})();
(function() {
/**
 * CedCommerce
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the End User License Agreement (EULA)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://cedcommerce.com/license-agreement.txt
 *
 * @category    Ced
 * @package     Ced_CsOrder
 * @author      CedCommerce Core Team <connect@cedcommerce.com>
 * @copyright   Copyright CedCommerce (https://cedcommerce.com/)
 * @license     https://cedcommerce.com/license-agreement.txt
 */

var config = {
    map: {
        '*': {
            "mage/backend/tabs" : 'mage/backend/tabs',
            "floatingHeader":       "mage/backend/floating-header",
            "Magento_Sales/order/giftoptions_tooltip" : "Ced_CsOrder/js/giftoptions_tooltip"
        }
    },
    deps: [
        "jquery",
        "jquery/ui",
        "jquery/validate",
        "mage/translate"
    ]
};



require.config(config);
})();
(function() {
var config = {
    config: {
        mixins: {
            'Magento_Checkout/js/action/set-billing-address': {
                'Ced_GoogleMap/js/checkout/set-billing-address-mixin': true
            },
            'Magento_Checkout/js/action/set-shipping-information': {
                'Ced_GoogleMap/js/checkout/set-shipping-information-mixin': true
            },
            'Magento_Checkout/js/action/create-shipping-address': {
                'Ced_GoogleMap/js/checkout/create-shipping-address-mixin': true
            },
            'Magento_Checkout/js/action/place-order': {
                'Ced_GoogleMap/js/checkout/set-billing-address-mixin': true
            },
            'Magento_Checkout/js/action/create-billing-address': {
                'Ced_GoogleMap/js/checkout/set-billing-address-mixin': true
            },
            'Magento_Checkout/js/action/set-payment-information': {
                'Ced_GoogleMap/js/checkout/set-payment-information-mixin': true
            },
            /*'Magento_Checkout/js/model/shipping-save-processor/payload-extender': {
                'Vendor_Module/js/model/shipping-save-processor/payload-extender': true
            }*/
        }
    }
};

require.config(config);
})();
(function() {
var config = {
    config: {
        mixins: {
            'Magento_Checkout/js/action/place-order': {
                'Ced_CsVendorBranch/js/model/place-order-mixin': true
            },
            'Magento_Checkout/js/action/set-payment-information': {
                'Ced_CsVendorBranch/js/model/place-order-mixin': true
            },
            'Magento_Checkout/js/model/shipping-service': {
                'Ced_CsVendorBranch/js/model/shipping-service-mixin': true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * CedCommerce
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the End User License Agreement (EULA)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://cedcommerce.com/license-agreement.txt
 *
 * @category  Ced
 * @package   Ced_CsVendorProductAttribute
 * @author    CedCommerce Core Team <connect@cedcommerce.com >
 * @copyright Copyright CEDCOMMERCE (https://cedcommerce.com/)
 * @license      https://cedcommerce.com/license-agreement.txt
 */

var config = {
    map: {
        '*': {
            "Magento_Catalog/js/options": "Ced_CsVendorProductAttribute/js/options",
            "global": "mage/adminhtml/globals",
            "Magento_Catalog/catalog/product/attribute/unique-validate": "Ced_CsVendorProductAttribute/js/unique-validate",
            eavInputTypes: 'Ced_CsVendorProductAttribute/js/input-types'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * CedCommerce
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the End User License Agreement (EULA)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://cedcommerce.com/license-agreement.txt
 *
 * @category    Ced
 * @package     Ced_CsVendorReview
 * @author      CedCommerce Core Team <connect@cedcommerce.com>
 * @copyright   Copyright CedCommerce (https://cedcommerce.com/)
 * @license     https://cedcommerce.com/license-agreement.txt
 */

var config = {
    map: {
        '*': {
            reviewFormLoader: 'Ced_CsVendorReview/js/review-form-loader',
        }
    }
};



require.config(config);
})();
(function() {
var config = {
    map: {
        '*': {
            'Magento_Checkout/template/billing-address/form': 'Ced_GmapAddressMapping/template/billing-address/form',
            "Magento_Checkout/js/model/shipping-save-processor/default": "Ced_GmapAddressMapping/js/shipping-save-processor-default-override",
        }
    },

   config: {
       mixins: {
           'Magento_Checkout/js/action/set-shipping-information': {
               'Ced_GmapAddressMapping/js/action/set-shipping-information-mixin': true
           },
           'Magento_Checkout/js/action/set-billing-address': {
               'Ced_GmapAddressMapping/js/action/set-billing-address-mixin': true
           },
           'Magento_Checkout/js/action/place-order': {
               'Ced_GmapAddressMapping/js/action/set-billing-address-mixin': true
           },
           'Magento_Checkout/js/action/set-payment-information': {
               'Ced_GmapAddressMapping/js/action/set-payment-information-mixin': true
           },
       }
   }

};

require.config(config);
})();
(function() {
/**
 * CedCommerce
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the End User License Agreement (EULA)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://cedcommerce.com/license-agreement.txt
 *
 * @category    Ced
 * @package     Ced_CsMarketplace
 * @author 		CedCommerce Core Team <connect@cedcommerce.com>
 * @copyright   Copyright CedCommerce (http://cedcommerce.com/)
 * @license      http://cedcommerce.com/license-agreement.txt
 */
var config = {
    map: {
        '*': {
            'Magento_Catalog/js/catalog-add-to-cart' : "Ced_CsHyperlocal/js/catalog-add-to-cart"    
        }
    }
};



require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */
var config = {
    map: {
        '*': {
            generateOtp:'Ced_MobileLogin/js/generate-otp',
            intlTelInput:'Ced_MobileLogin/js/intlTelInput',
            'Magento_Checkout/template/authentication.html':'Ced_MobileLogin/template/authentication.html',
            'Magento_Customer/template/authentication-popup.html':'Ced_MobileLogin/template/authentication-popup.html'
        }
    }
};

require.config(config);
})();
(function() {
var config = {
    config: {
        mixins: {
            'Magento_SalesRule/js/action/set-coupon-code': {
                'Ced_ReferralSystem/js/mixin/block-coupon-if-referral': true
            }
        }
    }
};



require.config(config);
})();
(function() {
var config = {
    map: {
        '*': {
            'Ced_ReferralSystem/js/view/payment/referral-points':
                'Ced_Rewardsystem/js/view/payment/combined-referral-points'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */
var config = {
    map: {
        '*': {
            generateVendorOtp:'Ced_CsMobileLogin/js/generate-otp',
            intlTelInput:'Ced_CsMobileLogin/js/intlTelInput'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * CedCommerce
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the End User License Agreement (EULA)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://cedcommerce.com/license-agreement.txt
 *
 * @category    Ced
 * @package     Ced_Wallet
 * @author      CedCommerce Core Team <connect@cedcommerce.com>
 * @copyright   Copyright CedCommerce (https://cedcommerce.com/)
 * @license     https://cedcommerce.com/license-agreement.txt
 */

var config = {
    map: {
        '*': {
            'Magento_Checkout/js/model/shipping-save-processor/default':
            'Ced_Wallet/js/model/shipping-save-processor/default'
        }
    },
    config: {
        mixins: {
            'Magento_SalesRule/js/action/select-payment-method-mixin': {
                'Ced_Wallet/js/action/select-payment-method-mixin': true
            }
        }
    }
};
require.config(config);
})();
(function() {
var config = {
    map: {
        "*": {
            'magnificpopup': 'MageBig_MbLib/js/jquery.magnific-popup',
            'awArMagnificPopup': 'MageBig_MbLib/js/jquery.magnific-popup',
            'mageplaza/core/jquery/popup': 'MageBig_MbLib/js/jquery.magnific-popup',
            'magnific': 'MageBig_MbLib/js/jquery.magnific-popup',
            'nanoscroller': 'MageBig_MbLib/js/jquery.nanoscroller'
        }
    },
    shim: {
        'magnificpopup': {
            deps: ['jquery']
        },
        'nanoscroller': {
            deps: ['jquery']
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © magebig.com - All rights reserved.
 * See LICENSE.txt for license details.
 */
var config = {
    map: {
        '*': {
            mbAjaxinfinitescroll: 'MageBig_AjaxInfiniteScroll/js/ajaxinfinitescroll',
            mbAis: 'MageBig_AjaxInfiniteScroll/js/infinitescroll'
        }
    },
    shim : {
        mbAis: {
            deps: ['jquery']
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © magebig.com - All rights reserved.
 * See LICENSE.txt for license details.
 */

var config = {
    map: {
        '*': {
            'magebig/ajaxcompare': 'MageBig_Ajaxcompare/js/ajax-compare'
        }
    }
};

require.config(config);
})();
(function() {
var config = {
    config: {
        mixins: {
            'Magento_Wishlist/js/add-to-wishlist': {
                'MageBig_Ajaxwishlist/js/add-to-wishlist': true
            }
        }
    },
    map: {
        '*': {
            'magebig/ajaxwishlist'  : 'MageBig_Ajaxwishlist/js/ajax-wishlist'
        }
    }
};

require.config(config);
})();
(function() {
var config = {
    config: {
        mixins: {
            'Magento_Swatches/js/swatch-renderer': {
                'MageBig_MbFrame/js/swatch-renderer': true
            },
            'Magento_ConfigurableProduct/js/configurable': {
                'MageBig_MbFrame/js/configurable': true
            }
        }
    }
};

require.config(config);
})();
(function() {
var config = {
    config: {
        mixins: {
            'Magento_Catalog/js/catalog-add-to-cart': {
                'MageBig_AjaxCart/js/catalog-add-to-cart': true
            },
            'Magento_Checkout/js/sidebar': {
                'MageBig_AjaxCart/js/sidebar': true
            }
        }
    }
};

require.config(config);
})();
(function() {
var config = {
    map: {
        '*': {
			quickView: 'MageBig_QuickView/js/quickview'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © 2020 MageBig. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            "magebig_shopbybrand": 'MageBig_Shopbybrand/js/brands'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © magebig.com - All rights reserved.
 * See LICENSE.txt for license details.
 */

var config = {
    paths: {
        socialProvider: 'MageBig_SocialLogin/js/provider',
        socialPopupForm: 'MageBig_SocialLogin/js/popup'
    }
};

require.config(config);
})();
(function() {
var config = {
    map: {
        "*": {
            'owlWidget': 'MageBig_WidgetPlus/js/owl.carousel-set',
            'owlCarousel': 'MageBig_WidgetPlus/js/owl.carousel'
        }
    },
    shim: {
        'owlWidget': {
            deps: ['jquery', 'owlCarousel']
        },
        'owlCarousel': {
            deps: ['jquery']
        }
    }
};

require.config(config);
})();
(function() {
var config = {
    paths: {
        'io': 'https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.3.0/socket.io',
        //'io': 'Ced_CsSellerChat/js/node_modules/socket.io-client/dist/socket.io.js',
    },
    shim: {
        "io": ["jquery"],
    }
};
require.config(config);
})();
(function() {
var config = {
    map: {
        '*': {
            cedCheckoutOrderBtn: 'Ced_Custom/js/checkout-order-btn'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Config to pull in all the relevant Braintree JS SDKs
 * @type {
 *  paths: {
 *      braintreePayPalInContextCheckout: string,
 *      braintreePayPalCheckout: string,
 *      braintreeVenmo: string,
 *      braintreeHostedFields: string,
 *      braintreeDataCollector: string,
 *      braintreeThreeDSecure: string,
 *      braintreeGooglePay: string,
 *      braintreeApplePay: string,
 *      braintreeAch: string,
 *      braintreeLpm: string,
 *      googlePayLibrary: string
 * },
 *  map: {
 *      "*": {
 *          braintree: string
 *      }
 *  }
 * }
 */
var config = {
    map: {
        '*': {
            braintree: 'https://js.braintreegateway.com/web/3.123.1/js/client.min.js'
        }
    },

    paths: {
        'braintreePayPalCheckout': 'https://js.braintreegateway.com/web/3.123.1/js/paypal-checkout.min',
        'braintreeHostedFields': 'https://js.braintreegateway.com/web/3.123.1/js/hosted-fields.min',
        'braintreeDataCollector': 'https://js.braintreegateway.com/web/3.123.1/js/data-collector.min',
        'braintreeThreeDSecure': 'https://js.braintreegateway.com/web/3.123.1/js/three-d-secure.min',
        'braintreeApplePay': 'https://js.braintreegateway.com/web/3.123.1/js/apple-pay.min',
        'braintreeGooglePay': 'https://js.braintreegateway.com/web/3.123.1/js/google-payment.min',
        'braintreeVenmo': 'https://js.braintreegateway.com/web/3.123.1/js/venmo.min',
        'braintreeAch': 'https://js.braintreegateway.com/web/3.123.1/js/us-bank-account.min',
        'braintreeLpm': 'https://js.braintreegateway.com/web/3.123.1/js/local-payment.min',
        'googlePayLibrary': 'https://pay.google.com/gp/p/js/pay',
        'braintreePayPalInContextCheckout': 'https://www.paypalobjects.com/api/checkout'
    }
};

require.config(config);
})();
(function() {
/**
 * ADOBE CONFIDENTIAL
 *
 * Copyright 2020 Adobe
 * All Rights Reserved.
 *
 * NOTICE: All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 */
let config = {
    config: {
        mixins: {
            'Magento_Checkout/js/model/step-navigator': {
                'PayPal_Braintree/js/model/step-navigator-mixin': true
            },
            'Magento_Checkout/js/model/place-order': {
                'PayPal_Braintree/js/model/place-order-mixin': true
            },
            'Magento_ReCaptchaWebapiUi/js/webapiReCaptchaRegistry': {
                'PayPal_Braintree/js/reCaptcha/webapiReCaptchaRegistry-mixin': true
            },
            'Magento_CheckoutAgreements/js/view/checkout-agreements': {
                'PayPal_Braintree/js/checkoutAgreements/view/checkout-agreements-mixin': true
            },
            'Magento_ReCaptchaFrontendUi/js/reCaptcha': {
                'PayPal_Braintree/js/reCaptcha/recaptcha-mixin': true
            }
        }
    },
    map: {
        '*': {
            braintreeCheckoutPayPalAdapter: 'PayPal_Braintree/js/view/payment/adapter'
        }
    },
    paths: {
        'ApplePaySDK': 'https://applepay.cdn-apple.com/jsapi/v1.3.3/apple-pay-sdk'
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright 2017 Adobe
 * All Rights Reserved.
 */

var config = {
    deps: [
        'Magento_Theme/js/theme'
    ]
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    config: {
        mixins: {
            'Magento_Theme/js/view/messages': {
                'Magento_Theme/js/view/messages-fix': true
            },
            'mage/validation': {
                'Magento_Theme/js/view/validation-mixin': true
            },
            'Magento_Ui/js/form/element/abstract': {
                'Magento_Theme/js/view/validation-ui': true
            }
        }
    },
    map: {
        '*': {
            'lazysizes': 'Magento_Theme/js/lazysizes-umd'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © magebig.com - All rights reserved.
 * See LICENSE.txt for license details.
 */
var config = {
    config: {
        mixins: {
            'Magento_Checkout/js/view/minicart': {
                'Magento_Checkout/js/view/minicart-mixin': true
            },
            'Magento_Checkout/js/proceed-to-checkout': {
                'Magento_Checkout/js/proceed-to-checkout-mixin': true
            },
            'Magento_Checkout/js/sidebar': {
                'Magento_Checkout/js/sidebar-mixin': true
            }
        }
    },
    deps: [
        'Magento_Checkout/js/proceed-to-checkout-init'
    ]
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            fixCaptchaAfterAjax: 'Magento_Captcha/js/captcha-fix'
        }
    }
};

require.config(config);
})();



})(require);