import { useState } from 'react';
import TypeWriter from '../../../../components/TypeWriter/TypeWriter';
import { SubHeaderContainer } from './MainSectionContentStyles';
import RotatingText, {
	RotatingTextProps,
} from '../../../../components/RotatingText/RotatingText';

export type MainPageType = {
	header: string;
	subHeaderContent: RotatingTextProps;
};

const MainSectionContent = (): JSX.Element => {
	const [mainCompleted, setMainCompleted] = useState<boolean>(false);

	const mainPageContent: MainPageType = {
		header: "Hi. I'm Bryan Thum",
		subHeaderContent: {
			preText: 'I am a',
			items: ['Programmer', 'Developer', 'Thinker', 'Problem-Solver'],
		},
	};

	return (
		<>
			<TypeWriter
				text={mainPageContent.header}
				headerType={1}
				setCompleted={setMainCompleted}
			/>
			<SubHeaderContainer className={mainCompleted ? 'visible' : 'hidden'}>
				{mainCompleted && (
					<RotatingText
						preText={mainPageContent.subHeaderContent.preText}
						items={mainPageContent.subHeaderContent.items}
					/>
				)}
				{/* {mainPageContent.subHeader} */}
			</SubHeaderContainer>
		</>
	);
};

export default MainSectionContent;
