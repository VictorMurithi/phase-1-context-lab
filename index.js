/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0)

    return payable
}

function createEmployeeRecord(firstName, familyName, title, payPerHour) {
    return {
      firstName: firstName,
      familyName: familyName,
      title: title,
      payPerHour: payPerHour,
      timeInEvents: [],
      timeOutEvents: [],
    };
}
function createTimeInEvent(employee, timeStamp) {
    const [date, time] = timeStamp.split(" ");
    
    const timeInEvent = {
      type: "TimeIn",
      hour: parseInt(time.substr(0, 2)),
      date: date,
    };
    
    employee.timeInEvents.push(timeInEvent);
    
    return employee;
}
function createTimeOutEvent(employee, timeStamp) {
    const [date, time] = timeStamp.split(" ");
    
    const timeOutEvent = {
      type: "TimeOut",
      hour: parseInt(time.substr(0, 2)),
      date: date,
    };
    
    employee.timeOutEvents.push(timeOutEvent);
    
    return employee;
}
function hoursWorkedOnDate(employee, date) {
    const timeInEvent = employee.timeInEvents.find(event => event.date === date);
    const timeOutEvent = employee.timeOutEvents.find(event => event.date === date);
  
    if (timeInEvent && timeOutEvent) {
      const hoursWorked = (timeOutEvent.hour - timeInEvent.hour);
      return hoursWorked;
    }
  
    return 0;
}
function wagesEarnedOnDate(employee, date) {
    const hoursWorked = hoursWorkedOnDate(employee, date);
    const payRate = employee.payPerHour;
    const wagesEarned = hoursWorked * payRate;
    
    return wagesEarned;
  }
function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(employee => employee.firstName === firstName);
}
function calculatePayroll(employeeArray) {
  return employeeArray.reduce((totalPayroll, employee) => {
    return totalPayroll + allWagesFor(employee);
  }, 0);
}
