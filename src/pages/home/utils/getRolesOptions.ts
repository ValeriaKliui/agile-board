import { ROLES } from '@constants';
import { transformObjectToOptions } from '@pages/home/utils';

export const getRolesOptions = () => {
  return transformObjectToOptions(ROLES)
    .filter(({ value }) => {
      return value !== ROLES.OWNER;
    })
    .map(({ value, label }) => ({ value, label: label.toLowerCase(), key: value }));
};
