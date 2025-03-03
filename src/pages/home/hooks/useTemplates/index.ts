import { Template } from '@pages/home/components';
import { fetchTemplates } from '@pages/home/services';
import { useEffect, useState } from 'react';

export const useTemplates = () => {
  const [templates, setTemplates] = useState<Template[]>([]);

  useEffect(() => {
    const fetchBoardTemplates = async () => {
      const templates = await fetchTemplates();
      if (templates) setTemplates([{ id: 'custom', title: 'Custom' }, ...templates]);
    };

    fetchBoardTemplates();
  }, []);

  return templates;
};
