var test = require('tape');
var BEM = require('../dist/bem');

test('outputting a block', function(t) {
    var bem = BEM('a-block');
    var className = bem();
    t.equal(className, 'a-block', 'should output the block');
    t.end();
});

test('outputting a block via toString()', function(t) {
    var bem = BEM('a-block');
    var className = bem.toString();
    t.equal(className, 'a-block', 'should output the block');
    t.end();
});

test('outputting a block and an element', function(t) {
    var bem = BEM('a-block');
    var className = bem('an-element');
    t.equal(className, 'a-block__an-element', 'should output block__element');
    t.end();
});

test('outputting a block, an element and a modifier if the modifier is a string', function(t) {
    var bem = BEM('a-block');
    var className = bem('an-element', 'a-modifier');
    t.equal(className, 'a-block__an-element a-block__an-element--a-modifier', 'should output block_element block__element--modifier');
    t.end();
});

test('outputting a block, an element and a modifier if the modifier is an object and the value is set to true', function(t) {
    var bem = BEM('a-block');
    var className = bem('an-element', {'a-modifier': true});
    t.equal(className, 'a-block__an-element a-block__an-element--a-modifier', 'should output block_element block__element--modifier');
    t.end();
});

test('not outputting a modifier if the modifier is an object and the value is set to false', function(t) {
    var bem = BEM('a-block');
    var className = bem('an-element', {'a-modifier': false});
    t.equal(className, 'a-block__an-element', 'should output block__element');
    t.end();
});

test('outputting a block, an element and a modifier if the modifier is an object and the value is truthy', function(t) {
    var bem = BEM('a-block');
    var className = bem('an-element', {'a-modifier': 1});
    t.equal(className, 'a-block__an-element a-block__an-element--a-modifier', 'should output block_element block__element--modifier');
    t.end();
});

test('not outputting a modifier if the modifier is an object and the value is falsy', function(t) {
    var bem = BEM('a-block');
    var className = bem('an-element', {'a-modifier': 0});
    t.equal(className, 'a-block__an-element', 'should output block__element');
    t.end();
});

test('outputting a modifier for a block if the modifier is a string', function(t) {
    var bem = BEM('a-block');
    var className = bem(null, 'a-modifier');
    t.equal(className, 'a-block a-block--a-modifier', 'should output block block--modifier');
    t.end();
});

test('outputting a modifier for a block if the modifier is an object and the value is truthy', function(t) {
    t.plan(1);
    var bem = BEM('a-block');
    var className = bem(null, {'a-modifier': true});
    t.equal(className, 'a-block a-block--a-modifier', 'should output block block--modifier');
});

test('not outputting a modifier for a block if the modifier is an object and the value is falsy', function(t) {
    t.plan(1);
    var bem = BEM('a-block');
    var className = bem(null, {'a-modifier': 0});
    t.equal(className, 'a-block', 'should output block');
});

test('should output multiple modifiers for an element using an object', function(t) {
    t.plan(4);
    var bem = BEM('a-block');
    var className = bem('an-element', {'a-modifier': true, 'another-modifier': 1, 'disabled-modifier': false});

    var classes = className.split(' ');
    t.equal(classes.length, 3, 'should output 3 classes');
    t.notEqual(classes.indexOf('a-block__an-element'), -1, 'should output block__element');
    t.notEqual(classes.indexOf('a-block__an-element--a-modifier'), -1, 'should output block__element--modifier');
    t.notEqual(classes.indexOf('a-block__an-element--another-modifier'), -1, 'should output block__element--modifier');
});

test('should output multiple modifiers for a block using an object', function(t) {
    t.plan(4);
    var bem = BEM('a-block');
    var className = bem(null, {'a-modifier': true, 'another-modifier': 1, 'disabled-modifier': false});

    var classes = className.split(' ');
    t.equal(classes.length, 3, 'should output 3 classes');
    t.notEqual(classes.indexOf('a-block'), -1, 'should output block');
    t.notEqual(classes.indexOf('a-block--a-modifier'), -1, 'should output block--modifier');
    t.notEqual(classes.indexOf('a-block--another-modifier'), -1, 'should output block--modifier');
});