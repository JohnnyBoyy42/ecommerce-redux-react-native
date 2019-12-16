import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';
import { formatPrice } from '../../util/format';

import * as CartActions from '../../store/modules/cart/actions';

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

class Main extends Component {
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

  handleAddProduct = id => {
    const { addToCartRequest } = this.props;

    addToCartRequest(id);
  };

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

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(null, mapDispatchToProps)(Main);
