import { createGlobalStyle } from "styled-components";

export const ThemeStyle = createGlobalStyle`
    .dark {
        --color-primary: #2188ff;
        --color-text: #24292e;
        --color-text-dull: #768390;
        --color-border: #e0e0e0;
        --color-bg: #fefefe;
        --color-bg-2: #f0f0f0;
        --color-post-bg: #f0f0f0;
        --color-pre-bg: #2d333b;
        --color-pre-fg: #cdd9e5;
        --font-sans-serif: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
        --font-serif: "Georgia",serif;
        --font-mono: monospace;
        --font-light: 100;
        --font-normal: 400;
        --font-bold: 700;
        --font-heavy: 800;
        --xlarge: 1680px;
        --large: 1280px;
        --medium: 980px;
        --small: 740px;
        --xsmall: 480px;
        --height: 4rem;
        --margin: 2rem;
        --radius: 0.5rem;
    }
    @media (prefers-color-scheme: dark) {
        .dark {
            --color-primary: #539bf5;
            --color-text: #adbac7;
            --color-text-dull: #aeaeae;
            --color-border: #444c56;
            --color-bg: #1e2228;
            --color-bg-2: rgba(205, 217, 229, 0.15);
            --color-post-bg: rgba(9, 11, 13, 0.8);
            --color-pre-bg: #2d333b;
            --color-pre-fg: #cdd9e5;
        }
    }
`;