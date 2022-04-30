const Manager = require('../lib/Manager')
// const Employee = require('../lib/Employee')

test('creates manager', () => {
    const manager = new Manager('dean', 1234, 'deank@gmail.com', 5678)

    expect(manager.officeNumber).toEqual(expect.any(Number))
})

test('gets role of employee', () => {
    const manager = new Manager('Dean', 40, 'dean123@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
});