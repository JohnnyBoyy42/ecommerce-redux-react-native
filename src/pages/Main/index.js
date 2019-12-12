import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';

import { Container, AddToCartButton, AddToCartText } from './styles';

export default class Main extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('products');
  }

  render() {
    const { products } = this.state;
    return (
      <Container>
        <AddToCartButton>
          <AddToCartText>Teste</AddToCartText>
        </AddToCartButton>
      </Container>
    );
  }
}
