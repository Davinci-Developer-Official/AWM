import { MyEvents } from "./Emit.mjs";

export class FetchWater {
  constructor() {
    this.tap = "on";
    this.bottle = "empty";
    this.time = 3000; // Simulated time to fill bottle
    this.emitter = new MyEvents();
  }

  async fetching() {
    if (this.bottle === "empty" && this.tap === "on") {
      console.log("fetching water to bottle...");
      await new Promise((res) => setTimeout(res, this.time));
      this.bottle = "full";
      console.log("filled status:", this.bottle);

      // Emit water fetched event
      this.emitter.emit("water", "bottle is full");

      // Simulate shutting tap off
      this.tap = "off";
      this.emitter.emit("tapOff", "tap is now off");

      // Wait a bit then emit shutdown
      await new Promise((res) => setTimeout(res, 1000));
      this.emitter.emit("shutdown", "computer is now off");
    }
  }
}
