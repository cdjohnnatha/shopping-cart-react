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
      +transactionId: ?$ReadOnlyArray<?string>,
    |},
    +products: $ReadOnlyArray<?{|
      +_id: string,
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
      _id
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
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "_id",
  "storageKey": null
},
v4 = [
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
      (v3/*: any*/),
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
          (v3/*: any*/),
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
    "selections": (v4/*: any*/),
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
    "selections": (v4/*: any*/)
  },
  "params": {
    "cacheID": "11b8914fd18d23fd1762ec7e6a21bce7",
    "id": null,
    "metadata": {},
    "name": "cartCheckoutMutation",
    "operationKind": "mutation",
    "text": "mutation cartCheckoutMutation(\n  $paymentCard: PaymentCardEnumType!\n  $paymentType: PaymentTypesEnum!\n  $creditCardNumber: String!\n) {\n  checkout(payment: {paymentCard: $paymentCard, paymentType: $paymentType, creditCardNumber: $creditCardNumber}) {\n    _id\n    payment {\n      paymentType\n      paymentCardType\n      paymentStatus\n      transactionId\n    }\n    products {\n      _id\n      price\n      quantity\n    }\n    total\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '1d07d9a24482d9c9345452a899b328b9';

module.exports = node;
