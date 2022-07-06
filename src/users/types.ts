export type TypeUserBody = {
    firstName: string,
    lastName: string,
    password: string,
    email: string
}

export type TypeUser = TypeUserBody & {
    _id: string
}

export interface iUserDataSource {
    userAPI: {
        getUser(_id: string): TypeUser,
        login(email: string, password: string): { jwt: string },
        register(body: TypeUserBody): TypeUser
    }
}