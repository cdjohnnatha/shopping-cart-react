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
      +_id: string,
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
    "name": "cartItemRemoveQuery",
    "selections": (v3/*: any*/),
    "type": "mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "cartItemRemoveQuery",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "858d67a3525164df0df6483ed8bece91",
    "id": null,
    "metadata": {},
    "name": "cartItemRemoveQuery",
    "operationKind": "mutation",
    "text": "mutation cartItemRemoveQuery(\n  $productId: ID!\n) {\n  removeCartItem(productId: $productId) {\n    _id\n    total\n    status\n    quantity\n    products {\n      _id\n      price\n      quantity\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '18ac3ca59dd7c106cf2015ec49f5b99b';

module.exports = node;
