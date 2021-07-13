import { useState } from 'react';
import TypeWriter from '../../../../components/Typewriter/TypeWriter';
import { SubHeaderFade } from './MainSectionContentStyles';

const MainSectionContent = (): JSX.Element => {
	const [mainCompleted, setMainCompleted] = useState<boolean>(false);
	type MainPageType = {
		header: string;
		subHeader: string;
	};
	const mainPageContent: MainPageType = {
		header: "Hi. I'm Bryan Thum",
		subHeader: 'Web Developer',
	};

	return (
		<>
			<TypeWriter
				text={mainPageContent.header}
				headerType={1}
				setCompleted={setMainCompleted}
			/>
			<SubHeaderFade className={mainCompleted ? 'visible' : 'hidden'}>
				{mainPageContent.subHeader}
			</SubHeaderFade>
		</>
	);
};

export default MainSectionContent;
