const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

test('creates intern', () => {
    const intern = new Intern('Dean', 40, 'dean123@gmail.com', 'FSU');

    expect(intern.school).toEqual(expect.any(String));
});

test('gets school', () => {
    const intern = new Intern('Dean', 40, 'dean123@gmail.com', 'FSU');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('gets role of employee', () => {
    const intern = new Intern('Dean', 40, 'dean123@gmail.com', 'FSU');

    expect(intern.getRole()).toEqual("Intern")
});