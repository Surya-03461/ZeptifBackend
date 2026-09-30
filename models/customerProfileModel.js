const {usersTable} = require("./userModel") 
const { pgTable,uuid,timestamp,decimal,varchar,text} = require("drizzle-orm/pg-core")

const customerProfileTable = pgTable("customers",{
    id: uuid().defaultRandom().primaryKey(),
    user_id: uuid().references(()=>usersTable.id).notNull(),
    phone: varchar({length:12}).notNull().unique(),
    address: text().unique(),
    latitude: decimal().notNull(),
    longitude: decimal().notNull(), 
    created_at: timestamp().defaultNow().notNull()      
}) 

module.exports = { customerProfileTable };