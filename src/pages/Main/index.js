import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';
import { formatPrice } from '../../util/format';

import {
  Container,
  List,
  ProductImage,
  Product,
  ProductPrice,
  ProductTitle,
  AddButton,
  ProductAmount,
  ProductAmountText,
  AddButtonText,
  Wrapper,
} from './styles';

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
      <Wrapper>
        <Container>
          <List
            data={products}
            horizontal
            keyExtractor={product => product.id}
            renderItem={({ item }) => (
              <Product key={item.id}>
                <ProductImage source={{ uri: item.image }} />
                <ProductTitle>{item.title}</ProductTitle>
                <ProductPrice>{formatPrice(item.price)}</ProductPrice>
                <AddButton onPress={() => this.handleAddProduct(item.id)}>
                  <ProductAmount>
                    <Icon name="add-shopping-cart" color="#FFF" size={20} />
                    <ProductAmountText>{1 || 0}</ProductAmountText>
                  </ProductAmount>
                  <AddButtonText>ADICIONAR</AddButtonText>
                </AddButton>
              </Product>
            )}
          />
        </Container>
      </Wrapper>
    );
  }
}
