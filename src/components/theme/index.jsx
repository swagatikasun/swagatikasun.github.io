import React, { useEffect } from 'react';
import './index.css';

const Component = () => {
    // Change Chrome Meta Theme
    const changeMetaTheme = (mode) => {
        if (mode === 0) document.querySelector('meta[name="theme-color"]').content = '#fff';
        else if (mode === 1) document.querySelector('meta[name="theme-color"]').content = '#111';
    };

    const toDark = (style, theme) => {
        // Change to Dark Mode
        style.setAttribute('href', theme);
        changeMetaTheme(1);
        document.cookie = `theme=1;samesite=strict;expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    };

    const toLight = (style, theme) => {
        // Change to Light Mode
        style.setAttribute('href', theme);
        changeMetaTheme(0);
        document.cookie = `theme=0;samesite=strict;expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    };

    // Change Theme
    const changeTheme = (auto = null) => {
        const style = document.querySelector('link[rel="newest stylesheet"]');

        // get current theme
        const current = `${style.getAttribute('href')}`;

        // resolve light theme path
        const light = `${process.env.PUBLIC_URL}/css/LightTheme.css`;

        // resolve dark theme path
        const dark = `${process.env.PUBLIC_URL}/css/DarkTheme.css`;

        if (auto === null) {
            if (current === light) {
                toDark(style, dark);
            } else if (current === dark) {
                toLight(style, light);
            }
        } else if (auto === 0) {
            toLight(style, light);
        } else if (auto === 1) {
            toDark(style, dark);
        }
    };

    // SET Theme based on cookie value
    // useEffect(() => {
    //     const theme =
    //         document.cookie.length > 0
    //             ? document.cookie
    //                   .split('; ')
    //                   .find((row) => row.startsWith('theme='))
    //                   .split('=')[1]
    //             : undefined;
    //     if (theme && theme === '1') changeTheme();
    // });

    // Auto theming based on timexone. Day = Light and Night = Dark
    const dynamicMode = () => {
        const hour = new Date().getHours();

        if (hour > 5 && hour < 18) {
            // Change to Dark Mode
            changeTheme(0);
            changeMetaTheme(0);
        } else {
            // Change to Light Mode
            changeTheme(1);
            changeMetaTheme(1);
        }
    };

    // Execute auto-theming once page is loaded
    useEffect(() => {
        dynamicMode();
    });

    return (
        <span>
            <p
                onClick={() => changeTheme()}
                onKeyDown={(ev) => {
                    // if d is pressed, change theme
                    if (ev.key === 'd') {
                        changeTheme();
                    }
                }}
                className="mode"
            >
                <i className="fas fa-adjust mode-dial" />
            </p>
        </span>
    );
};

export default Component;
