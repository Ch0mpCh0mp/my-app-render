import express from "express"
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const app = express();
const PORT = process.env.PORT||5050;

app.use(express.json());

// start rout
app.get("/", (req, res) => {
  res.send("Backend doon!");
});


//POST contacts
app.post("/contacts", async (req, res) => {
    try {
      const { name, telephone, address, category } = req.body;
  
      const contact = await prisma.contact.create({
        data: { name, telephone, address, category },
      });
  
      return res.status(201).json(contact);
  
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Server error" });
    }
  });

// GET /contacts
app.get("/contacts", async (req, res) => {
    try {
      const contacts = await prisma.contact.findMany();
      return res.status(200).json(contacts);
  
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Server error" });
    }
  });  

 // DELETE
 app.delete("/contacts/:id", async (req, res) => {
  const { id } = req.params;

  await prisma.contact.delete({
    where: { id: Number(id) },
  });

  res.status(200).json({ message: "Contact deleted" });
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});