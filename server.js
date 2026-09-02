const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const users = [{username: 'teja', password: '1234'}];

app.post('/api/login', (req, res) => {
  console.log(`LOG: Login attempt by ${req.body.username}`);
  if(!req.body.username || !req.body.password){
    return res.status(400).json({msg: "Required"});
  }
  const found = users.find(u => u.username == req.body.username && u.password == req.body.password);
  if(found) res.json({msg: "Login Success - Welcome Teja!"});
  else res.json({msg: "Invalid Credentials"});
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Running on ${PORT}`));