import { transformObjectToOptions } from '@pages/home/utils';
import { ROLES } from '@shared/constants';

export const getRolesOptions = () => {
  return transformObjectToOptions(ROLES)
    .filter(({ value }) => {
      return value !== ROLES.OWNER;
    })
    .map(({ value, label }) => ({ value, label: label.toLowerCase(), key: value }));
};
