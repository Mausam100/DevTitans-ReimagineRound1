// MouseFollower.js
import React, { useEffect, useState } from 'react';

const MouseFollower = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const diameter = '20px';
    const thickness = '2px';
    const style = 'solid';
    const color = 'black';

    return (
        <div
            className='fixed pointer-events-none rounded-full -translate-x-1/2 -translate-y-1/2'
            style={{
                width: diameter,
                height: diameter,
                border: `${thickness} ${style} ${color}`,
                backgroundColor: `${color}`,
                left: `${position.x}px`,
                top: `${position.y}px`,
                zIndex: 1000,
            }}
        />
    );
};

export default MouseFollower;
