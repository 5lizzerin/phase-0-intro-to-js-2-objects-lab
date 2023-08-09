// Write your solution in this file!
const employee = {
    name: "Lizz",
    streetAddress: "123 Example Street",
}


function updateEmployeeWithKeyAndValue(employee) {
    const newEmployee = {...employee};
    newEmployee.name = "Sam";
    newEmployee.streetAddress = "11 Broadway";
    return newEmployee;
}


function destructivelyUpdateEmployeeWithKeyAndValue(employee) {
    employee.name = "Sam";
    employee.streetAddress = "12 Broadway";
    return employee;
}


function deleteFromEmployeeByKey(employee) {
    const newEmployee = {...employee};
    delete newEmployee.name;
    delete newEmployee.streetAddress;
    return newEmployee;
}


function destructivelyDeleteFromEmployeeByKey(employee) {
    delete employee.name;
    delete employee.streetAddress;
    return employee;
}


