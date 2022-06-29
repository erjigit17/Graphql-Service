# Graphql-Service
https://github.com/dooboolab/ts-apollo-sequelize/tree/master/src/resolvers 

simple graphql query 

password mongo docker

.env -s

postman collections

### docker 
docker-compose up

### graphql
register
```graphql
mutation Mutation($body: UserBody) {
  register(body: $body) {
    firstName
    lastName
    password
    email
    _id
  }
}
```
variables
```json
{
  "body": {
    "firstName": "wrt",
    "lastName": "null",
    "email": "erjigit17@gmail.com",
    "password": "1234765890df"
  }
}
```
getUserById
```graphql
query Query($_id: ID!) {
    user(_id: $_id) {
        firstName
    }
}
```
variables
```json
{
  "_id": "62bc35536839518391addc5e"
}
```
login
```graphql
mutation Mutation($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    jwt
  }
}
```
variables
```json
{
  "email": "erjigit17@gmail.com",
  "password": "1234765890df"
}
```
