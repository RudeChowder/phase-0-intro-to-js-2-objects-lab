const employee = {
    name: "Sam",
    streetAddress: "123 Main Street"
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    return Object.assign({}, employee, {[key]: value})
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey(empolyee, key){
    const newObj = Object.assign({...employee})
    delete newObj[key]
    return newObj
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}