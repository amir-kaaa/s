const express = require('express');
const app = express();

const port = process.env.PORT || 8080

app.get('/', (req, res) => {
    res.send('here is response')
})
app.listen(port, () => console.log(`app is listening on port ${port}`));