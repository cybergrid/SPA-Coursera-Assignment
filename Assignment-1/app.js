(function(){
  'use strict';

  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);
  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope){

    $scope.CheckButton = function() {
      var totalItem = NumberOfItems($scope);
      if(totalItem > 3) $scope.result = "Too Much!";
      else if(totalItem <= 3 && totalItem > 0) $scope.result = "Enjoy!"
      else{
        $scope.result = "";
      }
    }
  }
  function NumberOfItems($sscope){
    if($sscope.LunchItem){
      var listItem = $sscope.LunchItem.split(',');
      return listItem.length;
    }
    else {
      return 0;
    }
  }

})();
