/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type PaymentCardEnumType = "MASTER" | "VISA" | "%future added value";
export type PaymentStatusEnumType = "PAID" | "REFUSED" | "%future added value";
export type PaymentTypesEnum = "CREDIT_CARD" | "%future added value";
export type cartCheckoutMutationVariables = {|
  paymentCard: PaymentCardEnumType,
  paymentType: PaymentTypesEnum,
  creditCardNumber: string,
|};
export type cartCheckoutMutationResponse = {|
  +checkout: ?{|
    +_id: string,
    +payment: {|
      +paymentType: PaymentTypesEnum,
      +paymentCardType: PaymentCardEnumType,
      +paymentStatus: PaymentStatusEnumType,
      +transactionId: ?string,
    |},
    +products: $ReadOnlyArray<?{|
      +name: string,
      +productId: string,
      +price: number,
      +quantity: number,
    |}>,
    +total: number,
  |}
|};
export type cartCheckoutMutation = {|
  variables: cartCheckoutMutationVariables,
  response: cartCheckoutMutationResponse,
|};
*/


/*
mutation cartCheckoutMutation(
  $paymentCard: PaymentCardEnumType!
  $paymentType: PaymentTypesEnum!
  $creditCardNumber: String!
) {
  checkout(payment: {paymentCard: $paymentCard, paymentType: $paymentType, creditCardNumber: $creditCardNumber}) {
    _id
    payment {
      paymentType
      paymentCardType
      paymentStatus
      transactionId
    }
    products {
      name
      productId
      price
      quantity
    }
    total
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "creditCardNumber"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "paymentCard"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "paymentType"
},
v3 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "creditCardNumber",
            "variableName": "creditCardNumber"
          },
          {
            "kind": "Variable",
            "name": "paymentCard",
            "variableName": "paymentCard"
          },
          {
            "kind": "Variable",
            "name": "paymentType",
            "variableName": "paymentType"
          }
        ],
        "kind": "ObjectValue",
        "name": "payment"
      }
    ],
    "concreteType": "OrderType",
    "kind": "LinkedField",
    "name": "checkout",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "_id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "PaymentType",
        "kind": "LinkedField",
        "name": "payment",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "paymentType",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "paymentCardType",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "paymentStatus",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "transactionId",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "CartItemType",
        "kind": "LinkedField",
        "name": "products",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "productId",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "price",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "quantity",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "total",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "cartCheckoutMutation",
    "selections": (v3/*: any*/),
    "type": "mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v2/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "cartCheckoutMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "a5af80ab72ccd1ff9fec1a4683fd3735",
    "id": null,
    "metadata": {},
    "name": "cartCheckoutMutation",
    "operationKind": "mutation",
    "text": "mutation cartCheckoutMutation(\n  $paymentCard: PaymentCardEnumType!\n  $paymentType: PaymentTypesEnum!\n  $creditCardNumber: String!\n) {\n  checkout(payment: {paymentCard: $paymentCard, paymentType: $paymentType, creditCardNumber: $creditCardNumber}) {\n    _id\n    payment {\n      paymentType\n      paymentCardType\n      paymentStatus\n      transactionId\n    }\n    products {\n      name\n      productId\n      price\n      quantity\n    }\n    total\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6ac8e41f78957fc2772c5bc97694e47b';

module.exports = node;
