import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../contexts/auth-context';
import { Outlet } from 'react-router';
import ReturnLoginPage from '../components/return-login';


function PrivateRouter() {
    const { isAuth, verifyAuthReloadPages } = useContext(AuthContext);

    useEffect(() => {
        verifyAuthReloadPages()
    }, [])

    return isAuth ? <Outlet /> : <ReturnLoginPage />
};

export default PrivateRouter;