import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { AnimateSharedLayout } from 'framer-motion';
import SkillDonutChart, {
	ChartInfoType,
	DescInfoType,
} from '../../../../components/SkillDonutChart/SkillDonutChart';
import {
	StyledSkillsetsSectionContainer,
	StyledSkillsetContainer,
} from './SkillsetsSectionContentStyles';
import { ComponentPropType } from '../../../../config/content';

export type SkillsetsSectionContentType = {
	charts: {
		chartInfo: ChartInfoType;
		descInfo: DescInfoType;
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
		<AnimateSharedLayout>
			<StyledSkillsetsSectionContainer ref={ref} layout>
				{inView &&
					charts.map((item, idx) => {
						const { chartInfo, descInfo } = item;
						return (
							<StyledSkillsetContainer
								layout
								key={chartInfo.id}
								aria-label="skillset-container"
							>
								<SkillDonutChart
									chartInfo={chartInfo}
									descInfo={descInfo}
									active={activeSkillsetIdx === idx}
									onClick={() => skillsetOnClickHandler(idx)}
								/>
							</StyledSkillsetContainer>
						);
					})}
			</StyledSkillsetsSectionContainer>
		</AnimateSharedLayout>
	);
};

export default SkillsetsSectionContent;
