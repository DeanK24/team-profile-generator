const Employee = require('../lib/Employee');

test('creates employee object', () => {
    const employee = new Employee('Dean', 40, 'dean123@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})

test('gets name from employee', () => {
    const employee = new Employee('Dean', 40, 'dean123@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('gets employee id number', () => {
    const employee = new Employee('Dean', 40, 'dean123@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('gets employee email', () => {
    const employee = new Employee('Dean', 40, 'dean123@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('gets role of the employee', () => {
    const employee = new Employee('Dean', 40, 'dean123@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
});