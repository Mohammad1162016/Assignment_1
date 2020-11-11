

var assinment = angular.module("mealAssinment" , []) ;


assinment.controller("checkMaels" , checkMaels ) ;

function checkMaels($scope){

  $scope.maels = "" ;

  $scope.checkMaelsFun = function(){
   
   var maelsList = $scope.maels
   var maelsListSplit = maelsList.split(",");

    if(maelsList.length == 0){
      $scope.ans = "Enter Your maels" ;
    }
  else if(maelsListSplit.length <= 3 )
  
  $scope.ans = "Enjoy" ;
  else
  $scope.ans = "too much" ;

  }

  
};




