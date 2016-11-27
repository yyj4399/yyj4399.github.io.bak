app.controller('myCtrl', function($scope, $connect) {
  $scope.init = function() {
    $connect.get('index/index', function (response) {
      $scope.blog_list = response;
    }, {ajax: 1});
  }
});
