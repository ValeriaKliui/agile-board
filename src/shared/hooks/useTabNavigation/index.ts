import { type DefaultTabInfo } from '@shared/layout';
import { getTabInfo } from '@shared/utils';
import { useCallback, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router';

export const useTabNavigation = ({ tabItems }: { tabItems: DefaultTabInfo[] }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const activeTabKey = useMemo(() => {
    const tab = getTabInfo(tabItems, 'link', pathname);
    return tab?.key ?? '';
  }, [pathname, tabItems]);

  const onTabChange = useCallback(
    (tabKey: string) => {
      const { link } = getTabInfo(tabItems, 'key', tabKey);
      navigate(link);
    },
    [navigate, tabItems],
  );

  return { activeTabKey, onTabChange };
};
