angular.module("Myemp",[])
//Custom filter
.filter("myfilter",function(){
    return function(input,option)
    {
        //NaN : Not a Number
        if(isNaN(option)||(option == ""))
        {
            // whole input will be displayed as it is
            return input;
        }
        else{
        return input.substring(0,option).toUpperCase();
        }
    }
})
.controller("empCtrl", function($scope)
{
    //json file
    var employees = [
        {name :'Tenzin', dob: new Date("September 19,1999"), gender: "Female", salary: 50000.87},
        {name :'Yangzom', dob: new Date("June 29,1999"), gender: "Female", salary: 45000},
        {name :'Yeshi', dob: new Date("December 22,1998"), gender: "Female", salary: 5500.000},
        {name :'Nyima', dob: new Date("January 28,2000"), gender: "Male", salary: 300.900},
        {name :'Bijesh', dob: new Date("March 6,1989"), gender: "Male", salary: 35000},
        {name :'Anush', dob: new Date("June 2,1996"), gender: "Male", salary: 10000}
    ];

    $scope.employees = employees;
    $scope.rowlimit = 6;
});