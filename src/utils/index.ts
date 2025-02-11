import { TabInfo } from "../types";

export const getTabInfo = (
  tabsInfo: TabInfo[],
  key: keyof TabInfo,
  value: string,
) => tabsInfo.find((tabInfo) => tabInfo[key] === value) || tabsInfo[0];
