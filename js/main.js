// JavaScript Document
/*jslint browder:true */
"use strict";

document.getElementById("first").innerHTML = "Fortune Teller";

document.getElementById("second").innerHTML = "Seeing Days Of Future";




function generateRandom(top) {
  var x = Math.random();
  x = x * top;
  x = (Math.floor(x)) + 1;
  return x;
}


function getMonth(month) {
 var msg ;
 switch(month) {
 case 1:
 msg = "January";
 break;
 case 2:
 msg = "February";
break;
case 3:
msg = "March";
break;
case 4:
msg = "April";
break;
case 5:
msg = "May";
break;
case 6:
msg = "June";
break;
case 7:
msg = "July";
break;
case 8:
msg = "August";
break;
case 9:
msg = "September";
break;
case 10:
msg = "October";
break;
case 11:
msg = "November";
break;
case 12:
msg = "December";
break;
default:
msg = "A Random Day"

} // end of switch
return msg;
} // end of function




var monthType = generateRandom(12);
var monthNum = getMonth(monthType);



function getHome(kind) {
 var msg ;
 switch(kind) {
 case 1:
 msg = "Get Eaten By A Crocodile";
 break;
 case 2:
 msg = "Fall Into A Pit of Despair";
break;
case 3:
msg = "Meet Trump and Die";
break;
case 4:
msg = "Get a papercut that will never heal";
break;
case 5:
msg = "Get ran over by an angry bull";
break;
case 6:
msg = "Accidentally get iced by a snowplow";
break;
case 7:
msg = "Choke on a old crusty pizza";
break;
case 8:
msg = "Trip down the stairs and break yo neck";
break;
case 9:
msg = "Get killed by a stray bullet";
break;
case 10:
msg = "lose the ability to breath because your lungs will forget how to suck in oxygen";
break;
case 11: 
msg = "eat so much food that you die of heart attack";
break;
case 12:
msg = "lose a fight to a bear";
break;
} // end of switch
return msg;
} // end of function



var homeType = generateRandom(12);
var homeKind = getHome(homeType);
var toDay = Math.floor(Math.random() * 30) + 1;







var feedbackMessage = "On the day of "+ monthNum + " " +  toDay +" you will "+ homeKind;
document.getElementById('feedback').innerHTML = feedbackMessage;


function myFunction() {
	location.reload();
}