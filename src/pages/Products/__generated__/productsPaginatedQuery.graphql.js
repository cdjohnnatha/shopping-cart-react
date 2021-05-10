/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ImageEnumType = "FULL" | "LIST" | "THUMBNAIL" | "%future added value";
export type productsPaginatedQueryVariables = {|
  rowsPerPage: number,
  currentPage: number,
|};
export type productsPaginatedQueryResponse = {|
  +productsPaginated: ?{|
    +products: ?$ReadOnlyArray<?{|
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
    |}>,
    +pagination: ?{|
      +totalPages: ?number,
      +totalValues: ?number,
      +rowsPerPage: ?number,
      +currentPage: ?number,
    |},
  |}
|};
export type productsPaginatedQuery = {|
  variables: productsPaginatedQueryVariables,
  response: productsPaginatedQueryResponse,
|};
*/


/*
query productsPaginatedQuery(
  $rowsPerPage: Int!
  $currentPage: Int!
) {
  productsPaginated(pagination: {rowsPerPage: $rowsPerPage, currentPage: $currentPage}) {
    products {
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
    pagination {
      totalPages
      totalValues
      rowsPerPage
      currentPage
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "currentPage"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "rowsPerPage"
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
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
            "name": "currentPage",
            "variableName": "currentPage"
          },
          {
            "kind": "Variable",
            "name": "rowsPerPage",
            "variableName": "rowsPerPage"
          }
        ],
        "kind": "ObjectValue",
        "name": "pagination"
      }
    ],
    "concreteType": "ProductsPaginated",
    "kind": "LinkedField",
    "name": "productsPaginated",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "ProductType",
        "kind": "LinkedField",
        "name": "products",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "_id",
            "storageKey": null
          },
          (v2/*: any*/),
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
              (v2/*: any*/)
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
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "PaginationType",
        "kind": "LinkedField",
        "name": "pagination",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "totalPages",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "totalValues",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "rowsPerPage",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "currentPage",
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "productsPaginatedQuery",
    "selections": (v3/*: any*/),
    "type": "query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "productsPaginatedQuery",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "befa7ce4548e12297f0c5cde23d290f5",
    "id": null,
    "metadata": {},
    "name": "productsPaginatedQuery",
    "operationKind": "query",
    "text": "query productsPaginatedQuery(\n  $rowsPerPage: Int!\n  $currentPage: Int!\n) {\n  productsPaginated(pagination: {rowsPerPage: $rowsPerPage, currentPage: $currentPage}) {\n    products {\n      _id\n      name\n      quantityAvailable\n      maxQuantityPerCustomer\n      category\n      description\n      price\n      currency {\n        label\n        name\n      }\n      images {\n        path\n        tags\n        size\n        type\n      }\n    }\n    pagination {\n      totalPages\n      totalValues\n      rowsPerPage\n      currentPage\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd02975aeb8832279fdfee69b4416cabc';

module.exports = node;
