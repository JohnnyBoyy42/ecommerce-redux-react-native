import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

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

export default function Main() {
  const [products, setProducts] = useState([]);

  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;

      return sumAmount;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await api.get('products');

        const data = response.data.map(product => ({
          ...product,
          priceFormatted: formatPrice(product.price),
        }));

        setProducts(data);
      } catch (error) {
        console.tron.log(error);
      }
    }

    loadProducts();
  }, []);

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

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
              <AddButton onPress={() => handleAddProduct(item.id)}>
                <ProductAmount>
                  <Icon name="add-shopping-cart" color="#FFF" size={20} />
                  <ProductAmountText>{amount[item.id] || 0}</ProductAmountText>
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
