/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ImageEnumType = "FULL" | "LIST" | "THUMBNAIL" | "%future added value";
export type productsFilterQueryVariables = {|
  idList: $ReadOnlyArray<?string>
|};
export type productsFilterQueryResponse = {|
  +productsFilter: ?$ReadOnlyArray<?{|
    +_id: ?string,
    +name: string,
    +quantityAvailable: number,
    +maxQuantityPerCustomer: number,
    +category: string,
    +description: string,
    +price: number,
    +currency: {|
      +label: string,
      +name: string,
    |},
    +images: $ReadOnlyArray<?{|
      +path: ?string,
      +tags: ?string,
      +size: ?string,
      +type: ?ImageEnumType,
    |}>,
  |}>
|};
export type productsFilterQuery = {|
  variables: productsFilterQueryVariables,
  response: productsFilterQueryResponse,
|};
*/


/*
query productsFilterQuery(
  $idList: [ID]!
) {
  productsFilter(filters: {idList: $idList}) {
    _id
    name
    quantityAvailable
    maxQuantityPerCustomer
    category
    description
    price
    currency {
      label
      name
    }
    images {
      path
      tags
      size
      type
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "idList"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
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
            "name": "idList",
            "variableName": "idList"
          }
        ],
        "kind": "ObjectValue",
        "name": "filters"
      }
    ],
    "concreteType": "ProductType",
    "kind": "LinkedField",
    "name": "productsFilter",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "_id",
        "storageKey": null
      },
      (v1/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "quantityAvailable",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "maxQuantityPerCustomer",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "category",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "description",
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
        "concreteType": "CurrencyType",
        "kind": "LinkedField",
        "name": "currency",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "label",
            "storageKey": null
          },
          (v1/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "ImageType",
        "kind": "LinkedField",
        "name": "images",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "path",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "tags",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "size",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "type",
            "storageKey": null
          }
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
    "name": "productsFilterQuery",
    "selections": (v2/*: any*/),
    "type": "query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "productsFilterQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "79a20679ba1fe622106d6afa15ce4ac9",
    "id": null,
    "metadata": {},
    "name": "productsFilterQuery",
    "operationKind": "query",
    "text": "query productsFilterQuery(\n  $idList: [ID]!\n) {\n  productsFilter(filters: {idList: $idList}) {\n    _id\n    name\n    quantityAvailable\n    maxQuantityPerCustomer\n    category\n    description\n    price\n    currency {\n      label\n      name\n    }\n    images {\n      path\n      tags\n      size\n      type\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '325b3cfeccba003548af4f1ee87a95f9';

module.exports = node;
