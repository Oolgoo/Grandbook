module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    mode: "jit",
    theme: {
        extend: {
            fontSize: {
                h1: ["4rem", "4.8rem"],
                "h1-md": ["8.333vw", "10vw"],
                "h1-lg": ["7.5rem", "9rem"],
                "h1-2xl": ["8.333vw", "10vw"],

                h2: ["3rem", "3.6rem"],
                "h2-md": ["6.250vw", "7.500vw"],
                "h2-lg": ["5.25rem", "6.3rem"],
                "h2-2xl": ["5.833vw", "7vw"],

                h3: ["2rem", "2.4rem"],
                "h3-md": ["4.167vw", "5vw"],
                "h3-lg": ["4rem", "4.8rem"],
                "h3-2xl": ["4.444vw", "5.333vw"],

                h4: ["1.5rem", "1.8rem"],
                "h4-md": ["3.125vw", "3.750vw"],
                "h4-lg": ["2rem", "2.4rem"],
                "h4-2xl": ["2.222vw", "2.667vw"],

                h5: ["1.125rem", "1.35rem"],
                "h5-md": ["2.344vw", "2.813vw"],
                "h5-lg": ["1.5rem", "2rem"],
                "h5-2xl": ["1.667vw", "2.222vw"],
                "body-text": [
                    "0.75rem",
                    {
                        lineHeight: "1.05rem",
                        letterSpacing: "0.02em",
                        fontWeight: "400",
                    },
                ],
                "body-text-md": [
                    "1.563vw",
                    {
                        lineHeight: "2.188vw",
                        letterSpacing: "0.02em",
                        fontWeight: "400",
                    },
                ],
                "body-text-lg": [
                    "0.875rem",
                    {
                        lineHeight: "1.225rem",
                        letterSpacing: "0.02em",
                        fontWeight: "400",
                    },
                ],
                "body-text-2xl": [
                    "0.833vw",
                    {
                        lineHeight: "1.361vw",
                        letterSpacing: "0.02em",
                        fontWeight: "400",
                    },
                ],

                "body-large": [
                    "0.875rem",
                    {
                        lineHeight: "1.225rem",
                        letterSpacing: "0.02em",
                        fontWeight: "400",
                    },
                ],
                "body-large-md": [
                    "1.823vw",
                    {
                        lineHeight: "2.552vw",
                        letterSpacing: "0.02em",
                        fontWeight: "400",
                    },
                ],
                "body-large-lg": [
                    "1rem",
                    {
                        lineHeight: "1.4rem",
                        letterSpacing: "0.02em",
                        fontWeight: "400",
                    },
                ],
                "body-large-2xl": [
                    "0.972vw",
                    {
                        lineHeight: "1.361vw",
                        letterSpacing: "0.02em",
                        fontWeight: "400",
                    },
                ],
                "body-large-16-2xl": [
                    "1.111vw",
                    {
                        lineHeight: "1.556vw",
                        letterSpacing: "0.02em",
                        fontWeight: "400",
                    },
                ],

                "body-small": [
                    "0.75rem",
                    {
                        lineHeight: "1.05rem",
                        letterSpacing: "0.02em",
                        fontWeight: "400",
                    },
                ],
                "body-small-md": [
                    "1.563vw",
                    {
                        lineHeight: "2.188vw",
                        letterSpacing: "0.02em",
                        fontWeight: "400",
                    },
                ],
                "body-small-lg": [
                    "0.875rem",
                    {
                        lineHeight: "1.225rem",
                        letterSpacing: "0.02em",
                        fontWeight: "400",
                    },
                ],
                "body-small-2xl": [
                    "0.833vw",
                    {
                        lineHeight: "1.361vw",
                        letterSpacing: "0.02em",
                        fontWeight: "400",
                    },
                ],

                caption: [
                    "0.75rem",
                    {
                        lineHeight: "1.05rem",
                        letterSpacing: "0.02em",
                        fontWeight: "400",
                    },
                ],
                "caption-md": [
                    "1.563vw",
                    {
                        lineHeight: "2.214vw",
                        letterSpacing: "0.02em",
                        fontWeight: "400",
                    },
                ],
                "caption-lg": [
                    "0.75rem",
                    {
                        lineHeight: "1.05rem",
                        letterSpacing: "0.02em",
                        fontWeight: "400",
                    },
                ],
                "caption-2xl": [
                    "0.833vw",
                    {
                        lineHeight: "1.167vw",
                        letterSpacing: "0.02em",
                        fontWeight: "400",
                    },
                ],

                "utility-large": [
                    "0.875rem",
                    {
                        lineHeight: "0.963rem",
                        letterSpacing: "0.08em",
                        fontWeight: "400",
                    },
                ],
                "utility-large-2xl": [
                    "0.972vw",
                    {
                        lineHeight: "1.069vw",
                        letterSpacing: "0.08em",
                        fontWeight: "400",
                    },
                ],

                "utility-small": [
                    "0.75rem",
                    {
                        lineHeight: "0.9rem",
                        letterSpacing: "0.08em",
                        fontWeight: "400",
                    },
                ],
                "utility-small-2xl": [
                    "0.833vw",
                    {
                        lineHeight: "1vw",
                        letterSpacing: "0.08em",
                        fontWeight: "400",
                    },
                ],
            },
            colors: {
                // primary: "#0064e0",
                primary: "#055690",
                secondary: "#0050b3",
                tertiary: "#051c2c",
                line: "#1877f2",
                yellow: "#f5ce45",
                green: "#00854E",
                green2: "#4c5c4d",
                orange: "#e95027",
                gray: {
                    20: "#333",
                    30: "#4d4d4d",
                    40: "#666",
                    50: "",
                    60: "#999",
                    70: "#b3b3b3",
                    80: "#ccc",
                    90: "#d9d9d9",
                    collapHead: "#F0F2F4",
                    collapBody: "#F8F8F9",
                    cusBorder: "#B8C6BB",
                    main: "#cbc9bc",
                    border: "rgb(103,120,138, 0.2)",
                    imageBg: "rgba(255,255,255,0.93)"
                },
                graphite: "#1c1c1c",
                white: "rgba(255, 255, 255)",
                blue: "rgba(5,19,103,1)",
                blue2: "rgba(30, 69, 243, 1)",
                red: "#C73400",
                overlay: {
                    popup: "rgba(0, 0, 0, 0.2)",
                },
                bgButton: "rgba(202,252,67)",
                bgBorder: "#EBEBEB",
                bgTrans: "hsla(0,0%,96%,.3)",
                bgRed: "#ff1152",
                bgGray: "#F0F2F4",
                bgOverlay: "rgba(0, 0, 0, 0.6)",
                bgPage1: "#B3B3B3",
                bgBlue: "#172774",
                beige: "#f2e8dc",
                marron: "#d6b896",
                bone: {
                    1: "#E3DFD0",
                    2: "#CECBBD"
                },
                match: {
                    1: "#97B3A5",
                    2: "#709A92"
                },

            },

            spacing: {
                navigation: "13.5px",

                5: "0.313rem",
                "5-md": "0.651vw",
                "5-2xl": "0.347vw",
                8: "0.5rem",
                "8-md": "1.042vw",
                "8-2xl": "0.556vw",
                10: "0.625rem",
                "10-md": "1.302vw",
                "10-2xl": "0.694vw",
                12: "0.75rem",
                "12-md": "1.563vw",
                "12-2xl": "0.833vw",
                15: "0.938rem",
                "15-md": "1.953vw",
                "15-2xl": "1.042vw",
                16: "1rem",
                "16-md": "2.083vw",
                "16-2xl": "1.111vw",
                18: "1.125rem",
                "18-md": "2.344vw",
                "18-2xl": "1.250vw",

                20: "1.25rem",
                "20-md": "2.604vw",
                "20-2xl": "1.389vw",
                24: "1.5rem",
                "24-md": "3.125vw",
                "24-2xl": "1.667vw",
                30: "1.875rem",
                "30-md": "3.906vw",
                "30-2xl": "2.083vw",

                40: "2.5rem",
                "40-md": "5.208vw",
                "40-2xl": "2.778vw",
                45: "2.813rem",
                "45-md": "5.859vw",
                "45-2xl": "3.125vw",
                50: "3.125rem",
                "50-md": "6.510vw",
                "50-2xl": "3.472vw",
                60: "3.75rem",
                "60-md": "7.813vw",
                "60-2xl": "4.167vw",
                64: "4rem",
                "64-md": "8.333vw",
                "64-2xl": "4.441vw",
                70: "4.938rem",
                "70-md": "9.115vw",
                "70-2xl": "4.861vw",
                80: "5rem",
                "80-md": "10.417vw",
                "80-2xl": "5.556vw",
                100: "100px",
                "100-md": "13.021vw",
                "100-2xl": "6.944vw",
                "120-md:": "17.74vw",
            },
            letterSpacing: {
                widest: "0.08rem",
                wide: "0.02em",
                wider: "0.02rem",
            },
            screens: {
                "2xl": { min: "1441px" },
            },
            cursor: {
                close: "url(/close.svg), pointer",
            },
            transitionTimingFunction: {
                "in-expo": "cubic-bezier(.73,.01,0,1)",
                "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
                "overlay-anim": "cubic-bezier(.19,1,.22,1)",
                "btn-anim": "cubic-bezier(.25,.74,.22,.99)"
            },

            transformOrigin: {
                "top-left-0-2/4": "0 50%",
                "top-left-full-2/4": "100% 50%",
            },
            flex: {
                '2': '1.2 1.2 0%'
            },
            backgroundImage: {
                'mainGrad1': 'linear-gradient(141deg, rgb(172 5 45) 0%, rgba(37,110,177,1) 55%, rgba(9,73,121,0.9976584383753502) 100%)',
                'mainTrans': 'transparent',
                'mainFirst': 'linear-gradient(180deg,rgba(123,26,89,0), #001f6e 98%)'
            }
        },
    },


};
