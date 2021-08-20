import React, { useEffect } from 'react';
import AuthWrapper from "../components/auth/AuthWrapper";
import { getUserData } from '../firebase/helpers/userHelper';
import { useSelector } from 'react-redux';

export default function Settings() {
    const user = useSelector(state => state.user?.user);

    return (
        <AuthWrapper authenticationRequired={true}>

        </AuthWrapper>
    );
}