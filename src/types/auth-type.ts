import { UserAuthType } from "./user-type";

export interface AuthContextType {
    login: (user: UserAuthType) => void,
    verifyAuthReloadPages: () => void,
    logout: () => void,
    isAuth: boolean,
    user: UserAuthType | null
}