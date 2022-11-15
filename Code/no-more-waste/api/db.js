import mysql from "mysql"

export const db = mysql.createConnection({
    host: "db-mysql-nyc1-11769-do-user-12717269-0.b.db.ondigitalocean.com",
    user:"doadmin",
    passowrd:"AVNS_bZXYxAzcGMWfIdVLnWr",
    database:"defaultdb"
})