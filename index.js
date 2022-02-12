

function createEmployeeRecord(array){
  let employeeRecord = {
    firstName : array[0],
    familyName : array[1],
    title : array[2],
    payPerHour : array[3],
    timeInEvents : [],
    timeOutEvents : []
}
return employeeRecord
} 

function createEmployeeRecords(arrayOfArray){
 
  return arrayOfArray.map(empObj => createEmployeeRecord(empObj))
}

function createTimeInEvent(employeeRecordObj, dateInStamp){
  let timeDateStamp = dateInStamp.split(" ");
  let dateStamp = timeDateStamp[0];
  let timeStamp = parseInt(timeDateStamp[1]);
  let timeDatesStampObj = {
    type : "TimeIn",
    date : dateStamp,
    hour : timeStamp
  }
  employeeRecordObj.timeInEvents.push(timeDatesStampObj);
  return employeeRecordObj
  
}

function  createTimeOutEvent(employeeRecordObj, dateOutStamp){
  let timeDateStamp = dateOutStamp.split(" ");
  let dateStamp = timeDateStamp[0];
  let timeStamp = parseInt(timeDateStamp[1]);
  let timeDatesStampObj = {
    type : "TimeOut",
    date : dateStamp,
    hour : timeStamp
  }
  employeeRecordObj.timeOutEvents.push(timeDatesStampObj);
  return employeeRecordObj
}
 
function hoursWorkedOnDate(employeeRecordObj, formDate){
let thisInDate = employeeRecordObj.timeInEvents.find(date => date.date === formDate);
let thisOutDate = employeeRecordObj.timeOutEvents.find(date => date.date === formDate)
let inTime = thisInDate.hour
let outTime = thisOutDate.hour
return (outTime - inTime)/100
  }


function wagesEarnedOnDate(employeeRecordObj, formDate){
 let hoursWorked = hoursWorkedOnDate(employeeRecordObj, formDate);
 let payRate = employeeRecordObj.payPerHour;
 return hoursWorked * payRate
}

function allWagesFor(employeeRecordObj){
  let datesWorked = employeeRecordObj.timeInEvents
  let datesWorkedArr = datesWorked.map(date => date.date)
  let payPerDay = []
  for (let formDate of datesWorkedArr){
    let dayPay = wagesEarnedOnDate(employeeRecordObj,formDate);
    payPerDay.push(dayPay)
  }
  return payPerDay.reduce((currentValue, previousValue) => currentValue + previousValue)

}

function calculatePayroll(array){
 
  let empPay = array.map(emp => allWagesFor(emp))
  console.log(empPay, "EMPLOYEE PAY");
  let allPayroll = empPay.reduce((previousValue, currentValue) => previousValue + currentValue)
  return allPayroll
 
}

