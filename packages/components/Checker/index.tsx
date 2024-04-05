import React, { FC } from 'react';
import './style.css';

interface CheckerProps {
  value: boolean;
  onChange: () => void;
  children: string;
}

export const Checker: FC<CheckerProps> = ({ value, onChange, children }) => {
  return (
    <div className="Checker">
      <div className="Checker__label">{children}</div>
      <div className="Checker__input">
        <input checked={value} type="checkbox" onChange={onChange} />
      </div>
    </div>
  );
};
