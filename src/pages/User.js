import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '../styles/userStyles'

import AuthWrapper from "../components/auth/AuthWrapper";
import PostSection from '../components/app/PostSection';
import UserDetails from '../components/app/UserDetails';

export default function User() {
    const { username } = useParams();

    return (
        <AuthWrapper authenticationRequired={true}>
            <Container>
                <PostSection targetUsername={username} />
                <UserDetails targetUsername={username} />
            </Container>
        </AuthWrapper>
    );
}