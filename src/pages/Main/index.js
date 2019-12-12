import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';
import { formatPrice } from '../../util/format';

import { Container, AddToCartButton, AddToCartText } from './styles';

export default class Main extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    try {
      const response = await api.get('products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      this.setState({ products: data });
    } catch (error) {
      console.tron.log(error);
    }
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
