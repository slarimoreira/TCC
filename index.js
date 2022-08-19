const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'))

app.get("/", (req, res) =>{
  res.render("index");
});

app.get("/chamada", (req, res) =>{
  res.render("chamada");
});

app.listen(8070, () =>{
  console.log("Servidor está rodando!");
});


// <div class="dropdown">
// <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
//   Dropdown
// </button>
// <ul class="dropdown-menu">
//   <li><button class="dropdown-item" type="button">Action</button></li>
//   <li><button class="dropdown-item" type="button">Another action</button></li>
//   <li><button class="dropdown-item" type="button">Something else here</button></li>
// </ul>
// </div>
// </div>