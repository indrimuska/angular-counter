# Angular Counter

**Angular Counter** is a *directive* to animate number increment/decrement.

![Angular Counter](img/angular-counter.gif)

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

All attributes are self-explanatory.
```html
<!-- `counter` directive can be used as: Element / Class / Attribute -->
<div    class="counter"
        value="ctrl.myValue"
           to="ctrl.numberToReach"
     duration="ctrl.theDuration"
       effect="ctrl.myEffect"
       finish="ctrl.counterFinish()"> {{ ctrl.value | number:0 }} % </div>

<!-- bind counter value anywhere -->
<span ng-bind="ctrl.value"></span>
```
**INFO**: Animation starts every time the attribute `to` changes.

## License
Copyright (c) 2015 Indri Muska. Licensed under the MIT license.