import 'reflect-metadata';
import { Connection, createConnection } from 'typeorm';

export const connection = async () => {
  const conn: any = {}

  if (process.env.TYPEORM_URL) {
    conn.url = process.env.TYPEORM_URL
  } else {
    conn.host = process.env.TYPEORM_HOST
    conn.port = process.env.TYPEORM_PORT
    conn.username = process.env.TYPEORM_USERNAME
    conn.password = process.env.TYPEORM_PASSWORD || null
    conn.database = process.env.TYPEORM_DATABASE
  }

  try {
    const dbConn: Connection = await createConnection({
      ...conn,
      type: 'postgres',
      extra: {
        ssl: process.env.SSL,
      },
      entities: [
        `${__dirname}/entity/*.ts`
      ],
      synchronize: true,
      logging: false
    });

    return await dbConn;
  } catch (err) {
    console.error(err);
  }
};
