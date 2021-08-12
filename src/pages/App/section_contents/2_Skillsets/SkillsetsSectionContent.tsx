import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { IconType } from 'react-icons';
import SkillDonutChart from '../../../../components/SkillDonutChart/SkillDonutChart';
import {
	StyledSkillsetsSectionContainer,
	StyledSkillsetContainer,
} from './SkillsetsSectionContentStyles';
import { ComponentPropType } from '../../../../config/content';

export type SkillsetsSectionContentType = {
	charts: {
		chartInfo: {
			id: string;
			label: string;
			percentage: number;
			color: string;
			Icon: IconType;
			iconWidth?: string;
			iconMarginTop?: string;
		};
	}[];
};

const SkillsetsSectionContent = ({
	content,
}: ComponentPropType): JSX.Element => {
	const { charts } = content as SkillsetsSectionContentType;
	const [activeSkillsetIdx, setActiveSkillsetIdx] = useState<number | null>(
		null
	);
	const { ref, inView } = useInView();

	const skillsetOnClickHandler = (idx: number): void => {
		if (idx === activeSkillsetIdx) {
			setActiveSkillsetIdx(null);
		} else {
			setActiveSkillsetIdx(idx);
		}
	};
	return (
		<StyledSkillsetsSectionContainer ref={ref}>
			{inView &&
				charts.map((item, idx) => {
					const { chartInfo } = item;
					return (
						<StyledSkillsetContainer key={chartInfo.id}>
							<SkillDonutChart
								label={chartInfo.label}
								percentage={chartInfo.percentage}
								color={chartInfo.color}
								icon={chartInfo.Icon}
								iconWidth={chartInfo.iconWidth}
								iconMarginTop={chartInfo.iconMarginTop}
								active={activeSkillsetIdx === idx}
								onClick={() => skillsetOnClickHandler(idx)}
							/>
						</StyledSkillsetContainer>
					);
				})}
		</StyledSkillsetsSectionContainer>
	);
};

export default SkillsetsSectionContent;
