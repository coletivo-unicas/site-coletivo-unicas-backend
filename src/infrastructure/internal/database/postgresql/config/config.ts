import { Options } from "sequelize"

const options: Options = { dialect: 'postgres', logging: false, host: 'ec2-52-206-182-219.compute-1.amazonaws.com', port: 5432, timezone: '-03:00', define: { timestamps: true }, dialectOptions: { ssl: { rejectUnauthorized: false } } }
const optionsDev: Options = { dialect: 'postgres', logging: false, host: '127.0.0.1', port: 5433, timezone: '-03:00', define: { timestamps: true } }

const development = {
  database: 'coletivo_unicas',
  username: 'postgres',
  password: '123456',
  options: optionsDev
}

const production = {
  database: 'd814ot4j5b81r6',
  username: 'dgyckqcppoemqh',
  password: '3537c81e8949edac53e39ab3d3412570e3dfc7babd5fbbc19aa2c531fdcccdbb',
  options: options
}

export default production
