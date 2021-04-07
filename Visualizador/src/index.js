const { Console } = require('console');
const express = require('express');
const app = express();

//middleware//


app.listen(3000, () => {
    console.log('Server on port 3000.')

})