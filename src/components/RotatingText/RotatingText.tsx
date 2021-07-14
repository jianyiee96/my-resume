import { StyledRotatingText } from './RotatingTextStyles';

export type RotatingTextProps = {
	preText?: string;
	items: string[];
};

const RotatingText = ({ preText, items }: RotatingTextProps): JSX.Element => (
	<h2>
		<StyledRotatingText>
			<div className="container">
				<div className="text">{preText}</div>

				<ul className="list">
					{items.map((item) => (
						<li className="item">{item}</li>
					))}
				</ul>
			</div>
		</StyledRotatingText>
	</h2>
);

export default RotatingText;
