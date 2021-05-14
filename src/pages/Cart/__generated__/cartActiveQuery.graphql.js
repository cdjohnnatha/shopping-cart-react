/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CartStatusEnumType = "ACTIVE" | "INACTIVE" | "%future added value";
export type cartActiveQueryVariables = {||};
export type cartActiveQueryResponse = {|
  +activeCart: ?{|
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
export type cartActiveQuery = {|
  variables: cartActiveQueryVariables,
  response: cartActiveQueryResponse,
|};
*/


/*
query cartActiveQuery {
  activeCart {
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
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "quantity",
  "storageKey": null
},
v1 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "CartType",
    "kind": "LinkedField",
    "name": "activeCart",
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
      (v0/*: any*/),
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
          (v0/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "cartActiveQuery",
    "selections": (v1/*: any*/),
    "type": "query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "cartActiveQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "693776668f4a069de8231dce824c41bf",
    "id": null,
    "metadata": {},
    "name": "cartActiveQuery",
    "operationKind": "query",
    "text": "query cartActiveQuery {\n  activeCart {\n    _id\n    total\n    status\n    quantity\n    products {\n      productId\n      price\n      quantity\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4f50a41e2376f09b23f170e75caeca22';

module.exports = node;
