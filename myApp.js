angular.module('flickrApp', [])
  .controller('MyCtrl', ['$scope', '$http', function($scope, $http){

  //array results
  $scope.results = [];

  //define search method
  $scope.search = function(){
  $scope.loading = true;
    $http({
      method:'GET',
      url: 'https://api.flickr.com/services/rest',
      params:{
        method: 'flickr.photos.search',
        api_key: 'faeafbc13ae6ae8b6e4a75283436f356',
        tags: $scope.keyword,
        format: 'json',
        nojsoncallback: 1
      }
    }).success(function(data){

      $scope.results = data;
      $scope.loading = false;

    }).error(function(error){
      console.error(error);
      $scope.loading = false;
    }).finally(function(){
      $scope.loading = false;
      console.log("skippy!")

    });



  };

}]);
