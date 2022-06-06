import { Options } from "sequelize"

const options: Options = { dialect: 'postgres', logging: false, host: 'ec2-54-211-255-161.compute-1.amazonaws.com', port: 5432, timezone: '-03:00', define: { timestamps: true }, dialectOptions: { ssl: { rejectUnauthorized: false } } }
const optionsDev: Options = { dialect: 'postgres', logging: false, host: '127.0.0.1', port: 5433, timezone: '-03:00', define: { timestamps: true } }

const development = {
  database: 'coletivo_unicas',
  username: 'postgres',
  password: '123456',
  options: optionsDev
}

const production = {
  database: 'd8q2m40ggj9dur',
  username: 'qzxrnpltggymhn',
  password: '5985c08b495eb56b20c13ab9ce12ea2bcfcbb70cbcd84eb47621760481b20f13',
  options: options
}

export default production
