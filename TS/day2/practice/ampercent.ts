type newRole1 = 'manager' | 'sales' | 'intern'
type addRole = newRole1 | 'developer'
type anotherRole = 'design'
let myRole: newRole & addRole;
myRole=design;
