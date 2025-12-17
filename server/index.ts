import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { sendContactEmail } from "./email";
import { z } from "zod";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;
const isProduction = process.env.NODE_ENV === "production";

app.use(cors());
app.use(express.json());

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  serviceType: z.string(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

app.post("/api/contact", async (req, res) => {
  try {
    const validatedData = contactFormSchema.parse(req.body);
    
    await sendContactEmail(validatedData);
    
    res.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ 
        success: false, 
        message: "Validation failed", 
        errors: error.errors 
      });
    }
    
    console.error("Email sending error:", error);
    res.status(500).json({ 
      success: false, 
      message: "Failed to send email. Please try again later." 
    });
  }
});

if (isProduction) {
  const distPath = path.join(__dirname, "..", "dist");
  app.use(express.static(distPath));
  
  app.get("*", (_req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
