//EMI Calculator

var angularModule = angular.module('calculator', ['ngMessages']);

angularModule.controller("emicalculator", function ($scope) {
    $scope.loanAmount = 100;
    $scope.interestRate = 10;
    $scope.durationYear = 5;
    $scope.durationMonth =12;
    var Multiplier = 12;
    $scope.update = function () {
      
        if ($scope.loanAmount != undefined && $scope.interestRate != undefined && $scope.durationYear != undefined) {
            var numerator = $scope.loanAmount * Math.pow((1 + $scope.interestRate / (Multiplier * 100)), $scope.durationYear * Multiplier);
            var denominator = 100 * Multiplier * (Math.pow((1 + $scope.interestRate / (Multiplier * 100)), $scope.durationYear * Multiplier) - 1) / $scope.interestRate;
            var EMI = 12 * (numerator / (denominator * 12));
            $scope.EMI =EMI;// Math.round(EMI);
            $scope.TotalInterest = ((Math.round(EMI) * ($scope.durationYear * 12)) - $scope.loanAmount);
            $scope.TotalLoan = (Math.round(EMI) * ($scope.durationYear * 12));
        } else {
            formEmiCalculator.summary.$error = {
                "error": true
            }
        }

    };
    $scope.update();

    $scope.toggleDuration = function (duration) {
        if (duration == 'year') {
            Multiplier = 1;
        } else if ('months') {
            Multiplier = 12;
        }
        $scope.multiplier = Multiplier;
    };
  function get_round(X) {
   return Math.round(X * 100) / 100 
 }
});
 
function showpay() {
 if ((document.calc.loan.value == null || document.calc.loan.value.length == 0) ||
     (document.calc.months.value == null || document.calc.months.value.length == 0)
||
     (document.calc.rate.value == null || document.calc.rate.value.length == 0))
 { document.calc.pay.value = "Incomplete data";
document.calc.tot_amount.value = "Incomplete data";
document.calc.tot_interest.value = "Incomplete data";
document.calc.yearly_interest.value = "Incomplete data";
document.calc.interest_pa.value = "Incomplete data";
document.calc.interest_pm.value = "Incomplete data";
 }
 else
 {
 var princ = document.calc.loan.value;
 var term  = document.calc.months.value;
 var intr   = document.calc.rate.value / 1200;
 var yrs   = document.calc.months.value / 12;
 document.calc.pay.value = get_round(princ * intr / (1 - (Math.pow(1/(1 + intr), term))));
 document.calc.tot_amount.value = get_round(document.calc.pay.value * term);
 document.calc.tot_interest.value = get_round(document.calc.tot_amount.value - princ);
 document.calc.yearly_interest.value = get_round(document.calc.tot_interest.value / yrs);
 document.calc.interest_pa.value = get_round(document.calc.yearly_interest.value / princ * 100);
 document.calc.interest_pm.value = get_round((document.calc.yearly_interest.value / princ * 100)/12);
 }
}