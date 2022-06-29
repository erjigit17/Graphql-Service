import 'dotenv/config'


export const graphqlPort: number = Number(process.env.GRAPHQL_PORT) || 4000
export const usersServiceUrl: string = process.env.USERS_SERVICE_URL || ''

