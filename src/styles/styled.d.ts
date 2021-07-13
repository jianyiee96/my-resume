import 'styled-components';

// DefaultTheme is being used as an interface of props.theme out of the box
// By default the interface DefaultTheme is empty so that's why we need to extend it.
declare module 'styled-components' {
	export interface DefaultTheme {
		colours: {
			main: string;
			secondary: string;
			third: string;
			fourth: string;
			fifth: string;
		};
		fontColours: {
			main: string;
			secondary: string;
		};
	}
}
