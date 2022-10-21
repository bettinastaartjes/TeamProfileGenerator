const Manager = require ("../lib/Manager")
const employee = new Manager ('Bettina', '123456', 'bettina@gmai.com', '2384');

test('testing if we can get the constructor values for the employee object', () => {
    expect(employee.name).toBe('Bettina');
    expect(employee.id).toBe('123456');
    expect(employee.email).toBe('bettina@gmai.com')
    expect (employee.officeNumber).toBe('2384');
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

  test('test if we can get the office number from officeNumber method', () => {
    expect(employee.getOfficeNumber()).toBe('2384');
  });

  