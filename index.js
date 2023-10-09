/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

 function hoursWorkedBetween(timeIn, timeOut) {
  const timeInMinutes = new Date(timeIn).getMinutes();
  const timeOutMinutes = new Date(timeOut).getMinutes();
  const hoursWorked = (new Date(timeOut) - new Date(timeIn)) / (1000 * 60 * 60);
  return hoursWorked - (timeInMinutes / 60) + (timeOutMinutes / 60);
}

function createEmployeeRecord(arr) {
  return {
    firstName: arr[0],
    familyName: arr[1],
    title: arr[2],
    payPerHour: arr[3],
    timeInEvents: [],
    timeOutEvents: [],
  };
}

function createEmployeeRecords(arrays) {
  return arrays.map(arr => createEmployeeRecord(arr));
}

function createTimeInEvent(dateStamp) {
  const [date, hour] = dateStamp.split(' ');
  this.timeInEvents.push({
    type: "TimeIn",
    date: date,
    hour: parseInt(hour),
  });
  return this;
}

function createTimeOutEvent(dateStamp) {
  const [date, hour] = dateStamp.split(' ');
  this.timeOutEvents.push({
    type: "TimeOut",
    date: date,
    hour: parseInt(hour),
  });
  return this;
}

function hoursWorkedOnDate(date) {
  const timeInEvent = this.timeInEvents.find(event => event.date === date);
  const timeOutEvent = this.timeOutEvents.find(event => event.date === date);
  return hoursWorkedBetween(timeInEvent.hour, timeOutEvent.hour);
}

function wagesEarnedOnDate(date) {
  const hoursWorked = hoursWorkedOnDate.call(this, date);
  return hoursWorked * this.payPerHour;
}

function allWagesFor() {
  const datesWorked = this.timeInEvents.map(event => event.date);
  return datesWorked.reduce((totalWages, date) => {
    return totalWages + wagesEarnedOnDate.call(this, date);
  }, 0);
}

// Replace calculatePayroll with your implementation
function calculatePayroll(employeeRecords) {
  return employeeRecords.reduce((totalPayroll, employee) => {
    return totalPayroll + allWagesFor.call(employee);
  }, 0);
}
function hoursWorkedOnDate(date) {
  const timeInEvent = this.timeInEvents.find(event => event.date === date);
  const timeOutEvent = this.timeOutEvents.find(event => event.date === date);

  const hoursWorked = (timeOutEvent.hour - timeInEvent.hour) / 100;
  return hoursWorked;
}

function wagesEarnedOnDate(date) {
  const hoursWorked = hoursWorkedOnDate.call(this, date);
  return hoursWorked * this.payPerHour;
}

function allWagesFor() {
  const datesWorked = this.timeInEvents.map(event => event.date);
  return datesWorked.reduce((totalWages, date) => {
    return totalWages + wagesEarnedOnDate.call(this, date);
  }, 0);
}
function findEmployeeByFirstName(collection, firstNameString) {
  return collection.find(employee => employee.firstName === firstNameString);
}


// Export the necessary functions if needed.
module.exports = {
  createEmployeeRecord,
  createEmployeeRecords,
  createTimeInEvent,
  createTimeOutEvent,
  hoursWorkedOnDate,
  wagesEarnedOnDate,
  allWagesFor,
  calculatePayroll,
};