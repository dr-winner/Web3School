import React from 'react';
import './AvatarCircle.css';

const Avatar = ({ imageUrl, angle }) => {
    const radius = 100; // Half of the avatar circle width
    const centerX = 100;
    const centerY = 100;

    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);

    return (
        <div
            className="avatar"
            style={{
                position: 'absolute',
                left: `${x}px`,
                top: `${y}px`,
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: `url(${imageUrl}) center/cover no-repeat`,
                border: '2px solid white',
            }}
        />
    );
};

const AvatarCircle = () => {
    const avatars = [
        'url1', 'url2', 'url3', 'url4', 'url5',
        'url6', 'url7', 'url8', 'url9', 'url10'
    ];

    return (
        <div className="avatar-circle">
            {avatars.map((url, index) => (
                <Avatar
                    key={index}
                    imageUrl={url}
                    angle={(index / avatars.length) * 2 * Math.PI}
                />
            ))}
            <div className="center-image" style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'url(center-image-url) center/cover no-repeat',
                border: '2px solid white',
            }} />
        </div>
    );
};

export default AvatarCircle;