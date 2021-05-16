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
      +name: string,
      +productId: string,
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
      name
      productId
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
  "name": "quantity",
  "storageKey": null
},
v2 = [
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
      (v1/*: any*/),
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
          (v1/*: any*/)
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
    "selections": (v2/*: any*/),
    "type": "mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "cartItemUpdateQuantityMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "cd292147a1e17642adb91209a95aa7c3",
    "id": null,
    "metadata": {},
    "name": "cartItemUpdateQuantityMutation",
    "operationKind": "mutation",
    "text": "mutation cartItemUpdateQuantityMutation(\n  $productId: ID!\n  $quantity: Int!\n) {\n  updateCartItemQuantity(cartItem: {productId: $productId, quantity: $quantity}) {\n    _id\n    total\n    status\n    quantity\n    products {\n      name\n      productId\n      price\n      quantity\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6d85dc7b838150d17be3d8974e37bd90';

module.exports = node;
