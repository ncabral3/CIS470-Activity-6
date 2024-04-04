const express = require('express');
const app = express();

const { classifyTriangle } = require('./classifyTriangle');

const PORT = process.env.PORT || 3000;





app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.post('/check-triangle', (req, res) => {
    const { side1, side2, side3 } = req.body;
    const result = classifyTriangle(side1,side2,side3);
    res.json({ result });
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});