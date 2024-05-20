import { FC } from 'react';
import './style.css';
export interface CheckerProps {
  value: boolean;
  onChange: () => void;
  children: string;
}
export declare const Checker: FC<CheckerProps>;
