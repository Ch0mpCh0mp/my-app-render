{/*Contacts */}
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export async function POST (req,res){
    const{name,telephone, address, category }=req.body;
    
    const contacts = await prisma.contact.findMany();
    return res.json(contacts).status(200)
} 

export async function GET (req,res){
    const contacts = await prisma.contact.findMany();
    return res.json(contacts).status(200)
} 