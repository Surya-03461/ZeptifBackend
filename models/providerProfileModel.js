const { boolean, timestamp, pgTable, uuid, decimal, varchar, text } = require("drizzle-orm/pg-core");
const { usersTable } = require("./userModel");

const providerProfileTable = pgTable("provider_profiles", {

    id: uuid().defaultRandom().primaryKey(),
    user_id: uuid()
        .notNull()
        .references(() => usersTable.id, { onDelete: "cascade" }),
    phone: varchar({ length: 15 }).notNull().unique(),
    business_name: varchar({ length: 100 }).notNull(),
    address: text().notNull(),
    latitude: decimal().notNull(),
    longitude: decimal().notNull(),
    is_available: boolean().default(true).notNull(),
    created_at: timestamp().defaultNow().notNull()
});

module.exports = { providerProfileTable };