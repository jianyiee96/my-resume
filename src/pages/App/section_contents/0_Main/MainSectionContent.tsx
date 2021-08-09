import { useState } from 'react';
import TypeWriter from '../../../../components/TypeWriter/TypeWriter';
import { SubHeaderContainer } from './MainSectionContentStyles';
import RotatingText from '../../../../components/RotatingText/RotatingText';
import { mainPageContent } from '../../../../config/content';

const MainSectionContent = (): JSX.Element => {
	const [mainCompleted, setMainCompleted] = useState<boolean>(false);

	return (
		<>
			<TypeWriter
				text={mainPageContent.typingTextContent}
				headerType={1}
				setCompleted={setMainCompleted}
			/>
			<SubHeaderContainer className={mainCompleted ? 'visible' : 'hidden'}>
				{mainCompleted && (
					<RotatingText
						preText={mainPageContent.rotatingTextContent.preText}
						items={mainPageContent.rotatingTextContent.items}
					/>
				)}
			</SubHeaderContainer>
		</>
	);
};

export default MainSectionContent;
