export function getAuth(user) {
    if (user.user === process.env.REACT_APP_USER && user.senha === process.env.REACT_APP_SENHA) {
        return {
            status: 200,
            data: {
                nome: process.env.REACT_APP_NOME,
                token: process.env.REACT_APP_TOKEN
            }
        }
    }
    return { status: 400, data: undefined }
}

export function getVerifyToke(token) {
    if (token === process.env.REACT_APP_TOKEN) {
        return { status: 200 }
    }
    return { status: 401 }
}

