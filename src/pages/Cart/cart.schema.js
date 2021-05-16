import { graphql } from 'react-relay';

graphql`
  mutation cartItemAddMutation($productId: ID!) {
    addCartItem(cartItem:{  productId: $productId }) {
      _id
      total
      status
      quantity
      products{
        name
        productId
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
        name
        productId
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
        name
        productId
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
        name
        productId
        price
        quantity
      }
    }
  }
`;

graphql`
  mutation cartCheckoutMutation($paymentCard: PaymentCardEnumType!, $paymentType: PaymentTypesEnum!, $creditCardNumber: String!) {
    checkout(payment:{  paymentCard: $paymentCard, paymentType: $paymentType, creditCardNumber: $creditCardNumber }){
      _id
      payment{
        paymentType
        paymentCardType
        paymentStatus
        transactionId
      }
      products{
        name
        productId
        price
        quantity
      }
      total
    }
  }
`;