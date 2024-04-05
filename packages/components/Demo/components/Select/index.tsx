import React from 'react';
import { Select as SelectComponent, Option } from '@ornament-ui/kit/Select';

export const Select = () => {
  return (
    <SelectComponent label="Числительные" placeholder="Подсказка">
      <Option value={0}>Ноль</Option>
      <Option value={1}>Один</Option>
      <Option value={2}>Два</Option>
      <Option value={3}>Три</Option>
      <Option value={4}>Четыре</Option>
      <Option disabled value={5}>
        Пять
      </Option>
    </SelectComponent>
  );
};
