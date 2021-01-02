var app=angular.module("myapp",[]);
app.controller("countcases",($scope,$http)=>{
    $scope.donotshow=true;
    var urlforworld="https://covid19.mathdro.id/api/";
    $http.get(urlforworld).then(
        (response)=>
        {
            // console.log(response.data);
            $scope.info=response.data;
        }
        ,
        (error)=>
        {
            console.log("Error Occured 😢😢😢😢");
        }
    )

    var onsearch=(keyword)=>{
    var urlforcountry="https://covid19.mathdro.id/api/countries/"+keyword;
    $http.get(urlforcountry).then(
        (response)=>{
            console.log(response.data);
            $scope.data=response.data;
            $scope.donotshow=false;   
            $scope.errormsg=true;
        },
        (error)=>{
            $scope.donotshow=true; 
            $scope.errormsg=false;
            console.log("Error Occured 😢😢😢😢");
        }
    )
    }
    $scope.onsearch=onsearch;
    
});