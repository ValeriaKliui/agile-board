import { Template } from '@pages/home/components';

export const getTemplateOptions = (templates: Template[]) =>
  templates?.map(({ id, title }) => ({
    value: id,
    label: title,
  }));
