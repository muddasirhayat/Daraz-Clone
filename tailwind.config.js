/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                daraz: {
                    orange: '#f57224',
                    bg: '#eff0f5',
                    text: '#212121',
                    subtext: '#757575',
                    lightOrange: '#fff1eb',
                }
            },
            container: {
                center: true,
                padding: '1rem',
                screens: {
                    sm: '640px',
                    md: '768px',
                    lg: '1024px',
                    xl: '1200px',
                    '2xl': '1200px',
                },
            },
        },
    },
    plugins: [],
}
