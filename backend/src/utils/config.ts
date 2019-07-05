import { config } from 'dotenv'

let path
switch (process.env.NODE_ENV) {
  case 'test':
    path = `${__dirname}/../../.env`
    break
  default:
    path = `${__dirname}/../../.env`
}

config({ path: path });

export const GITHUB_ACCESS_TOKEN: string | undefined = process.env.GITHUB_ACCESS_TOKEN
export const GITHUB_GRAPH_BASE_URL: string | undefined = process.env.GITHUB_GRAPH_BASE_URL