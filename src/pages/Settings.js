import React, { useState, useEffect } from 'react';
import AuthWrapper from "../components/auth/AuthWrapper";
import { useSelector } from 'react-redux';
import { SettingContainer, ButtonContainer } from '../styles/settingStyles';

export default function Settings() {
    const [occupation, setOccupation] = useState('');
    const [website, setWebsite] = useState('');
    const [bio, setBio] = useState('');

    const user = useSelector(state => state.user?.user);

    useEffect(() => {
        setOccupation(user?.occupation);
        setWebsite(user?.website);
        setBio(user?.bio);
    }, [user])

    return (
        <AuthWrapper authenticationRequired={true}>
            <SettingContainer>
                <div>
                    <h3>Occupation</h3>
                    <input
                        placeholder='Programmer, Idiot, Doctor, Lawyer etc ✨'
                        value={occupation}
                        onChange={(e) => setOccupation(e.target.value)}
                    />
                </div>
                <div>
                    <h3>Website URL</h3>
                    <input
                        type="url"
                        placeholder='https://therickroll.com/'
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                    />
                </div>
                <div>
                    <h3>Bio</h3>
                    <textarea
                        placeholder='Tell others, who the heck are you 🤖'
                        rows='5'
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                    />
                </div>
            </SettingContainer>
            <ButtonContainer>
                <button>Save</button>
                <button style={{ background: 'var(--error-color)', marginLeft: '10px', }}>Cancel</button>
            </ButtonContainer>
        </AuthWrapper>
    );
}