import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Logo, Cart, Wrapper } from './styles';

export default function Header() {
  return (
    <Wrapper>
      <Container>
        <Logo />
        <Cart>
          <Icon name="shopping-cart" size={24} color="#FFF" />
        </Cart>
      </Container>
    </Wrapper>
  );
}
