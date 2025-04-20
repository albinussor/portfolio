import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactFormSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api
  
  app.post('/api/contact', async (req: Request, res: Response) => {
    try {
      const validatedData = insertContactFormSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      
      return res.status(201).json({
        message: "Contact form submitted successfully",
        data: submission
      });
    } catch (error) {
      if (error instanceof Error) {
        const validationError = fromZodError(error);
        return res.status(400).json({ message: validationError.message });
      }
      return res.status(500).json({ message: "An error occurred while submitting the form" });
    }
  });

  app.get('/api/contact-submissions', async (req: Request, res: Response) => {
    try {
      const submissions = await storage.getAllContactSubmissions();
      return res.status(200).json(submissions);
    } catch (error) {
      return res.status(500).json({ message: "An error occurred while retrieving submissions" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
