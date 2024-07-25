const Contact = require("../models/Contact");

const saveContact = async (req, res) => {
  const newContact = new Contact(req.body);
  try {
    await newContact.save();
    res.json({ message: "Message sent successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to send message" });
  }
};

const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find({});
    res.json({ success: true, contacts });
  } catch (error) {
    res.status(500).json({ success: false, error: "Failed to fetch messages" });
  }
};

module.exports = { saveContact, getContacts };
