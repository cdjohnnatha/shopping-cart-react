/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CartStatusEnumType = "ACTIVE" | "INACTIVE" | "%future added value";
export type cartItemAddMutationVariables = {|
  productId: string
|};
export type cartItemAddMutationResponse = {|
  +addCartItem: ?{|
    +_id: ?string,
    +total: number,
    +status: CartStatusEnumType,
    +quantity: number,
    +products: ?$ReadOnlyArray<?{|
      +productId: string,
      +price: number,
      +quantity: number,
    |}>,
  |}
|};
export type cartItemAddMutation = {|
  variables: cartItemAddMutationVariables,
  response: cartItemAddMutationResponse,
|};
*/


/*
mutation cartItemAddMutation(
  $productId: ID!
) {
  addCartItem(cartItem: {productId: $productId}) {
    _id
    total
    status
    quantity
    products {
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
          }
        ],
        "kind": "ObjectValue",
        "name": "cartItem"
      }
    ],
    "concreteType": "CartType",
    "kind": "LinkedField",
    "name": "addCartItem",
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
    "name": "cartItemAddMutation",
    "selections": (v2/*: any*/),
    "type": "mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "cartItemAddMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "d15f743bfa6dbfc209cd9d5f533b54a8",
    "id": null,
    "metadata": {},
    "name": "cartItemAddMutation",
    "operationKind": "mutation",
    "text": "mutation cartItemAddMutation(\n  $productId: ID!\n) {\n  addCartItem(cartItem: {productId: $productId}) {\n    _id\n    total\n    status\n    quantity\n    products {\n      productId\n      price\n      quantity\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4b0772bbe066d2b44a603c661300f8e9';

module.exports = node;
