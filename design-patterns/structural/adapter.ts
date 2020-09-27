class ThridPartyEmployee {
    getEmployeeList(): string[] {
        const employees: string[] = [];
        employees.push('Krishna');
        employees.push('Mohan');
        return employees;
    }
}

interface Target {
    getEmployees(): string[];
}

class EmployeeAdapter extends ThridPartyEmployee implements Target {
    getEmployees(): string[] {
        return this.getEmployeeList();
    }
}

(function(){
    const client: Target = new EmployeeAdapter();
    const employees = client.getEmployees();
    for(var name of employees) {
        console.log(name);
    }
})();