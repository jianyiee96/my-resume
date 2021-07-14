import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  body {
    margin: 0;
    font-family: "Century Gothic", 'Lato', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  a {
	  text-decoration: none;
  }
  h1 {
		font-size: 3rem;
		margin: 0;
		letter-spacing: 1rem;
	}
	h2 {
		font-size: 2rem;
		letter-spacing: 0.5rem;
		filter: brightness(80%);
	}
	h3 {
		font-size: 0.8rem;
		letter-spacing: 0.3rem;
		filter: brightness(60%);
	}

	@media (max-width: 800px) {
		h1 {
			font-size: 2rem;
		}
		h2 {
			font-size: 1.5rem;
		}
		h3 {
			font-size: 1rem;
		}
	}
`;
