import { DefaultTabInfo } from "@layout/auth/interfaces";
import { getTabInfo } from "@utils/index";
import { useLocation, useNavigate } from "react-router";

export const useTabNavigation = ({
  tabItems,
}: {
  tabItems: DefaultTabInfo[];
}) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { key: activeTabKey } = getTabInfo(tabItems, "link", pathname);

  const onTabChange = (tabKey: string) => {
    const { link } = getTabInfo(tabItems, "key", tabKey);
    navigate(link);
  };

  return { activeTabKey, onTabChange };
};
