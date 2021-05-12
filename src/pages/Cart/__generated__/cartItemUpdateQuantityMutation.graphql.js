/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CartStatusEnumType = "ACTIVE" | "INACTIVE" | "%future added value";
export type cartItemUpdateQuantityMutationVariables = {|
  productId: string,
  quantity: number,
|};
export type cartItemUpdateQuantityMutationResponse = {|
  +updateCartItemQuantity: ?{|
    +_id: ?string,
    +total: number,
    +status: CartStatusEnumType,
    +quantity: number,
    +products: ?$ReadOnlyArray<?{|
      +_id: string,
      +price: number,
      +quantity: number,
    |}>,
  |}
|};
export type cartItemUpdateQuantityMutation = {|
  variables: cartItemUpdateQuantityMutationVariables,
  response: cartItemUpdateQuantityMutationResponse,
|};
*/


/*
mutation cartItemUpdateQuantityMutation(
  $productId: ID!
  $quantity: Int!
) {
  updateCartItemQuantity(cartItem: {productId: $productId, quantity: $quantity}) {
    _id
    total
    status
    quantity
    products {
      _id
      price
      quantity
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "productId"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "quantity"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "_id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "quantity",
  "storageKey": null
},
v3 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "productId",
            "variableName": "productId"
          },
          {
            "kind": "Variable",
            "name": "quantity",
            "variableName": "quantity"
          }
        ],
        "kind": "ObjectValue",
        "name": "cartItem"
      }
    ],
    "concreteType": "CartType",
    "kind": "LinkedField",
    "name": "updateCartItemQuantity",
    "plural": false,
    "selections": [
      (v1/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "total",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "status",
        "storageKey": null
      },
      (v2/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "CartItemType",
        "kind": "LinkedField",
        "name": "products",
        "plural": true,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "price",
            "storageKey": null
          },
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "cartItemUpdateQuantityMutation",
    "selections": (v3/*: any*/),
    "type": "mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "cartItemUpdateQuantityMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "d71e5190797a1d434145d5fd3dccbb70",
    "id": null,
    "metadata": {},
    "name": "cartItemUpdateQuantityMutation",
    "operationKind": "mutation",
    "text": "mutation cartItemUpdateQuantityMutation(\n  $productId: ID!\n  $quantity: Int!\n) {\n  updateCartItemQuantity(cartItem: {productId: $productId, quantity: $quantity}) {\n    _id\n    total\n    status\n    quantity\n    products {\n      _id\n      price\n      quantity\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e70344657ced2eb93e373ea206d32d50';

module.exports = node;
