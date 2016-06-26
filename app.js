$(document).ready(function(){
//list of claims made, claims are put into array named, initialList
var claim1 = new Claim("John Doe", "Specialist", 1100);
var claim2 = new Claim("Jane Doe", "Optical", 100);
var claim3 = new Claim("Joe Johnson", "Emergency", 31000);
var claim4 = new Claim("Sharon Smith", "Emergency", 1300);
var claim5 = new Claim("Steve Wright", "Primary Care", 770);
var initialList = [claim1, claim2, claim3, claim4, claim5];
var claim6 = new Claim("Ricky Bobby", "Emergency", 13333);
var claim7 = new Claim("Ron Burgandy", "Optical", 395);
var claim8 = new Claim("Brennan Hufff", "Specialist", 5642);
var claim9 = new Claim("Jackie Moon", "Primary Care", 832);
var claim10 = new Claim("Steve Butabi", "Primary Care", 475);
initialList.push(claim6, claim7, claim8, claim9, claim10);
var totalPayedOut = 0;
//function to create new claim
function Claim(name, type, cost){
	this.patientName = name;
	this.visitType = type;
	this.visitCost = cost;
}

//function to determine percent covered
function perCovered(patient){
	var percentCov=0;
	var visit=patient.visitType;
	switch (visit) {
		case "Optical":
			percentCov=0;
			break;
		case "Specialist":
			percentCov=10;
			break;
		case "Primary Care":
			percentCov=50;
			break;
		case "Emergency":
			percentCov=100;
			break;
		}
	return percentCov;
}
//function to determine amount covered
function amount(patient){
			var percentCov=perCovered(patient);
			var amountCov=Math.round(patient.visitCost*(percentCov/100));
			return amountCov;
}
//function to print out patients amount covered
function printAmounts(list){
	for (var i=0; i<list.length; i++){
		totalPayedOut+=amount(list[i]);
	var print= $("<li>Paid out $"+amount(list[i])+ " for " +list[i].patientName+".</li>");
	$(".people").append(print);
	}
	var printTotal=$("<h2>Total paid out:  $"+totalPayedOut+"</h2>")
	$(".people").after(printTotal);
}
printAmounts(initialList);
});
