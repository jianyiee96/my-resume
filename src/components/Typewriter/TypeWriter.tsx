import { useState, useEffect } from 'react';
import { StyledSpan } from './TypeWriterStyles';

type TypeWriterProps = {
	text: string;
	headerType?: 1 | 2 | 3;
	setCompleted?: React.Dispatch<React.SetStateAction<boolean>>;
};

const TypeWriter = ({
	text,
	headerType = 3,
	setCompleted,
}: TypeWriterProps): JSX.Element => {
	const [idx, setIdx] = useState<number>(0);
	const [completed, setLocalCompleted] = useState<boolean>(false);
	const [displayText, setDisplayText] = useState<string>('');
	const Header = `h${headerType}` as keyof JSX.IntrinsicElements;

	useEffect(() => {
		const interval = 100;
		const completeInterval = 2000;
		if (idx <= text.length) {
			setTimeout(() => {
				setIdx((prev) => prev + 1);
				setDisplayText(text.substring(0, idx));
			}, interval);
		} else {
			setTimeout(() => {
				setLocalCompleted(true);
				if (setCompleted) {
					setCompleted(true);
				}
			}, completeInterval);
		}
		return () => clearInterval(interval);
	}, [idx, text, setCompleted]);

	return (
		<>
			<Header>
				<StyledSpan style={{ visibility: 'hidden' }} />
				{displayText}
				<StyledSpan
					aria-hidden="true"
					style={{ visibility: completed ? 'hidden' : 'visible' }}
				/>
			</Header>
		</>
	);
};

export default TypeWriter;
