import { Router, type IRouter } from "express";
import { desc } from "drizzle-orm";
import { db, leadsTable } from "@workspace/db";
import {
  CreateLeadBody,
  CreateLeadResponse,
  ListLeadsResponse,
} from "@workspace/api-zod";
import { requireAdmin } from "../middlewares/require-admin";

const router: IRouter = Router();

router.post("/leads", async (req, res): Promise<void> => {
  const parsed = CreateLeadBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const [lead] = await db
    .insert(leadsTable)
    .values({ ...parsed.data, source: "contact" })
    .returning();

  const response = {
    ...lead,
    createdAt: lead.createdAt.toISOString(),
    respondedAt: lead.respondedAt?.toISOString() ?? null,
  };
  res.status(201).json(CreateLeadResponse.parse(response));
});

router.get("/leads", requireAdmin, async (_req, res): Promise<void> => {
  const leads = await db
    .select()
    .from(leadsTable)
    .orderBy(desc(leadsTable.createdAt));
  const response = leads.map((lead) => ({
    ...lead,
    createdAt: lead.createdAt.toISOString(),
    respondedAt: lead.respondedAt?.toISOString() ?? null,
  }));
  res.json(ListLeadsResponse.parse(response));
});

export default router;
