import { DefaultTabInfo } from '@shared/types';

export const getTabInfo = (tabsInfo: DefaultTabInfo[], key: keyof DefaultTabInfo, value: string) =>
  tabsInfo.find((tabInfo) => tabInfo[key] === value) || tabsInfo[0];
