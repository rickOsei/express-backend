const express = require("express");

const server = express();

const handleGetRequest = (req, res) => {
  const url = req.url;
  res.setHeader("content-type", "html/text");
  if (url === "/") {
    res.send("<h1>This is your home page request</h1>");
  } else if (url === "/profile") {
    res.send("<h1>This is your profile page request</h1>");
  } else if (url === "/form") {
    res.send("<h1>This is your form page request</h1>");
  } else if (url === "/contact") {
    res.send("<h1>This is your contact page request</h1>");
  }
};

const handlePostRequest = (req, res) => {
  const url = req.url;
  if (url === "/") {
    res.send("<h1>This is your home page request</h1>");
  } else if (url === "/profile") {
    res.send("<h1>This is your profile page request with a post method</h1>");
  } else if (url === "/form") {
    res.send("<h1>This is your form page request with a post method</h1>");
  }
};

const handleDeleteRequest = (req, res) => {
  const url = req.url;
  if (url === "/") {
    res.send("<h1>This is your home page request</h1>");
  } else if (url === "/profile") {
    res.send("<h1>This is your profile page request with a delete method</h1>");
  } else if (url === "/form") {
    res.send("<h1>This is your form page request with a delete method</h1>");
  }
};

const handlePatchRequest = (req, res) => {
  const url = req.url;
  if (url === "/") {
    res.send("<h1>This is your home page request</h1>");
  } else if (url === "/profile") {
    res.send("<h1>This is your profile page request with a patch method</h1>");
  } else if (url === "/form") {
    res.send("<h1>This is your form page request with a patch method</h1>");
  }
};

server.get("/", handleGetRequest);
server.get("/profile", handleGetRequest);
server.get("/contact", handleGetRequest);
server.get("/form", handleGetRequest);

server.post("/profile", handlePostRequest);
server.post("/form", handlePostRequest);

server.delete("/profile", handleDeleteRequest);
server.delete("/form", handleDeleteRequest);

server.post("/profile", handlePostRequest);
server.post("/form", handlePostRequest);

server.patch("/profile", handlePatchRequest);
server.patch("/form", handlePatchRequest);

server.listen(3000, "127.0.0.1", () => {
  console.log("Server is listening on port: 3000");
});
