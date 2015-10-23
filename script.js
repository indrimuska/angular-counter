angular
    .module('AngularCounterDemo', ['counter'])
    .controller('AngularCounterDemoCtrl', ['$scope', '$timeout', function ($scope, $timeout) {
        var ctrl = this;
        
        ctrl.myValue    = 0;
        ctrl.myTarget   = 100;
        ctrl.myDuration = 2000;
        ctrl.myEffect = 'easeOutBack';
		
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
            }, 1000);
        };
		
		ctrl.toggleTarget = function () {
            ctrl.myTarget = ctrl.myTarget ? 0 : 100;
		};
		
        $scope.$watch('ctrl.myEffect', ctrl.toggleTarget);
    }]);

hljs.initHighlightingOnLoad();