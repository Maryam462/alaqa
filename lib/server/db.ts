import mysql, { type Pool, type RowDataPacket } from "mysql2/promise";

export const localPreviewWithoutDatabase = process.env.NODE_ENV === "development" && !process.env.MYSQL_DATABASE;

const globalForDb = globalThis as unknown as { mysqlPool?: Pool };

function createPool() {
  return mysql.createPool({
    host: process.env.MYSQL_HOST,
    port: Number(process.env.MYSQL_PORT || 3306),
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD || "",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    charset: "utf8mb4",
  });
}

export const db = globalForDb.mysqlPool ?? createPool();
if (process.env.NODE_ENV !== "production") globalForDb.mysqlPool = db;

export async function queryRows<T extends RowDataPacket[]>(sql: string, values: Array<string | number | boolean | Date | null> = []) {
  const [rows] = await db.execute<T>(sql, values);
  return rows;
}
