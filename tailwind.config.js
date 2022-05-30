module.exports = {
    content: ['./public/index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            animation: {
                grow: 'grow 1s ease-out',
            },
            backgroundImage: {
                'desktop-header': "url('../images/desktop/image-header.jpg')",
                'mobile-header': "url('../images/mobile/image-header.jpg')",
                'desktop-transform': "url('../images/desktop/image-transform.jpg')",
                'mobile-transform': "url('../images/mobile/image-transform.jpg')",
            },
            colors: {
                neutral: {
                    gray: 'hsl(0, 0%, 41%)',
                    'off-black': 'hsl(0, 0%, 8%)',
                    'off-white': 'hsl(0, 0%, 98%)',
                },
            },
            fontFamily: {
                sans: ['DM Sans', 'sans-serif'],
            },
            keyframes: {
                grow: {
                    '0%': { transform: 'scale(1,0)' },
                    '100%': { transform: 'scale(1)' },
                },
            },
        },
    },
    plugins: [],
};
