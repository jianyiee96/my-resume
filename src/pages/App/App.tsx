import logo from '../../assets/svgs/logo.svg';
import { AppStyle, AppHeader, AppLogoImg, AppLink } from './AppStyles';

const App = (): JSX.Element => (
	<AppStyle>
		<AppHeader className="App-header">
			<AppLogoImg src={logo} alt="logo" />
			<p>
				Edit <code>src/App.tsx</code> and save to reload.
			</p>
			<AppLink
				href="https://reactjs.org"
				target="_blank"
				rel="noopener noreferrer"
			>
				Learn React
			</AppLink>
		</AppHeader>
	</AppStyle>
);

export default App;
