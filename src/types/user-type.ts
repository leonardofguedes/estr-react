export interface UserType {
    nome?: string,
    user: string,
    email?: string,
    senha: string,
}

export interface UserAuthenticateType {
    user: string,
    senha: string,
}

export interface UserAuthType {
    nome: string,
    token: string
}