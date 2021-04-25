'use strict';function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script = {
  name: 'Translator',
  props: {
    countries: {
      type: Array,
      default: function _default() {
        return [{
          code: 'en|af',
          title: 'Afrikaans'
        }, {
          code: 'en|sq',
          title: 'Albanian'
        }, {
          code: 'en|ar',
          title: 'Arabic'
        }, {
          code: 'en|hy',
          title: 'Armenian'
        }, {
          code: 'en|az',
          title: 'Azerbaijani'
        }, {
          code: 'en|eu',
          title: 'Basque'
        }, {
          code: 'en|be',
          title: 'Belarusian'
        }, {
          code: 'en|bg',
          title: 'Bulgarian'
        }, {
          code: 'en|ca',
          title: 'Catalan'
        }, {
          code: 'en|zh-CN',
          title: 'Chinese (Simplified)'
        }, {
          code: 'en|zh-TW',
          title: 'Chinese (Traditional)'
        }, {
          code: 'en|hr',
          title: 'Croatian'
        }, {
          code: 'en|cs',
          title: 'Czech'
        }, {
          code: 'en|da',
          title: 'Danish'
        }, {
          code: 'en|nl',
          title: 'Dutch'
        }, {
          code: 'en|en',
          title: 'English'
        }, {
          code: 'en|et',
          title: 'Estonian'
        }, {
          code: 'en|tl',
          title: 'Filipino'
        }, {
          code: 'en|fi',
          title: 'Finnish'
        }, {
          code: 'en|fr',
          title: 'French'
        }, {
          code: 'en|de',
          title: 'German'
        }, {
          code: 'en|el',
          title: 'Greek'
        }, {
          code: 'en|hu',
          title: 'Hungarian'
        }, {
          code: 'en|id',
          title: 'Indonesian'
        }, {
          code: 'en|ga',
          title: 'Irish'
        }, {
          code: 'en|it',
          title: 'Italian'
        }, {
          code: 'en|ja',
          title: 'Japanese'
        }, {
          code: 'en|ko',
          title: 'Korean'
        }, {
          code: 'en|lt',
          title: 'Lithuanian'
        }, {
          code: 'en|ms',
          title: 'Malay'
        }, {
          code: 'en|no',
          title: 'Norwegian'
        }, {
          code: 'en|pl',
          title: 'Polish'
        }, {
          code: 'en|pt',
          title: 'Portuguese'
        }, {
          code: '"en|ro',
          title: 'Romanian'
        }, {
          code: 'en|ru',
          title: 'Russian'
        }, {
          code: 'en|es',
          title: 'Spanish'
        }, {
          code: 'en|sv',
          title: 'Swedish'
        }, {
          code: 'en|th',
          title: 'Thai'
        }, {
          code: 'en|tr',
          title: 'Turkish'
        }, {
          code: 'en|uk',
          title: 'Ukrainian'
        }];
      }
    }
  },
  computed: {
    hasClickListener: function hasClickListener() {
      return Object.keys(this.$listeners).includes('on-country-click');
    }
  },
  methods: {
    doTranslation: function doTranslation(code) {
      window.doGTranslate(code);

      if (this.hasClickListener) {
        this.$emit('on-country-click');
      }

      return false;
    }
  }
};function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}function createInjectorSSR(context) {
    if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
    }
    if (!context)
        return () => { };
    if (!('styles' in context)) {
        context._styles = context._styles || {};
        Object.defineProperty(context, 'styles', {
            enumerable: true,
            get: () => context._renderStyles(context._styles)
        });
        context._renderStyles = context._renderStyles || renderStyles;
    }
    return (id, style) => addStyle(id, style, context);
}
function addStyle(id, css, context) {
    const group = css.media || 'default' ;
    const style = context._styles[group] || (context._styles[group] = { ids: [], css: '' });
    if (!style.ids.includes(id)) {
        style.media = css.media;
        style.ids.push(id);
        let code = css.source;
        style.css += code + '\n';
    }
}
function renderStyles(styles) {
    let css = '';
    for (const key in styles) {
        const style = styles[key];
        css +=
            '<style data-vue-ssr-id="' +
                Array.from(style.ids).join(' ') +
                '"' +
                (style.media ? ' media="' + style.media + '"' : '') +
                '>' +
                style.css +
                '</style>';
    }
    return css;
}/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', [_vm._ssrNode("<div class=\"grid md:grid-cols-2 lg:grid-cols-3  p-4 shadow m-4 rounded-lg\" data-v-f034cc42>" + _vm._ssrList(_vm.countries, function (country) {
    return "<div class=\"py-2\" data-v-f034cc42><span" + _vm._ssrAttr("title", country.title) + " data-v-f034cc42><span class=\"language-item\" data-v-f034cc42><img" + _vm._ssrAttr("alt", country.alt) + _vm._ssrAttr("src", "https://cdn.jsdelivr.net/npm/vue-gtranslate/img/flags/__" + country.title + ".png") + " class=\"flag\" data-v-f034cc42> <span class=\"language__text\" data-v-f034cc42>" + _vm._ssrEscape(_vm._s(country.title)) + "</span></span></span></div>";
  }) + "</div> "), _vm._ssrNode("<div id=\"google_translate_element2\" data-v-f034cc42>", "</div>", [_vm._t("default")], 2)], 2);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-f034cc42_0", {
    source: "a[data-v-f034cc42]:link{text-decoration:none;font-size:large;cursor:pointer}.language-item[data-v-f034cc42]{display:flex}.language__text[data-v-f034cc42]{color:#000;margin-top:7px;padding-left:5px;text-decoration:none}.language-item[data-v-f034cc42]:hover{cursor:pointer;text-decoration:underline}.flag[data-v-f034cc42]{height:40px}h3[data-v-f034cc42]{cursor:pointer}.row[data-v-f034cc42]{display:flex;flex-wrap:wrap}.column[data-v-f034cc42]{flex:20%;padding:10px}@media screen and (max-width:992px){.column[data-v-f034cc42]{flex:25%}}@media screen and (max-width:600px){.row[data-v-f034cc42]{flex-direction:column}}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__ = "data-v-f034cc42";
/* module identifier */

var __vue_module_identifier__ = "data-v-f034cc42";
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject shadow dom */

var __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, createInjectorSSR, undefined);/* eslint-disable import/prefer-default-export */var components$1=/*#__PURE__*/Object.freeze({__proto__:null,Translator: __vue_component__});var install = function installVueGoogleTranslate(Vue) {
  Object.entries(components$1).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        componentName = _ref2[0],
        component = _ref2[1];

    Vue.component(componentName, component);
  });
}; // Create module definition for Vue.use()
var components=/*#__PURE__*/Object.freeze({__proto__:null,'default': install,Translator: __vue_component__});// only expose one global var, with component exports exposed as properties of
// that global var (eg. plugin.component)

Object.entries(components).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      componentName = _ref2[0],
      component = _ref2[1];

  if (componentName !== 'default') {
    install[componentName] = component;
  }
});module.exports=install;