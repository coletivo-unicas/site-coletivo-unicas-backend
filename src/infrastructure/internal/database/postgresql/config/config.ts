import { Options } from "sequelize"

const optionsDev: Options = { dialect: 'postgres', logging: false, host: '127.0.0.1', port: 5433, timezone: '-03:00', define: { timestamps: true } }

const development = {
  database: 'coletivo_unicas',
  username: 'postgres',
  password: '123456',
  options: optionsDev
}

export default development
