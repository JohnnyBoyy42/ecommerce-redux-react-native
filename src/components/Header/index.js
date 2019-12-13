import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Logo, Cart, Wrapper, ImageButton } from './styles';

export default function Header({ navigation }) {
  return (
    <Wrapper>
      <Container>
        <ImageButton onPress={() => navigation.navigate('Main')}>
          <Logo />
        </ImageButton>
        <Cart onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-cart" size={24} color="#FFF" />
        </Cart>
      </Container>
    </Wrapper>
  );
}
