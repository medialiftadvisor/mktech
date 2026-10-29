import express, { Request, Response } from "express";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = parseInt(process.env.PORT || "3000", 10);
const isProd = process.env.NODE_ENV === "production";

// Lightweight static dev/preview server
async function startServer() {
  const distPath = path.resolve(__dirname, "dist");
  const hasDist = fs.existsSync(distPath) && fs.existsSync(path.resolve(distPath, "index.html"));

  if (isProd && hasDist) {
    app.use(express.static(distPath));
    app.get("*", (_req: Request, res: Response) => {
      res.sendFile(path.resolve(distPath, "index.html"));
    });
  } else {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[MKTECH] Web server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
