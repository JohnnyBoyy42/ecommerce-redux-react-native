import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container } from './styles';

export default function Main() {
  return (
    <Container>
      <Icon name="add" size={20} color="#FFF" />
    </Container>
  );
}

Main.navigationOptions = {
  title: 'Usuários',
};
