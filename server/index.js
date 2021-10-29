const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 8000;

const app = express();
app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
    console.log("Server Started");
});
app.get('/', (req, res) => {
    res.send("GET");
});
app.post('/', (req, res) => {
    console.log(req.body);
    res.status(200).send("image recieved");
});