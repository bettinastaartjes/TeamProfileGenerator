const Employee = require('../lib/Employee.js');

test('creates a health enemy object', () => {
    const employee = new Employee('health');
  
    expect(employee.name).toBe('health');
    expect(employee.value).toEqual(expect.any(Number));
  });

  test('creates a random employee object', () => {
    const employee = new Employee();
  
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.name.length).toBeGreaterThan(0);
    expect(employee.value).toEqual(expect.any(Number));
  });
