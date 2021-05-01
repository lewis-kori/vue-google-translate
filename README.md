# vue-google-translate

> A vue.js package that allows for localization of web apps.

## Table of Contents

 1. [Problem](#problem)
 2. [Demo](#demo)
 3. [Installation](#installation)
 4. [Usage](#usage)
    - [Props](#props)
 5. [License](#license)

## problem

This package was heavily inspired by [vue-gtranslate](https://github.com/Katalyst33/vue-gtranslate).

This package enables localization of web apps made with vue by use of google translate.
As your website and app grows, you may find a need to expand to other markets outside your home country.

If your target market lives across the sea and speaks a different language, you may not have any choice but to localize. However, if those people can speak your language, consider other aspects (cultural and/or legal) to make an informed decision on whether to translate.

For more details on what localization is and the potential benefits, [checkout this article](https://alistapart.com/article/do-you-need-to-localize-your-website/).

## Demo

To view the package in action, check it out [here.](https://codesandbox.io/s/wz1ln)

## Installation

```text
yarn add vue-google-translate
npm i vue-google-translate
```

## Usage

```html
//index.html

<head>
  <script type="text/javascript">
    function googleTranslateElementInit() {
      new google.translate.TranslateElement(
        { pageLanguage: 'en', autoDisplay: false },
        'app'
      );
    }
    // app can be changed to the default id of your vue app available in App.vue or an id section of where
    // you need translated
  </script>
  <script
    type="text/javascript"
    src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
  ></script>
  <script type="text/javascript">
    /* <![CDATA[ */
    eval(
      (function(p, a, c, k, e, r) {
        e = function(c) {
          return (
            (c < a ? '' : e(parseInt(c / a))) +
            ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
          );
        };
        if (!''.replace(/^/, String)) {
          while (c--) r[e(c)] = k[c] || e(c);
          k = [
            function(e) {
              return r[e];
            },
          ];
          e = function() {
            return '\\w+';
          };
          c = 1;
        }
        while (c--)
          if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
        return p;
      })(
        "6 7(a,b){n{4(2.9){3 c=2.9(\"o\");c.p(b,f,f);a.q(c)}g{3 c=2.r();a.s('t'+b,c)}}u(e){}}6 h(a){4(a.8)a=a.8;4(a=='')v;3 b=a.w('|')[1];3 c;3 d=2.x('y');z(3 i=0;i<d.5;i++)4(d[i].A=='B-C-D')c=d[i];4(2.j('k')==E||2.j('k').l.5==0||c.5==0||c.l.5==0){F(6(){h(a)},G)}g{c.8=b;7(c,'m');7(c,'m')}}",
        43,
        43,
        '||document|var|if|length|function|GTranslateFireEvent|value|createEvent||||||true|else|doGTranslate||getElementById|app|innerHTML|change|try|HTMLEvents|initEvent|dispatchEvent|createEventObject|fireEvent|on|catch|return|split|getElementsByTagName|select|for|className|goog|te|combo|null|setTimeout|500'.split(
          '|'
        ),
        0,
        {}
      )
    );
    /* ]]> */
  </script>
</head>
```

use in any component

```vue
import { Translator } from 'vue-google-translate';
<template>
<div>
<Translator />
<div>
</template>

export default {
  components: {
    Translator
  }
}
```

### props

pass an array of countries in the following format

```javascript
[
  {
    code: 'en|af',
    title: 'Afrikaans',
  },
  {
    code: 'en|sq',
    title: 'Albanian',
  },
  {
    code: 'en|ar',
    title: 'Arabic',
  },
  {
    code: 'en|hy',
    title: 'Armenian',
  },
  {
    code: 'en|az',
    title: 'Azerbaijani',
  },
  {
    code: 'en|eu',
    title: 'Basque',
  },
  {
    code: 'en|be',
    title: 'Belarusian',
  },
  {
    code: 'en|bg',
    title: 'Bulgarian',
  },
  {
    code: 'en|ca',
    title: 'Catalan',
  },
  {
    code: 'en|zh-CN',
    title: 'Chinese (Simplified)',
  },
  {
    code: 'en|zh-TW',
    title: 'Chinese (Traditional)',
  },
  {
    code: 'en|hr',
    title: 'Croatian',
  },
  {
    code: 'en|cs',
    title: 'Czech',
  },

  {
    code: 'en|da',
    title: 'Danish',
  },
  {
    code: 'en|nl',
    title: 'Dutch',
  },
  {
    code: 'en|en',
    title: 'English',
  },
  {
    code: 'en|et',
    title: 'Estonian',
  },
  {
    code: 'en|tl',
    title: 'Filipino',
  },
  {
    code: 'en|fi',
    title: 'Finnish',
  },
  {
    code: 'en|fr',
    title: 'French',
  },

  {
    code: 'en|de',
    title: 'German',
  },
  {
    code: 'en|el',
    title: 'Greek',
  },
  {
    code: 'en|hu',
    title: 'Hungarian',
  },
  {
    code: 'en|id',
    title: 'Indonesian',
  },
  {
    code: 'en|ga',
    title: 'Irish',
  },
  {
    code: 'en|it',
    title: 'Italian',
  },
  {
    code: 'en|ja',
    title: 'Japanese',
  },
  {
    code: 'en|ko',
    title: 'Korean',
  },
  {
    code: 'en|lt',
    title: 'Lithuanian',
  },
  {
    code: 'en|ms',
    title: 'Malay',
  },
  {
    code: 'en|no',
    title: 'Norwegian',
  },
  {
    code: 'en|pl',
    title: 'Polish',
  },
  {
    code: 'en|pt',
    title: 'Portuguese',
  },
  {
    code: 'en|ro',
    title: 'Romanian',
  },
  {
    code: 'en|ru',
    title: 'Russian',
  },
  {
    code: 'en|es',
    title: 'Spanish',
  },
  {
    code: 'en|sv',
    title: 'Swedish',
  },
  {
    code: 'en|th',
    title: 'Thai',
  },
  {
    code: 'en|tr',
    title: 'Turkish',
  },
  {
    code: 'en|uk',
    title: 'Ukrainian',
  }
]
```

These are the available ones with images for now.

an optional emit event is also available as

```vue
<template>
  <div>
    <Translator @on-country-click="customEvent" :countries="arrayOfCountries" />
  </div>
</template>
```

### styling

should you wish to get rid of the google banners, insert the following css in a global css file and import this file in your main/index.js files inside `src`

```css
/* gets rid of the banner at the top of the page */
body {
  top: 0 !important;
}
/* get rids of the banner at the bottom of the web page */
.skiptranslate {
  display: none !important;
}
```

## License

vue-google-translate is an open source software licensed under [MIT](https://github.com/lewis-kori/vue-google-translate/blob/main/LICENSE).
