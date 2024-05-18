const usuario = require("./router-usuario");

const request = require("supertest");
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use("/", usuario);

it("should save the user", done => {
  const payload = {nome: 'john', email: 'xyz@sadfjak.com', password: '2342388' };
  request(app)
    .post("/")
    .send(payload)    
    .expect({ nome: 'john', email: 'xyz@sadfjak.com', password: '2342388' })
    .expect(201, done);
});

it("should return an error when user nome is empty", done => {
  const payload = {nome: '', email: '', password: '' };
  request(app)
    .post("/")
    .send(payload)
    .expect({ erro: 'Nome é obrigatório' })
    .expect(400, done);
});



it("should list the users", done => {
  request(app)
    .get("/")
    .expect("Content-Type", /json/)
    .expect([{ nome: 'john', email: 'xyz@sadfjak.com', password: '2342388' }])
    .expect(200, done);
});

it("should delete the user", done => {
  const payload = {nome: 'john', email: '', password: '' };
  request(app)
    .delete("/")
    .send(payload)
    .expect({ nome: 'john', email: '', password: '' })
    .expect(200, done);
});