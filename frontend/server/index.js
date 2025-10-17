import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(process.cwd(), "public"))); // para servir HTML, JS, CSS

// Endpoint para obtener los proyectos
app.get("/api/projects", (req, res) => {
  const filePath = path.join(process.cwd(), "data", "projects.json");
  try {
    const data = fs.readFileSync(filePath, "utf-8");
    const projects = JSON.parse(data);
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: "Failed to read projects" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
