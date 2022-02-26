// server/index.js
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./data.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message);

    console.log('connection successful')
});

db.run('CREATE TABLE users(first_name, last_name, email)')

db.close((err) => {
    if (err) return console.error(err.message);
});

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
