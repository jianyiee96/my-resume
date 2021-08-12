import { IconType } from 'react-icons';
import { PieChart } from 'react-minimal-pie-chart';
import { ChartContainer } from './SkillDonutChartStyles';

type SkillDonutChartProps = {
	label: string;
	percentage: number;
	color: string;
	iconWidth?: string;
	iconMarginTop?: string;
	animate?: boolean;
	icon: IconType;
	active?: boolean;
	onClick?: () => void;
};
const SkillDonutChart = ({
	label,
	percentage,
	color,
	iconWidth,
	iconMarginTop,
	animate = true,
	icon: Icon,
	active = false,
	onClick,
}: SkillDonutChartProps): JSX.Element => (
	<ChartContainer
		color={color}
		iconWidth={iconWidth}
		iconMarginTop={iconMarginTop}
		onClick={onClick}
		aria-label="chart-container"
		className={`${active && 'active'}`}
	>
		<PieChart
			data={[{ key: 1, value: 1, color }]}
			reveal={percentage * 100}
			lineWidth={15}
			startAngle={270}
			rounded
			animate={animate}
			background={color}
			animationEasing="ease-in-out"
			animationDuration={1000}
		/>
		<p>
			{label}
			<br />
			<b>{percentage * 100}%</b>
		</p>
		<Icon color={color} className="chart-icon" />
	</ChartContainer>
);
export default SkillDonutChart;
