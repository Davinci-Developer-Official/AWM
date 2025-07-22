# 💧 Algorithmic Water Management (AWM)

This is a simple Node.js-based algorithm that simulates an event-driven system for managing water fetching using a computer's power state. It showcases asynchronous operations, class interactions, and event sequencing using ES Modules (`.mjs`).

---

## 🔁 Overview

The system is composed of two main files:

- `power.mjs` – Controls the computer's power state and triggers the fetching process.
- `FetchWater.mjs` – Handles fetching water from a tap to a bottle, and reacts to events.

The algorithm uses:

- **EventEmitter** for triggering events like power status and fetching completion.
- **Async/Await** for simulating real-world delays in actions.
- **Class-based structure** to represent objects like computer and water source.

---

## 🔧 Project Structure

