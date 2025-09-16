import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function getAllSkills(req, res) {
  try {
    const skills = await prisma.skill.findMany();
    res.json(skills);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch skills" });
  }
}
