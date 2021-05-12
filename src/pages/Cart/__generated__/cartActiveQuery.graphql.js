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
      +_id: string,
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
      _id
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
  "name": "_id",
  "storageKey": null
},
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
    "args": null,
    "concreteType": "CartType",
    "kind": "LinkedField",
    "name": "activeCart",
    "plural": false,
    "selections": [
      (v0/*: any*/),
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
          (v0/*: any*/),
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
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "cartActiveQuery",
    "selections": (v2/*: any*/),
    "type": "query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "cartActiveQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "f6fa5aa92469cadf27beb9be7fd8527f",
    "id": null,
    "metadata": {},
    "name": "cartActiveQuery",
    "operationKind": "query",
    "text": "query cartActiveQuery {\n  activeCart {\n    _id\n    total\n    status\n    quantity\n    products {\n      _id\n      price\n      quantity\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c8ab96302d5bc4efcaccd2db2770fd52';

module.exports = node;
