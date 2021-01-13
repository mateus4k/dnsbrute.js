# eslint-config-sabia [![travis][travis-image]][travis-url] [![npm][npm-image]][npm-url] [![downloads][downloads-image]][downloads-url] [![javascript style guide][sabia-image]][sabia-url]

[travis-image]: https://img.shields.io/travis/ufersa/eslint-config-sabia/master.svg
[travis-url]: https://travis-ci.org/ufersa/eslint-config-sabia
[npm-image]: https://img.shields.io/npm/v/eslint-config-sabia.svg
[npm-url]: https://www.npmjs.com/package/@ufersa/eslint-config-sabia
[downloads-image]: https://img.shields.io/npm/dm/eslint-config-sabia.svg
[downloads-url]: https://www.npmjs.com/package/@ufersa/eslint-config-sabia
[sabia-image]: https://img.shields.io/badge/code_style-sabia-brightgreen.svg
[sabia-url]: https://www.npmjs.com/package/@ufersa/eslint-config-sabia

#### An ESLint [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs) for **JavaScript Sabia Style**

## Install

```bash
npm run init domain.com
```

## Usage

Shareable configs are designed to work with the `extends` feature of `.eslintrc` files.
You can learn more about
[Shareable Configs](http://eslint.org/docs/developer-guide/shareable-configs) on the
official ESLint website.

**If you want to set up the config manually**, run the following command:

```bash
npm i -D eslint-config-sabia @10up/eslint-config eslint eslint-config-airbnb eslint-config-airbnb-base eslint-config-prettier eslint-plugin-cypress eslint-plugin-import eslint-plugin-jest eslint-plugin-jsdoc eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks prettier tape babel-eslint
```

Then, add this to your `.eslintrc` file:

```
{
  "extends": "sabia"
}
```

*Note: We omitted the `eslint-config-` prefix since it is automatically assumed by ESLint.*

You can override settings from the shareable config by adding them directly into your
`.eslintrc` file.

## Badge

Use this in one of your projects? Include one of these badges in your readme to
let people know that your code is using the standard style.

[![js-sabia-style](https://img.shields.io/badge/code%20style-sabia-brightgreen.svg)](https://www.npmjs.com/package/@ufersa/eslint-config-sabia)

```markdown
[![js-sabia-style](https://img.shields.io/badge/code%20style-sabia-brightgreen.svg)](https://www.npmjs.com/package/@ufersa/eslint-config-sabia)
```
