const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/routes')
const app = express();

require('dotenv').config();
require('./db');
const PORT= 5000;

app.use(bodyParser.json());

app.get('/', (req, res)=>{
    res.json({
        message: "API working Successfully........."
    });
});

app.use('/', router)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
