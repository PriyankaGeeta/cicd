const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const server = app.listen(process.env.PORT || 5000, () => {
  const port = server.address().port;
  console.log(`Express is working on port ${port}`);
});
