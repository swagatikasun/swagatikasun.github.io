import React from 'react';
import './index.css';

const Component = () => {
    // Change Chrome Meta Theme
    const changeMetaTheme = (mode) => {
        if (mode === 0) document.querySelector('meta[name="theme-color"]').content = '#fff';
        else if (mode === 1) document.querySelector('meta[name="theme-color"]').content = '#111';
    };

    // Change Theme
    const changeTheme = () => {
        const style = document.querySelector('link[rel="newest stylesheet"]');

        // get current theme
        const current = `${style.getAttribute('href')}`;

        // resolve light theme path
        const light = `${process.env.PUBLIC_URL}/css/LightTheme.css`;

        // resolve dark theme path
        const dark = `${process.env.PUBLIC_URL}/css/DarkTheme.css`;

        if (current === light) {
            // Change to Dark Mode
            style.setAttribute('href', dark);
            changeMetaTheme(1);
            document.cookie = `theme=1;samesite=strict;expires=Fri, 31 Dec 9999 23:59:59 GMT`;
        } else if (current === dark) {
            // Change to Light Mode
            style.setAttribute('href', light);
            changeMetaTheme(0);
            document.cookie = `theme=0;samesite=strict;expires=Fri, 31 Dec 9999 23:59:59 GMT`;
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
