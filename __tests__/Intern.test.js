const Intern = require ("../lib/Intern")
const employee = new Intern ('Bettina', '123456', 'bettina@gmai.com', 'Columbia');

test ('testing if we can get the constructor values for the employee obejct', () => {
    expect(employee.name).toBe('Bettina');
    expect(employee.id).toBe('123456');
    expect(employee.email).toBe('bettina@gmai.com');
    expect(employee.school).toBe('Columbia');
});

test ('test if we can get the name from the getName() method', () => {
    expect(employee.getName()).toBe('Bettina');
  });
  
  test ('test if we can get the ID from mthe getId() method', () => {
    expect(employee.getId()).toBe('123456');
  });
  
  test('test if we can get the email from the getEmail() method', () => {
    expect(employee.getEmail()).toBe('bettina@gmai.com');
  });

  test('test if we can get the school from the getSchool() method', () => {
    expect(employee.getSchool()).toBe('Columbia');
  });