const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 5000, specialization: 'Javascript' },
    { id: 2, name: 'Alice Smith', age: 38, department: 'HR', salary: 4500, specialization: 'Python' },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 6000, specialization: 'Java' },
];

const totalEmployees = employees.map((employee) => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');

function displayEmployees() {
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
}

function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    const hrEmployeesDisplay = hrEmployees.map((employee) => `<p>${employee.id} : ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

function findEmployeeById(employeeID) {
    const foundEmployee = employees.find(employee => employee.id === employeeID);
    if (foundEmployee) {
        document.getElementById('employeesDetails').innerHTML = `<p>${foundEmployee.id}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    } else {
        document.getElementById('employeesDetails').innerHTML = 'No employee has been found with this ID';
    }
}

function findSpecialization() {
    const hrEmployees = employees.filter(employee => employee.specialization === 'Javascript');
    const hrEmployeesDisplay = hrEmployees.map((employee) => `<p>${employee.id} : ${employee.name} - ${employee.department} - $${employee.salary} -${employee.specialization}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}
