// controller.js
const mongoose = require('mongoose');
const config = require('../config');
const besked = require('../models/beskeder');
const config1 = require('../config');

mongoose.connect(config1.databaseURI, {useNewUrlParser: true, useUnifiedTopology: true});

exports.createBesked = function (navn, rum, tekst, nr) {
    return besked.create({
        navn,
        rum,
        tekst,
        nr
    })
};

exports.getBesked = function (nr) {
    return besked.findById(nr).exec();
};

exports.getBeskeder = function () {
    return besked.find().exec();
};

exports.getRum = function (rum) {
    return besked.find().where('rum').eq(rum).select('-_id -__v').exec();
}
// exports.createEmployee = function (title, name, wage) {
//     return Employee.create({
//         title,
//         name,
//         wage
//     });
// };

// exports.getEmployees = function () {
//     return Employee.find().populate('company').exec();
// };

// exports.getEmployee = function (employeeId) {
//     return Employee.findById(employeeId).exec();
// };

// exports.connectEmployeeToCompany = function (company, employee) {
//     company.employees.push(employee);
//     employee.company = company;
//     return Promise.all([company.save(), employee.save()]);
// };