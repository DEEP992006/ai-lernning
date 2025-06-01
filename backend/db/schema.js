import { unique } from "drizzle-orm/gel-core";
import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
});
export const newss = pgTable("new",{
  name: varchar().unique().notNull()
})
export const deep = pgTable("dmmeep",{
  name: varchar().unique().notNull()
})