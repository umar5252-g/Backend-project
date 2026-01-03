require("dotenv").config();
const express = require("express");

const app = express();
const port = 4000;
const githubData = {
  login: "umar5252-g",
  id: 218800847,
  node_id: "U_kgDODQqizw",
  avatar_url: "https://avatars.githubusercontent.com/u/218800847?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/umar5252-g",
  html_url: "https://github.com/umar5252-g",
  followers_url: "https://api.github.com/users/umar5252-g/followers",
  following_url:
    "https://api.github.com/users/umar5252-g/following{/other_user}",
  gists_url: "https://api.github.com/users/umar5252-g/gists{/gist_id}",
  starred_url: "https://api.github.com/users/umar5252-g/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/umar5252-g/subscriptions",
  organizations_url: "https://api.github.com/users/umar5252-g/orgs",
  repos_url: "https://api.github.com/users/umar5252-g/repos",
  events_url: "https://api.github.com/users/umar5252-g/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/umar5252-g/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: "Umar Khan",
  company: null,
  blog: "",
  location: "Peshawar Pakistan ",
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 11,
  public_gists: 0,
  followers: 5,
  following: 3,
  created_at: "2025-07-01T15:10:45Z",
  updated_at: "2025-12-22T18:46:58Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/twitter", (req, res) => {
  res.send("UmarKhan-5252");
});
app.get("/insta", (req, res) => {
  res.send("UmarKhan");
});
app.get("/login", (req, res) => {
  res.send("<h1>Please enter your login information</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h1>chai aur backend</h1>");
});

app.get("/github", (req, res) => {
  res.json(githubData);
});
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
