import { users, type User, type InsertUser, contactFormSubmissions, type ContactFormSubmission, type InsertContactForm } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactSubmission(submission: InsertContactForm): Promise<ContactFormSubmission>;
  getAllContactSubmissions(): Promise<ContactFormSubmission[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactSubmissions: Map<number, ContactFormSubmission>;
  private currentUserId: number;
  private currentContactSubmissionId: number;

  constructor() {
    this.users = new Map();
    this.contactSubmissions = new Map();
    this.currentUserId = 1;
    this.currentContactSubmissionId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactSubmission(submission: InsertContactForm): Promise<ContactFormSubmission> {
    const id = this.currentContactSubmissionId++;
    const createdAt = new Date();
    const contactSubmission: ContactFormSubmission = {
      ...submission,
      id,
      createdAt,
    };
    this.contactSubmissions.set(id, contactSubmission);
    return contactSubmission;
  }

  async getAllContactSubmissions(): Promise<ContactFormSubmission[]> {
    return Array.from(this.contactSubmissions.values());
  }
}

export const storage = new MemStorage();
