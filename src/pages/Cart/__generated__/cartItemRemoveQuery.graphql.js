/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CartStatusEnumType = "ACTIVE" | "INACTIVE" | "%future added value";
export type cartItemRemoveQueryVariables = {|
  productId: string
|};
export type cartItemRemoveQueryResponse = {|
  +removeCartItem: ?{|
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
export type cartItemRemoveQuery = {|
  variables: cartItemRemoveQueryVariables,
  response: cartItemRemoveQueryResponse,
|};
*/


/*
mutation cartItemRemoveQuery(
  $productId: ID!
) {
  removeCartItem(productId: $productId) {
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
        "kind": "Variable",
        "name": "productId",
        "variableName": "productId"
      }
    ],
    "concreteType": "CartType",
    "kind": "LinkedField",
    "name": "removeCartItem",
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
    "name": "cartItemRemoveQuery",
    "selections": (v2/*: any*/),
    "type": "mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "cartItemRemoveQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "1a38f8885f773fab14e0b19d22818385",
    "id": null,
    "metadata": {},
    "name": "cartItemRemoveQuery",
    "operationKind": "mutation",
    "text": "mutation cartItemRemoveQuery(\n  $productId: ID!\n) {\n  removeCartItem(productId: $productId) {\n    _id\n    total\n    status\n    quantity\n    products {\n      name\n      productId\n      price\n      quantity\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'fa69af414906a64667c1d78d4558ad2b';

module.exports = node;
