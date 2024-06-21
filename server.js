const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.post('/sum', (req, res) => {
    const numbers = req.body;
    if (!Array.isArray(numbers)) {
        return res.status(400).send({ error: 'Invalid input' });
    }
    const sum = numbers.reduce((acc, num) => acc + num, 0);

    setTimeout(() => {
        res.send({ sum: sum });
    }, 2000);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
