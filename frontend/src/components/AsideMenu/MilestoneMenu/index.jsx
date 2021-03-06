import React from 'react';
import SideBox from '@common/SideBox';
import { useSelector } from '@hooks/react-context';
import Milestone from './Milestone';
import Filter from '@common/Filter';
import useInputChange from '@hooks/useInputChange';
import { MilestoneSelected, MilestoneContainer } from './style';

export const MilestoneMenu = ({ additionalInfo }) => {
  return (
    <MilestoneSelected>
      {additionalInfo.milestone ? (
        <>
          <div className='graph'></div>
          <div className='milestone_selected_title'>
            {additionalInfo.milestone.title}
          </div>
        </>
      ) : (
        <div>No milestone</div>
      )}
    </MilestoneSelected>
  );
};

export const MilestoneDropDown = ({ additionalInfo, setAdditionalInfo }) => {
  const milestones = useSelector(state => state.milestone);
  const [milestoneInput, changeMilestoneInput] = useInputChange('');

  return (
    <MilestoneContainer>
      <div className='aside_drop_down_header'>Set milestone</div>
      <div className='aside_drop_down_filter'>
        <Filter
          value={milestoneInput}
          onChange={changeMilestoneInput}
          placeholder={'Filter milestones'}
          isAside={true}
        />
      </div>
      <ul className='milestone_list_content'>
        {milestones.length ? (
          milestones.map(milestone => (
            <Milestone
              key={milestone.id}
              milestone={milestone}
              setAdditionalInfo={setAdditionalInfo}
              additionalInfo={additionalInfo}
            />
          ))
        ) : (
          <div>No Milestones</div>
        )}
      </ul>
    </MilestoneContainer>
  );
};
