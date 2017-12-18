function employeeData(employees) {
    let pattern = /^([A-Z][A-Za-z]*) - ([1-9][0-9]*) - ([A-Za-z0=9 \-]+)$/g;
    for (employee of employees) {
        while (match = pattern.exec(employee)) {
            console.log(`Name: ${match[1]}`);
            console.log(`Position: ${match[3]}`);
            console.log(`Salary: ${match[2]}`);
        }
        // let d = employee.match(pattern);
        // if (d != null) {
        //     let [name, salary, position] = d[0].split(' - ');
        //     console.log(`Name: ${name}`);
        //     console.log(`Position: ${position}`);
        //     console.log(`Salary: ${salary}`);
        // }
    }
}
employeeData(['Isacc - 1000 - CEO',
    'Ivan - 500 - Employee',
    'Peter - 500 - Employee'
]);
employeeData(['Jonathan - 2000 - Manager',
    'Peter- 1000- Chuck',
    'George - 1000 - Team Leader '
]);