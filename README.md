# Angular Counter

[![Join the chat at https://gitter.im/indrimuska/angular-counter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/indrimuska/angular-counter?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

**Angular Counter** is a *directive* to animate number increment/decrement.

Check out the demo page at http://indrimuska.github.io/angular-counter.

![Angular Counter](http://indrimuska.github.io/angular-counter/img/angular-counter.gif)

## Dependencies

* [jQuery](https://jquery.com/) >= 1.7.1
* [jQuery Easing](http://gsgd.co.uk/sandbox/jquery/easing/) by gsgd, CDN [here](http://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js)
* [AngularJS](https://angularjs.org/)

## Installation

In your HTML file:

```html
<script src="http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script src="http://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.4/angular.js"></script>
<script src="./js/angular-counter.js"></script>
```

In your JS code:
```js
var app = angular.module('MyApp', ['counter']);
```

## Usage

```html
<!-- `counter` directive can be used as: Element / Class / Attribute -->
<div    class="counter"
        value="ctrl.myValue"
           to="ctrl.myTarge"
     duration="ctrl.myDuration"
       effect="ctrl.myEffect"
       finish="ctrl.counterFinish()"> {{ ctrl.myValue | number:0 }} % </div>

<!-- bind counter value anywhere -->
<span ng-bind="ctrl.myValue"></span>
```
**INFO**: Animation starts every time the attribute `to` changes.

## Service

*Angular Counter* directive makes use of a built-in service `$counter` with a single `.count(..)` that requires the following parameters:

Parameter | Type | Description
---|---|---
from | `float` | Initial number.
to | `float` | Target number to reach.
duration | `integer` | Duration of the animation in ms.
effect | `string` | Effect name.
step | `function` | Callback after each animation step.<br><small>Remember to `$apply` the scope!</small>
finish | `function` | Callback at the end of the animation.

## License
Copyright (c) 2015 Indri Muska. Licensed under the MIT license.