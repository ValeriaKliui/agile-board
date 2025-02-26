import { RoleIconProps } from './types';

export const Icon = ({ icon: Icon, color, size = 20 }: RoleIconProps) => {
  if (!Icon) return null;

  const isTwoTone = Icon.displayName?.includes('TwoTone');

  return (
    <Icon
      {...(isTwoTone ? { twoToneColor: color } : { style: { color } })}
      style={{ fontSize: size }}
    />
  );
};
