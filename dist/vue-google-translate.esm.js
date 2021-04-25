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
//
var script = {
  name: 'Translator',
  props: {
    countries: {
      type: Array,

      default() {
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
    hasClickListener() {
      return Object.keys(this.$listeners).includes('on-country-click');
    }

  },
  methods: {
    doTranslation(code) {
      window.doGTranslate(code);

      if (this.hasClickListener) {
        this.$emit('on-country-click');
      }

      return false;
    }

  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
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
}

const isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return (id, style) => addStyle(id, style);
}
let HEAD;
const styles = {};
function addStyle(id, css) {
    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        let code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                style.element.setAttribute('media', css.media);
            if (HEAD === undefined) {
                HEAD = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            const index = style.ids.size - 1;
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index])
                style.element.removeChild(nodes[index]);
            if (nodes.length)
                style.element.insertBefore(textNode, nodes[index]);
            else
                style.element.appendChild(textNode);
        }
    }
}

/* script */
const __vue_script__ = script;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', [_c('div', {
    staticClass: "grid md:grid-cols-2 lg:grid-cols-3  p-4 shadow m-4 rounded-lg"
  }, _vm._l(_vm.countries, function (country) {
    return _c('div', {
      key: country.id,
      staticClass: "py-2"
    }, [_c('span', {
      attrs: {
        "title": country.title
      },
      on: {
        "click": function ($event) {
          return _vm.doTranslation(country.code);
        }
      }
    }, [_c('span', {
      staticClass: "language-item"
    }, [_c('img', {
      staticClass: "flag",
      attrs: {
        "alt": country.alt,
        "src": "https://cdn.jsdelivr.net/npm/vue-gtranslate/img/flags/__" + country.title + ".png"
      }
    }), _vm._v(" "), _c('span', {
      staticClass: "language__text"
    }, [_vm._v(_vm._s(country.title))])])])]);
  }), 0), _vm._v(" "), _c('div', {
    attrs: {
      "id": "google_translate_element2"
    }
  }, [_vm._t("default")], 2)]);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-f034cc42_0", {
    source: "a[data-v-f034cc42]:link{text-decoration:none;font-size:large;cursor:pointer}.language-item[data-v-f034cc42]{display:flex}.language__text[data-v-f034cc42]{color:#000;margin-top:7px;padding-left:5px;text-decoration:none}.language-item[data-v-f034cc42]:hover{cursor:pointer;text-decoration:underline}.flag[data-v-f034cc42]{height:40px}h3[data-v-f034cc42]{cursor:pointer}.row[data-v-f034cc42]{display:flex;flex-wrap:wrap}.column[data-v-f034cc42]{flex:20%;padding:10px}@media screen and (max-width:992px){.column[data-v-f034cc42]{flex:25%}}@media screen and (max-width:600px){.row[data-v-f034cc42]{flex-direction:column}}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = "data-v-f034cc42";
/* module identifier */

const __vue_module_identifier__ = undefined;
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, createInjector, undefined, undefined);

/* eslint-disable import/prefer-default-export */

var components = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Translator: __vue_component__
});

// Import vue components

const install = function installVueGoogleTranslate(Vue) {
  Object.entries(components).forEach(([componentName, component]) => {
    Vue.component(componentName, component);
  });
}; // Create module definition for Vue.use()

export default install;
export { __vue_component__ as Translator };
