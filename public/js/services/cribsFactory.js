angular
     .module('ngCribs')
     .factory('cribsFactory', function ($http) {
        
        function getCribs() {
          return $http.get('data/data.json')
          console.log(data.json)
        }
        
        return {
          getCribs:getCribs
        }

     });