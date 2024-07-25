const express = require("express");
const {
  saveContact,
  getContacts,
} = require("../controllers/contactController");
const router = express.Router();

router.post("/submit-contact", saveContact);
router.get("/get-contacts", getContacts);

module.exports = router;
