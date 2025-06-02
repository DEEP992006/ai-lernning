// flashcard_schema.js
import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const flashcards = pgTable('flashcards', {
  id: serial('id').primaryKey(),
  question: text('question').notNull(),
  answer: text('answer').notNull(),
});
