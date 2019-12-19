import React from 'react';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Logo,
  Cart,
  Wrapper,
  ImageButton,
  ItemCount,
} from './styles';

export default function Header({ navigation }) {
  const cartSize = useSelector(state => state.cart.length);

  return (
    <Wrapper>
      <Container>
        <ImageButton onPress={() => navigation.navigate('Main')}>
          <Logo />
        </ImageButton>
        <Cart onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-cart" size={24} color="#FFF" />
          <ItemCount>{cartSize}</ItemCount>
        </Cart>
      </Container>
    </Wrapper>
  );
}
