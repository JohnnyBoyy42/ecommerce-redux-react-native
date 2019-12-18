import React from 'react';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Logo,
  Cart,
  Wrapper,
  ImageButton,
  ItemCount,
} from './styles';

function Header({ navigation, cartSize }) {
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

const mapStateToProps = state => ({
  cartSize: state.cart.length,
});

export default connect(mapStateToProps, null)(Header);
