const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Travel History List");
});

router.get("/new", (req, res) => {
  res.send("New Travel Form");
});

router.post("/", (req, res) => {
  res.send("Create Travel ticket");
});

router
  .route("/:id")
  .get((req, res) => {
    res.send(`Get the Travel Info for id ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Update the Travel Info for id ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete the Travel Info for id ${req.params.id}`);
  });

module.exports = router;
