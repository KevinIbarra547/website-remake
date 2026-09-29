import { createInsertSchema } from "drizzle-zod";
import { check, pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";
import { z } from "zod/v4";

export const leadsTable = pgTable(
  "leads",
  {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    email: text("email").notNull(),
    message: text("message").notNull(),
    source: text("source").notNull().default("direct"),
    status: varchar("status", { length: 16 }).notNull().default("new"),
    responseNote: text("response_note"),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
    respondedAt: timestamp("responded_at", { withTimezone: true }),
  },
  (table) => [
    check("leads_status_check", sql`${table.status} in ('new', 'responded')`),
  ],
);

export const insertLeadSchema = createInsertSchema(leadsTable).omit({
  id: true,
  status: true,
  responseNote: true,
  createdAt: true,
  respondedAt: true,
});

export type InsertLead = z.infer<typeof insertLeadSchema>;
export type Lead = typeof leadsTable.$inferSelect;