const express = require('express');
const router = express.Router();
const PORT = 3000;

const app = express()

app.set("json spaces", 4)

app.get("/", (req, res) => res.json({status: "TaskApi"}));

app.get("/tasks", (req, res) => {
    res.json({
        tasks: [
            {title: "Fazer compras"},
            {title: "Fazer compras"},
            {title: "Trocar entrada SSD"},
        ]
    })
})

app.listen(PORT, () => console.log("TaskApi - working on port ${PORT}"));
