import { graphql } from 'react-relay';

graphql`
  mutation cartItemAddMutation($productId: ID!) {
    addCartItem(cartItem:{  productId: $productId }) {
      _id
      total
      status
      quantity
      products{
        _id
        price
        quantity
      }
    }
  }
`;

graphql`
  query cartActiveQuery {
    activeCart{
      _id
      total
      status
      quantity
      products{
        _id
        price
        quantity
      }
    }
  }
`;

graphql`
  mutation cartItemRemoveQuery($productId: ID!) {
    removeCartItem(productId: $productId){
      _id
      total
      status
      quantity
      products{
        _id
        price
        quantity
      }
    }
  }
`;

graphql`
  mutation cartItemUpdateQuantityMutation($productId: ID!, $quantity: Int!) {
    updateCartItemQuantity(cartItem:{  productId: $productId, quantity: $quantity }){
      _id
      total
      status
      quantity
      products{
        _id
        price
        quantity
      }
    }
  }
`;