const { pgTable,uuid,varchar,text,timestamp} = require("drizzle-orm/pg-core")

const usersTable = pgTable("users",{
    id: uuid().defaultRandom().primaryKey(),
    name: varchar({length:100}).notNull(),
    email: varchar({length:100}).notNull().unique(),
    password: varchar({length:255}).notNull(),
    role: text().notNull(),
    created_at: timestamp().defaultNow().notNull()      
}) 

module.exports = { usersTable };