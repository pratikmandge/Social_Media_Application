import React, { useState } from 'react';

const EditProfileForm = () => {
    const [username, setUsername] = useState('');
    const [bio, setBio] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log('Updated profile:', { username, bio });
        
        setUsername('');
        setBio('');
    };

    return (
        <div>
            <h2>Edit Profile</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label>Bio:</label>
                    <textarea
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                    />
                </div>
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default EditProfileForm;
