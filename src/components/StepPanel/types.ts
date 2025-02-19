import { ReactNode } from 'react';

export interface StepType {
  title: string;
  content: ReactNode;
}

export interface StepsPanelProps {
  steps: StepType[];
}
