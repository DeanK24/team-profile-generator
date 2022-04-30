const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

test('creates engineer', () => {
    const engineer = new Engineer('Dean', 40, 'dean123@gmail.com', 'DeanK24');

    expect(engineer.github).toEqual(expect.any(String));
});

test('gets github', () => {
    const engineer = new Engineer('Dean', 40, 'dean123@gmail.com', 'DeanK24');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('gets role of employee', () => {
    const engineer = new Engineer('Dean', 40, 'dean123@gmail.com', 'DeanK24');

    expect(engineer.getRole()).toEqual("Engineer")
});