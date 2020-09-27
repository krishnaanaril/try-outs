interface RegisterLog {
    logReport(logMessage: string, logID: number): void;
}

class MediaPlayerLog implements RegisterLog {
    logReport(logMessage: string, logID: number): void {
        console.log(`Media Player logger: Messge: ${logMessage} - ID: ${logID}`);
    }
}

class DocumentReaderLog implements RegisterLog {
    logReport(logMessage: string, logID: number): void {
        console.log(`Document Reader logger: Messge: ${logMessage} - ID: ${logID}`);
    }
}

class BrowserLog implements RegisterLog {
    logReport(logMessage: string, logID: number): void {
        console.log(`Browser logger: Messge: ${logMessage} - ID: ${logID}`);
    }
}

abstract class Log {
    registerLog: RegisterLog;
    logMessage: string;
    logID: number;
    logAppMessage(): void { }
    constructor(registerLog: RegisterLog,
        logMessage: string,
        logID: number) {
        this.registerLog = registerLog;
        this.logMessage = logMessage;
        this.logID = logID;
    }
}

class ApplicationLog extends Log {
    constructor(registerLog: RegisterLog,
        logMessage: string,
        logID: number) {
        super(registerLog, logMessage, logID);
    }
    logAppMessage(): void {
        this.registerLog.logReport(this.logMessage, this.logID);
    }
}

(function(){
    const client: Log = new ApplicationLog(new MediaPlayerLog(), "This is a log message", 111);
    client.logAppMessage();
    client.registerLog = new DocumentReaderLog();
    client.logAppMessage();
    client.registerLog = new BrowserLog();
    client.logAppMessage();
})();