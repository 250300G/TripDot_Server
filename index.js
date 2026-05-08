const jsonServer = require("json-server");
const server = jsonServer.create();
const path = require("path");
const middlewares = jsonServer.defaults();

// Ici, on pointe directement sur db.json car il est à la racine sur ton GitHub
const router = jsonServer.router(path.join(__dirname, "db.json"));

const port = process.env.PORT || 3001;

server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`Backend live sur le port ${port}`);
});
