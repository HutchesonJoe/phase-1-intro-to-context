// Your code here


//GO THROUGH THE STEPS! WRITE OUT, PRE-CODE, ETC.

function createEmployeeRecord(array){
  let timeInArray = []
  let timeOutArray = []
  let employeeRecord = {
    firstName : array[0],
 familyName : array[1],
 title : array[2],
 payPerHour : array[3],
 timeInEvents : timeInArray,
 timeOutEvents : timeOutArray
}
return employeeRecord
} 
//console.log(employeeRecord)
let employeeRecords = []

function createEmployeeRecords(arrayOfArray){
  //uses createEmployeeRecord from an array of employee records; conververts an array of arrays into an array of objects?
  //PSEUDOCODE - 
  //take an array of employee record arrays
    //iterate through each array with createEmployeeRecords
    //returns a new array of employee records as objects
  for (let employeeArray of arrayOfArray){
    let employeeRecord = createEmployeeRecord(employeeArray);
    employeeRecords.push(employeeRecord)
  }
  console.log(employeeRecords)

}

function createTimeInEvent(employeeRecordObj, dateInStamp){
  let timeDateStamp = dateInStamp.split(" ");
  let dateStamp = timeDateStamp[0];
  let timeStamp = timeDateStamp[1];
  let timeDatesStampObj = {
    type : "TimeIn",
    date : dateStamp,
    timeIn : timeStamp
  }
  employeeRecordObj.timeInEvents.push(timeDatesStampObj);
  return employeeRecordObj
  
  //takes in the employee record obj and the date stamp in "YYYY-MM-DD HHMM" format
    //pushes this value in the employee obj, time in array
 
  //adds a time in stamp, records to the employee record;
}

function  createTimeOutEvent(employeeRecordObj, dateOutStamp){
  let timeDateStamp = dateOutStamp.split(" ");
  let dateStamp = timeDateStamp[0];
  let timeStamp = timeDateStamp[1];
  let timeDatesStampObj = {
    type : "TimeOut",
    date : dateStamp,
    timeOut : timeStamp
  }
  employeeRecordObj.timeOutEvents.push(timeDatesStampObj);
  return employeeRecordObj
}
 
function hourseWorkedOnDate(employeeRecordObj, formDate){
let thisInDate = employeeRecordObj.timeInEvents.find(date => date.date === formDate)
let thisOutDate = employeeRecordObj.timeOutEvents.find(date => date.date === formDate)
debugger
console.log(thisInDate, thisOutDate)
//  for (let date of datesWorked){
//    if (date.date === formDate){
//      console.log(date)
//    }
//  }
  }
  //take an argument of the employeeRecordObj and a specific date
    //iterate throught the array to find the in time and out time for that date
    //subtract time in from time out
    //returns an integer of the hours worked

function wagesEarnedOnDate(employeeRecordObj, formDate){
 //calculates the wages for a specific date
}

function allWagesFor(employeeRecordObj){
 //finds all money owed for all dates worked; 'HINT: You will need to find the available dates somehow...'
}

function calculatePayroll(arrayOfArray){
  ///is this the same arrayOfArray above?
  //Using wagesEarnedOnDate, accumulate the value of all dates worked by the employee in the record used as context. Amount should be returned as a number.
}

createEmployeeRecords([["Joe", "Hutch", "Trainer", 100], ["Princess", "Hutcheson", "Kitty", 15], ["Char", "Brown", "Performer", 1000], ["Yo", "Mamam", "Being Yo Mama", 2], ["Joe", "N. Angie","Exotic Dancer", 10000]])