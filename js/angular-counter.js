(function (angular) {
	
	var Counter = (function () {
		
		// Counter directive
		function Counter(timeout) {
			this.restrict = 'EAC';
			this.scope = {
				to:	      '=',
				value:	  '=',
				effect:   '=?',
				duration: '=?',
				finish:   '&?'
			};
			$timeout = timeout;
		}
		Counter.prototype.$inject = ['$timeout'];
		Counter.prototype.link = function ($scope, $element, $attrs, $controller) {
			var defaults = {
					effect:   'linear',
					duration: 1000
				};
			
			if (!angular.isDefined($scope.to))
				throw new 'Angular Counter: attribute `to` is undefined';
			
			angular.forEach(defaults, function (value, key) {
				if (!angular.isDefined($scope[key])) $scope[key] = defaults[key];
			});
			
			$scope.$watch('to', function () {
				if (parseFloat($scope.value || 0) == parseFloat($scope.to || 0)) return;
				$({ value: parseFloat($scope.value || 0) }).animate({ value: parseFloat($scope.to) }, {
					duration: $scope.duration,
					easing: $scope.effect,
					step: function (value) {
						$timeout(function () {
							$scope.$apply(function () {
								$scope.value = value;
							});
						});
					}
				}).promise().done(function () {
					if (angular.isFunction($scope.finish)) $scope.finish();
				});
			});
		};
		
		return Counter;
	})();
	
	angular
		.module('counter', [])
		.directive('counter', ['$timeout', function ($timeout) {
			return new Counter($timeout);
		}]);
	
})(window.angular);