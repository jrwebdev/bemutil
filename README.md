# bemutil

Simple [BEM](https://en.bem.info/) (Block, Element, Modifier) helper function. Useful for tidying up the mess BEM creates
and allows for clean conditional application of modifiers. Suited for use with React and JSX.

## Installation

Via NPM:

```
npm install bemutil
```

## Usage

```javascript
var BEM = require('bemutil');

// Set up block
var bem = BEM('my-block');

// Output block
bem();
// 'my-block';


// Output element
bem('my-element');
// 'my-block__my-element'


// Output element and modifier
bem('my-element', 'my-modifier');
// 'my-block__my-element my-block__my-element--my-modifier'


// Output multiple modifiers
bem('my-element', {'my-modifier-1': true, 'my-modifier-2': true});
// 'my-block__my-element my-block__my-element--my-modifier-1 my-block__my-element--my-modifier-2'


// Output modifiers to the block
bem(null, {'my-modifier-1': true, 'my-modifier-2': true});
// 'my-block my-block--my-modifier-1 my-block--my-modifier-2'


// Conditionally apply modifiers
// Values can be truthy or falsy, not just true or false
var showMyModifier1 = 0;
var showMyModifier2 = 1;
bem(null, {'my-modifier-1': showMyModifier1, 'my-modifier-2': showMyModifier2});
// 'my-block my-block--my-modifier-2'


// Also useful for generating CSS selectors
var bem = BEM('.my-block');
bem('my-element', 'my-modifier');
// '.my-block__my-element--my-modifier'
