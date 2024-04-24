import { Pool } from 'pg';
import { DATABASE } from '../config/variables';

interface DatabaseConfig {
  user: string;
  host: string;
  database: string;
  password: string;
  port: number;
}

const pool = new Pool({
  user: DATABASE.USER,
  host: DATABASE.HOST,
  database: DATABASE.DATABASE,
  password: DATABASE.PASSWORD,
  port: DATABASE.PORT,
} as DatabaseConfig);

/**
 * Executes a query against the database.
 * @param queryString SQL query string that gets processed, should contain no user generated content
 * @param queryValues List of all dynamic parameters into the SQL Query
 * @param expectSingleRow If true, will return the first row of the result, otherwise will return all rows
 * @returns A Promise that resolves to the result of the Query to the Database
 */
export const queryHelper = (queryString: string, queryValues: any[] = [], expectSingleRow: boolean = false): Promise<any[] | any> => {
  return new Promise((resolve, reject) => {
    pool.query(queryString, queryValues, (error, result) => {
      if (error) {
        reject(new Error(`Error executing query: ${error.message}`));
      } else if (!result || !result.rows || result.rows.length === 0) {
        if (result.command === 'DELETE' || result.command === 'INSERT') {
          resolve({ count: result.rowCount });
        } else {
          resolve([]);
        }
      } else {
        if (expectSingleRow) {
          resolve(result.rows[0]);
        } else {
          resolve(result.rows);
        }
      }
    });
  });
};