import { sql } from "drizzle-orm";
import { integer, sqliteTable, text, uniqueIndex } from "drizzle-orm/sqlite-core";

const timestamps = {
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text("updated_at").notNull().default(sql`CURRENT_TIMESTAMP`),
};

export const leads = sqliteTable("leads", {
  id: text("id").primaryKey(), ownerId: text("owner_id").notNull(), company: text("company").notNull(),
  contact: text("contact").notNull().default(""), phone: text("phone").notNull().default(""),
  email: text("email").notNull().default(""), website: text("website").notNull().default(""),
  niche: text("niche").notNull().default("Outros"), city: text("city").notNull().default(""),
  stage: text("stage").notNull().default("Novo lead"), priority: text("priority").notNull().default("Média"),
  score: integer("score").notNull().default(50), potentialCents: integer("potential_cents").notNull().default(0),
  pagespeed: integer("pagespeed"), ranking: integer("ranking"), source: text("source").notNull().default("Cadastro manual"),
  notes: text("notes").notNull().default(""), doNotContact: integer("do_not_contact", { mode: "boolean" }).notNull().default(false),
  isDemo: integer("is_demo", { mode: "boolean" }).notNull().default(false), lastContactAt: text("last_contact_at"), ...timestamps,
}, (table) => [uniqueIndex("leads_owner_company_city_unique").on(table.ownerId, table.company, table.city)]);

export const meetings = sqliteTable("meetings", {
  id: text("id").primaryKey(), ownerId: text("owner_id").notNull(), leadId: text("lead_id"),
  title: text("title").notNull(), startsAt: text("starts_at").notNull(), status: text("status").notNull().default("Agendada"),
  notes: text("notes").notNull().default(""), isDemo: integer("is_demo", { mode: "boolean" }).notNull().default(false), ...timestamps,
});

export const proposals = sqliteTable("proposals", {
  id: text("id").primaryKey(), ownerId: text("owner_id").notNull(), leadId: text("lead_id"), title: text("title").notNull(),
  service: text("service").notNull(), amountCents: integer("amount_cents").notNull(), status: text("status").notNull().default("Rascunho"),
  validUntil: text("valid_until"), isDemo: integer("is_demo", { mode: "boolean" }).notNull().default(false), ...timestamps,
});

export const transactions = sqliteTable("transactions", {
  id: text("id").primaryKey(), ownerId: text("owner_id").notNull(), leadId: text("lead_id"), description: text("description").notNull(),
  amountCents: integer("amount_cents").notNull(), kind: text("kind").notNull().default("Receita"), status: text("status").notNull().default("Pendente"),
  dueDate: text("due_date"), isDemo: integer("is_demo", { mode: "boolean" }).notNull().default(false), ...timestamps,
});

export const tasks = sqliteTable("tasks", {
  id: text("id").primaryKey(), ownerId: text("owner_id").notNull(), leadId: text("lead_id"), title: text("title").notNull(), dueAt: text("due_at"),
  priority: text("priority").notNull().default("Média"), status: text("status").notNull().default("Pendente"),
  isDemo: integer("is_demo", { mode: "boolean" }).notNull().default(false), ...timestamps,
});

export const activities = sqliteTable("activities", {
  id: text("id").primaryKey(), ownerId: text("owner_id").notNull(), leadId: text("lead_id"), type: text("type").notNull(),
  description: text("description").notNull(), metadata: text("metadata").notNull().default("{}"),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
});
