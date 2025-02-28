import { RoleIconProps } from './types';

export const Icon = ({ icon: IconComponent, color, size = 20 }: RoleIconProps) => {
  if (!IconComponent) return null;

  const isTwoTone = IconComponent.displayName?.includes('TwoTone');

  const iconProps = isTwoTone ? { twoToneColor: color } : { style: { color, fontSize: size } };

  return <IconComponent {...iconProps} />;
};
