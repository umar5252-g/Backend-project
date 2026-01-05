import express from "express";

const app = express();

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "a 5th joke",
      content: "this is a first joke",
    },
    {
      id: "2",
      title: "a 2nd joke",
      content: "this is a second joke",
    },
    {
      id: 3,
      title: "a th3 joke",
      content: "this is a third joke",
    },
    {
      id: 4,
      title: "a 4th joke",
      content: "this is a third joke",
    },
    {
      id: 5,
      title: "a 5th joke",
      content: "this is a third joke",
    },
    {
      id: 6,
      title: "a 6th joke",
      content: "this is a sixth joke",
    },
  ];
  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`serve at http:/localhost:${port} `);
});
