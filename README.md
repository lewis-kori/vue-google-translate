# vue-google-translate

> A vue.js package that allows for localization of web apps.

## Table of Contents

1. [Problem](#problem)
2. [Demo](#demo)
3. [Installation](#installation)
4. [Usage](#usage)
   - [Props](#props)
5. [Default languages](#default-languages)
6. [License](#license)

## problem

This package was heavily inspired by [vue-gtranslate](https://github.com/Katalyst33/vue-gtranslate).

This package enables localization of web apps made with vue by use of google translate.
As your website and app grows, you may find a need to expand to other markets outside your home country.

If your target market lives across the sea and speaks a different language, you may not have any choice but to localize. However, if those people can speak your language, consider other aspects (cultural and/or legal) to make an informed decision on whether to translate.

For more details on what localization is and the potential benefits, [checkout this article](https://alistapart.com/article/do-you-need-to-localize-your-website/).

## Demo

To view the package in action, check it out [in code sandbox.](https://codesandbox.io/s/wz1ln)

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
  <script
    type="text/javascript"
    src="https://cdn.jsdelivr.net/gh/lewis-kori/vue-google-translate@main/src/utils/translatorRegex.js"
  ></script>
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
    code: 'en|ar',
    title: 'Arabic',
  },
  {
    code: 'en|ko',
    title: 'Korean',
  },
  {
    code: 'en|lt',
    title: 'Lithuanian',
  },
];
```

A full list of the [default languages is at the bottom of this doc](#default-languages).
If you wish to add a new language not in the default list, pass the new language with and additional property `flagIconUrl`.
[Here's a good place](https://flagicons.lipis.dev/) to source these icons.
Ensure the translation code is a valid one as well.
You can get the supported languages and their codes from [this website](https://www.labnol.org/code/19899-google-translate-languages#google-translate-languages).

Additionally you can pass an alt text as a key in the translation object. This is useful for accessibility.
Your custom translations would look something like this.

```javascript
[
  {
    code: 'en|iw',
    title: 'Hebrew',
    flagIconUrl: 'https://flagicons.lipis.dev/flags/4x3/il.svg',
    altText: 'Hebrew language translation',
  },
  {
    code: 'ga|pl',
    title: 'Polish',
    flagIconUrl: 'https://flagicons.lipis.dev/flags/4x3/pl.svg',
    altText: 'Poland flag Icon',
  },
];
```

An optional emit event is also available as

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

#### Default languages

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
  },
];
```

## License

vue-google-translate is an open source software licensed under [MIT](https://github.com/lewis-kori/vue-google-translate/blob/main/LICENSE).
