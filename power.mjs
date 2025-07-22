import { FetchWater } from "./FetchWater.mjs";

const fetcher = new FetchWater();

// Handle Events
fetcher.emitter.on("water", (msg) => {
  console.log("💧 Water Event:", msg);
});

fetcher.emitter.on("tapOff", (msg) => {
  console.log("🚰 Tap turned off:", msg);
});

fetcher.emitter.on("shutdown", (msg) => {
  console.log("🛑 Shutdown Event:", msg);
});

// Start Sequence
console.log("✅ Power Event: computer is on");
await fetcher.fetching();
