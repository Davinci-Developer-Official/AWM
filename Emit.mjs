// MyEvents.mjs
import { EventEmitter } from "events";

export class MyEvents extends EventEmitter {
    constructor() {
        super();
        this.result1 = false;
        this.result2 = false;
    }

    check({ powerStatus, waterStatus }) {
        if (powerStatus === "computer is on") this.emit("start", powerStatus);
        if (waterStatus === "water fetched") this.emit("water", waterStatus);
        if (waterStatus === "tap off") this.emit("tapOff", true);
    }
}
