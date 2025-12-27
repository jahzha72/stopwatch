# Web Stopwatch

A simple, functional web-based stopwatch application featuring a clean UI with a relaxing animated background. This project uses **Node.js** and **Express** to serve the front-end files.

---

## 🚀 Features

* **Real-time Tracking**: Accurate time display down to milliseconds ().
* **Lap Functionality**: Record specific timestamps during a session without stopping the timer.
* **Persistent Display**: Features Start, Stop, Reset, and Lap controls.
* **Responsive Design**: A centered, semi-transparent glassmorphism container that works across screen sizes.
* **Custom Aesthetics**: Styled with a "Times New Roman" font and a peaceful animated cat GIF background (`aaa.gif`).

---

## 🛠️ Technology Stack

* **Backend**: Node.js with Express.
* **Frontend**: HTML5, CSS3, and Vanilla JavaScript.

---

## 📁 File Structure

* `server.js`: The entry point for the Node.js server.
* `index.html`: The main structure of the application.
* `style.css`: Contains the styling, animations, and layout.
* `script.js`: Logic for the timer, lap recording, and DOM updates.
* `aaa.gif`: The background animation asset.

---

## ⚙️ Installation & Setup

1. **Ensure Node.js is installed** on your machine.
2. **Initialize the project** (if not already done):
```bash
npm init -y
npm install express

```


3. **Place the files**: Ensure `index.html`, `style.css`, `script.js`, and `aaa.gif` are located in a folder named `/public` relative to `server.js`.
4. **Run the server**:
```bash
node server.js

```


5. **Access the app**: Open your browser and navigate to `http://localhost:3000`.

---

## 🖱️ How to Use

* **Start**: Begins the timer.
* **Stop**: Pauses the current time.
* **Lap**: Logs the current time to a list below the display without stopping the clock.
* **Reset**: Stops the timer and clears all recorded laps and time data.
