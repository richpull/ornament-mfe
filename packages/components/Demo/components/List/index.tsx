import React from 'react';
import { List as ListComponent, ListItem, ListItemText } from '@ornament-ui/kit/List';

export const List = () => (
  <ListComponent
    as="ul"
    size="m"
    style={{
      maxWidth: 320,
    }}
  >
    <ListItem>
      <ListItemText primary="Иванов Алексей Иванович" secondary="Менеджер" />
    </ListItem>
    <ListItem>
      <ListItemText primary="Сергеева Фатима Некифировна" secondary="Служба поддержки" />
    </ListItem>
    <ListItem>
      <ListItemText primary="Платонов Федор Викторович" secondary="Приятный парень" />
    </ListItem>
  </ListComponent>
);
