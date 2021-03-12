const express = require('express');

const app = express();

const PORT = 50001;

app.get('/', (req, res) => {

});


app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
