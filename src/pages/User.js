import React from 'react';
import AuthWrapper from "../components/auth/AuthWrapper";

export default function User() {
    return (
        <AuthWrapper authenticationRequired={true}>

        </AuthWrapper>
    );
}