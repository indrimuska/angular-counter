angular
    .module('AngularCounterDemo', ['counter', 'ngAnimate'])
    .controller('AngularCounterDemoCtrl', ['$scope', '$timeout', function ($scope, $timeout) {
        var ctrl = this;
        
        ctrl.value    = 0;
        ctrl.to       = 100;
        ctrl.duration = 3000;
        
        ctrl.effect   = 'linear';
        ctrl.effects  = [
            'linear',
            'swing',
            'jswing',
            'easeInQuad',
            'easeOutQuad',
            'easeInOutQuad',
            'easeInCubic',
            'easeOutCubic',
            'easeInOutCubic',
            'easeInQuart',
            'easeOutQuart',
            'easeInOutQuart',
            'easeInQuint',
            'easeOutQuint',
            'easeInOutQuint',
            'easeInSine',
            'easeOutSine',
            'easeInOutSine',
            'easeInExpo',
            'easeOutExpo',
            'easeInOutExpo',
            'easeInCirc',
            'easeOutCirc',
            'easeInOutCirc',
            'easeInElastic',
            'easeOutElastic',
            'easeInOutElastic',
            'easeInBack',
            'easeOutBack',
            'easeInOutBack',
            'easeInBounce',
            'easeOutBounce',
            'easeInOutBounce'
        ];
        
        ctrl.finish = false;
        ctrl.counterFinish = function () {
            $scope.$apply(function () {
                ctrl.finish = true;
            });
            $timeout(function () {
                ctrl.finish = false;
                $timeout(function () {
                    ctrl.to = 0;
                }, 2000);
            }, 100);
        };
        
        $scope.$watch('ctrl.effect', function () {
            ctrl.to = ctrl.to ? 0 : 100;
        });
    }]);

hljs.initHighlightingOnLoad();