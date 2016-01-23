angular.module('app').directive('myTags', function() {
  return {
    restrict: 'EA',
    scope:{
      'tags': '=',
      "quote":'='
    },
    templateUrl : 'html/templateTags.html',
    controller: 'tagsCtrl'
  }
});

angular.module('app').controller('tagsCtrl', function ($scope) {
    $scope.addTag = function(tag){
        if($scope.quote.tags.indexOf(tag.name)<0){
            $scope.quote.tags.push(tag.name);
        }
        $scope.tags.splice($scope.tags.indexOf(tag), 1)
    }
});