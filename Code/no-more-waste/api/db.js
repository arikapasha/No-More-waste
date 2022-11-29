import mysql from "mysql2"

export const db = mysql.createConnection({
    host: "db-mysql-nyc1-11769-do-user-12717269-0.b.db.ondigitalocean.com",
    user:"doadmin",
    password:"AVNS_bZXYxAzcGMWfIdVLnWr",
    database:"defaultdb",
    port: 25060,
})

