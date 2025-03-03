import { ROLES } from '@shared/constants';
import { transformObjectToOptions } from '@shared/utils';

export const getRolesOptions = () => {
  return transformObjectToOptions(ROLES)
    .filter(({ value }) => {
      return value !== ROLES.OWNER;
    })
    .map(({ value, label }) => ({ value, label: label.toLowerCase(), key: value }));
};
