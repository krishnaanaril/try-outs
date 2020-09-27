interface LeaveRequest {
    employee: string;
    leaveDays: number;
}

interface LeaveHandler {
    handlRequest(request: LeaveRequest): void;
    nextHandler: LeaveHandler | null;
}

type LeaveHandlerOrNull =  LeaveHandler | null;

class Supervisor implements LeaveHandler {
    nextHandler: LeaveHandlerOrNull;
    handlRequest(request: LeaveRequest): void {
        if(request.leaveDays < 10) 
            console.log(`Leave request:- Employee: ${request.employee}, Leave days: ${request.leaveDays} - approved by supervisor`);
        else 
            this.nextHandler?.handlRequest(request);
    }
    
    constructor(handler: LeaveHandlerOrNull) {
        this.nextHandler = handler;
    }
}

class ProjectManager implements LeaveHandler {
    handlRequest(request: LeaveRequest): void {
        if(request.leaveDays < 30) 
            console.log(`Leave request:- Employee: ${request.employee}, Leave days: ${request.leaveDays} - approved by ProjectManager`);
        else 
            this.nextHandler?.handlRequest(request);
    }
    nextHandler: LeaveHandlerOrNull;
    constructor(handler: LeaveHandlerOrNull) {
        this.nextHandler = handler;
    }
}

class HRDepartment implements LeaveHandler {
    handlRequest(request: LeaveRequest): void {        
        console.log(`Leave request:- Employee: ${request.employee}, Leave days: ${request.leaveDays} - approved by HR Department`);        
    }
    nextHandler: LeaveHandlerOrNull;
    constructor(handler: LeaveHandlerOrNull) {
        this.nextHandler = handler;
    }
}

(function(){
    const request: LeaveRequest = {
        employee: 'Krishna Mohan',
        leaveDays: 13
    };
    const hr: HRDepartment = new HRDepartment(null);
    const projectManager: ProjectManager = new ProjectManager(hr);
    const supervisor: Supervisor = new Supervisor(projectManager);

    supervisor.handlRequest(request);
})();