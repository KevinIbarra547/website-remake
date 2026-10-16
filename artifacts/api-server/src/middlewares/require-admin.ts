import type { NextFunction, Request, Response } from "express";
import { clerkClient, getAuth } from "@clerk/express";

export async function requireAdmin(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  const { userId } = getAuth(req);
  if (!userId) {
    res.status(401).json({ error: "Sign in to view the inbox." });
    return;
  }

  const adminEmail = process.env.CONTACT_ADMIN_EMAIL?.trim().toLowerCase();
  if (!adminEmail) {
    req.log.error("CONTACT_ADMIN_EMAIL is not configured");
    res.status(503).json({ error: "The inbox is not configured." });
    return;
  }

  const user = await clerkClient.users.getUser(userId);
  const isAdmin = user.emailAddresses.some(
    (entry) =>
      entry.emailAddress.toLowerCase() === adminEmail &&
      entry.verification?.status === "verified",
  );
  if (!isAdmin) {
    res.status(403).json({ error: "Admin access is required." });
    return;
  }

  next();
}
