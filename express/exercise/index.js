const express = require("express");
const Joi = require("@hapi/joi");
const helmet = require("helmet");

const app = express();

app.use(express.json());
app.use(helmet());

let userId = 2;

const users = [
  {
    id: 1,
    name: "Choong Ho",
    email: "pchyo92@gmail.com",
    birthDay: "11-26-1992"
  }
];

function getUserById(id) {
  const userId = parseInt(id);
  return users.find(el => el.id === userId);
}

function validate(input) {
  const schema = Joi.object({
    name: Joi.string()
      .min(2)
      .alphanum()
      .required(),
    email: Joi.string()
      .email()
      .required(),
    birthDay: Joi.date().less("1-1-2001")
  });
  return schema.validate(input);
}

app.get("/", (req, res) => {
  res.send("Welcome Happy Hacking!");
});

app.get("/api/users", (req, res) => {
  res.send(users);
});

app.get("/api/users/:id", (req, res) => {
  const user = getUserById(req.params.id);
  if (!user) {
    res.status(404).send("해당하는 유저가 없습니다.");
  }
  res.send(user);
});

app.post("/api/users", (req, res) => {
  const { value, error } = validate(req.body);
  if (error) {
    res.send(error.details[0].message);
    return;
  }

  const user = {
    id: userId,
    name: value.name,
    email: value.email,
    birthDay: value.birthDay
  };
  userId++;
  users.push(user);
  res.send(user);
});

app.patch("/api/users/:id", (req, res) => {
  const { error } = validate(req.body);
  if (error) {
    res.send(error.details[0].message);
    return;
  }

  const user = getUserById(req.params.id);
  if (!user) {
    res.send("해당하는 데이터가 없습니다.");
  }
  const { name, email, birthDay } = req.body;

  user.name = name;
  user.email = email;
  user.birthDay = birthDay;
  res.send(user);
});

app.delete("/api/users/:id", (req, res) => {
  const user = getUserById(req.params.id);
  if (!user) {
    res.send("해당하는 데이터가 없습니다.");
  } else {
    const index = users.indexOf(user);
    users.splice(index, 1);
    res.send(user);
  }
});

app.listen(3000, () => console.log("Listening on port: 3000"));
