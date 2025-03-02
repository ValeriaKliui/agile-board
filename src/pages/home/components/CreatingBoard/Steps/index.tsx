import { BasicBoardInfo } from '@pages/home/components';
import { StepPanel } from '@shared/components';
import { MembersRolesList } from '@shared/components';
import { StepType } from '@shared/types';
import { getRolesOptions } from '@shared/utils';

import { CreatingBoardStepsProps } from './types';

export const CreatingBoardSteps = ({ membersOptions, isNextAllowed }: CreatingBoardStepsProps) => {
    const rolesOptions = getRolesOptions();

    const steps: StepType[] = [
        { title: 'Initial info', content: <BasicBoardInfo /> },
        {
            title: 'Assign roles',
            content: <MembersRolesList members={membersOptions} roles={rolesOptions} />,
        },
    ];

    return <StepPanel steps={steps} isNextAllowed={isNextAllowed} />;
};

