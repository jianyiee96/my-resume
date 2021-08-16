import { AnimateSharedLayout } from 'framer-motion';
import TypeWriter from '../../../../components/Typewriter/TypeWriter';
import { SubHeaderContainer } from './MainSectionContentStyles';
import RotatingText, {
	RotatingTextProps,
} from '../../../../components/RotatingText/RotatingText';
import { mainPageContent } from '../../../../config/content';

export type MainContentType = {
	typingTextContent: string;
	rotatingTextContent: RotatingTextProps;
};

const MainSectionContent = ({
	mainCompleted,
	setMainCompleted,
}: {
	mainCompleted: boolean;
	setMainCompleted: React.Dispatch<React.SetStateAction<boolean>>;
}): JSX.Element => (
	<AnimateSharedLayout>
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
	</AnimateSharedLayout>
);

export default MainSectionContent;
