import { Tabs as TabsAntd, TabsProps } from "antd";
import { FC } from "react";

export const Tabs: FC<TabsProps> = (tabsProps) => {
    return <TabsAntd {...tabsProps} />
}