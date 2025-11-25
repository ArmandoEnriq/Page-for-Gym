import React, { useEffect, useState } from 'react';
import useScrollDirection from '../hooks/useScrollDirection';

const WeaponDecoration = () => {
    const { scrollDirection, scrollY } = useScrollDirection();
    const [activeWeapons, setActiveWeapons] = useState([]);

    const weapons = [
        {
            id: 1,
            name: 'kettlebell ',
            scrollStart: 600,
            scrollEnd: 1400,
            side: 'left',
            image: '/src/assets/bola.png',
            rotation: -15
        },
        {
            id: 3,
            name: 'Mancuerna',
            scrollStart: 2000,
            scrollEnd: 2800,
            side: 'left',
            image: '/src/assets/mancuerna.png',
            rotation: -10
        },
        {
            id: 4,
            name: 'Pesas',
            scrollStart: 3400,
            scrollEnd: 5200,
            side: 'right',
            image: '/src/assets/pesa.png',
            rotation: 30
        },
        {
            id: 5,
            name: 'Disco',
            scrollStart: 7300,
            scrollEnd: 8500,
            side: 'left',
            image: '/src/assets/disco.png',
            rotation: -12
        }
    ];

    useEffect(() => {
        const active = weapons.filter(weapon =>
            scrollY >= weapon.scrollStart && scrollY <= weapon.scrollEnd
        ).map(w => w.id);
        setActiveWeapons(active);
    }, [scrollY]);

    const getWeaponStyle = (weapon) => {
        const isActive = activeWeapons.includes(weapon.id);
        const isAboveRange = scrollY < weapon.scrollStart;
        const isBelowRange = scrollY > weapon.scrollEnd;

        let translateX = 0;
        let opacity = 0;

        if (isActive) {
            // Weapon is in its active zone
            translateX = 0;
            opacity = 1;
        } else if (isAboveRange) {
            // Haven't scrolled to it yet
            translateX = weapon.side === 'left' ? -100 : 100;
            opacity = 0;
        } else if (isBelowRange) {
            // Scrolled past it
            translateX = weapon.side === 'left' ? -100 : 100;
            opacity = 0;
        }

        return {
            transform: `translateX(${translateX}%) rotate(${weapon.rotation}deg)`,
            opacity: opacity,
            transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.8s ease-out'
        };
    };

    const getPositionStyle = (weapon) => {
        // Calculate vertical position based on scroll range
        const range = weapon.scrollEnd - weapon.scrollStart;
        const middle = weapon.scrollStart + (range / 2);
        const topPercent = (middle / 10000) * 100; // Assuming max scroll around 6000px

        return {
            top: `${Math.min(Math.max(topPercent, 10), 90)}%`,
            [weapon.side]: '0',
            position: 'fixed',
            pointerEvents: 'none',
            zIndex: 1
        };
    };

    return (
        <>
            {weapons.map((weapon) => (
                <div
                    key={weapon.id}
                    style={{
                        ...getPositionStyle(weapon),
                        ...getWeaponStyle(weapon)
                    }}
                    className="hidden lg:block"
                >
                    <img
                        src={weapon.image}
                        alt={weapon.name}
                        className="w-24 h-auto opacity-80 drop-shadow-2xl"
                        style={{
                            filter: 'drop-shadow(0 0 20px rgba(220, 38, 38, 0.5))'
                        }}
                    />
                </div>
            ))}
        </>
    );
};

export default WeaponDecoration;
