import { integer, pgTable, varchar, text, json } from "drizzle-orm/pg-core";
import { usersTable } from "../auth/auth_schema.js"; // adjust path as needed

export const coursesTable = pgTable("courses", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  description: text().notNull(),
  difficulty: varchar({ length: 100 }).notNull(),
  category: varchar({ length: 100 }).notNull(),
  chapters: json().notNull(), // store chapter array as JSON
  user_id: integer().references(() => usersTable.id).notNull(), // Foreign key
});
