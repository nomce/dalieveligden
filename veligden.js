    angular.module('veligdenApp', ['countdownTimer'])
      .controller('veligdenController', function() {
        var veligden = this;
         veligden.lista = [
          new Date(2017,3,16),
          new Date(2018,3,1),new Date(2018,3,8),
          new Date(2019,3,21),new Date(2019,3,28),
          new Date(2020,3,12),new Date(2020,3,19),
          new Date(2021,3,4),new Date(2021,4,2),
          new Date(2022,3,17),new Date(2022,3,24)];
     
        veligden.daliEDenesVeligden = function() {
            if (veligden.lista.find(compareDates) !== undefined){
                return "ДА";
            }
            return "НЕ";
        };

        veligden.usteKolku = function(){
            var MAX_TIMESTAMP = 8640000000000000;
            var closest = new Date(MAX_TIMESTAMP);
            var today = new Date();

            veligden.lista.forEach(function(targetDate) {
                if (targetDate.getTime() >= today.getTime() && targetDate.getTime() < closest.getTime()) {
                    closest = targetDate;
                }
            });

            return monthNames[closest.getMonth()] + " " + closest.getDate() + ", " + closest.getFullYear();
        };
     
      });

      var monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"];

      function compareDates(mydate){
                var today = new Date();
                if (today.getFullYear() !== mydate.getFullYear()){
                    return false;
                }
                if (today.getDate() !== mydate.getDate()){
                    return false;
                }
                if (today.getDay() !== mydate.getDay()){
                    return false;
                }
                return true;
            }