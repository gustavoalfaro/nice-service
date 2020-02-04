// require('dotenv').config()
import dotenv from 'dotenv'

dotenv.config()


const database = {
  user: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  host: process.env.DATABASE_HOST,
  options: {
    port: process.env.DATABASE_PORT,
    dialect: 'postgres',
    define: {
      timestamps: false,
      freezeTableName: true,
    },
    logging: (operation, options) => console.log({ operation, options }),
    // logger: { debug: console.log, error: console.log }
  }
}

const port = process.env.PORT


export { database, port }
