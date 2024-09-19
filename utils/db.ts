import { createPool } from "mysql2/promise";
import { DB_DATABASE, DB_PASS, DB_USER } from "../configs/env.variables";

type DataOfDatabase = string | number | boolean;

const createConnection = async () => {
  const connection = createPool({
    user: DB_USER,
    password: DB_PASS,
    database: DB_DATABASE,
  });

  await connection.getConnection();

  return connection;
};

export const queryDatabase = async (
  sql: string,
  data: Array<DataOfDatabase> = []
) => {
  const connection = await createConnection();

  try {
    const results = await connection.execute(sql, data);

    return results;
  } catch (error) {
    console.error(error);
  }
};
