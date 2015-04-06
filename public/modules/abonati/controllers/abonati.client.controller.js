'use strict';

// Articles controller
angular.module('abonati').controller('AbonatiController', ['$scope', '$stateParams', '$location', 'Authentication', 'Abonati',
	function($scope, $stateParams, $location, Authentication, Abonat) {
		$scope.authentication = Authentication;

		// Create new Article
		$scope.create = function() {
			// Create new Abonat object
			var abonat = new Abonat({
                numeMare: this.numeMare,
                numeMic: this.numeMic,
                adresa: this.adresa,
                email: this.email
			});

			// Redirect after save
			abonat.$save(function(response) {
				$location.path('abonati/' + response._id);

				// Clear form fields
				$scope.numeMare = '';
				$scope.numeMic = '';
				$scope.email = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

//		// Remove existing Article
//		$scope.remove = function(article) {
//			if (article) {
//				article.$remove();
//
//				for (var i in $scope.articles) {
//					if ($scope.articles[i] === article) {
//						$scope.articles.splice(i, 1);
//					}
//				}
//			} else {
//				$scope.article.$remove(function() {
//					$location.path('articles');
//				});
//			}
//		};
//
//		// Update existing Article
//		$scope.update = function() {
//			var article = $scope.article;
//
//			article.$update(function() {
//				$location.path('articles/' + article._id);
//			}, function(errorResponse) {
//				$scope.error = errorResponse.data.message;
//			});
//		};
//
//		// Find a list of Articles
//		$scope.find = function() {
//			$scope.articles = Articles.query();
//		};
//
//		// Find existing Article
//		$scope.findOne = function() {
//			$scope.article = Articles.get({
//				articleId: $stateParams.articleId
//			});
//		};
	}
]);