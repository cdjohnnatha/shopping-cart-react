import React, { useEffect, useState } from "react";
import Grid from '@material-ui/core/Grid';
import graphqlService from '../../services/graphqlService';
import { Products } from '../Products/ProductsGrid';
import { ProductInterface } from '../Products/ProductInterface';
import { params } from '../Products/__generated__/productsPaginatedQuery.graphql';
import { Pagination, paginationInitialState, PaginationInterface } from '../../layout/Pagination/Pagination';



interface ProductsPaginated {
  products?: [ProductInterface];
  pagination: PaginationInterface;
};

const productsPaginatedInitialState = {
  pagination: paginationInitialState
}

const RootView = (): JSX.Element => {
  const [productsPaginated, setProductsPaginated] = useState<ProductsPaginated>(productsPaginatedInitialState);

  const fetchProductsHandler = async (pagination: PaginationInterface) => {
    try {
      const variables = {
        rowsPerPage: pagination.rowsPerPage,
        currentPage: pagination.currentPage
      };
      const graphqlResponse = await graphqlService(params.text, variables);
      const { productsPaginated } = graphqlResponse.data;
      setProductsPaginated(productsPaginated);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProductsHandler(productsPaginated.pagination);
  }, []);

  const onChangePageHandler = (newPage: number) => {
    if (newPage <= productsPaginated.pagination.totalPages) {
      const updatedPagination = { ...productsPaginated.pagination, currentPage: newPage };
      fetchProductsHandler(updatedPagination);
    }
  }

  const onChangeRowsPerPageHandler = (rowsPerPage: string) => {
    const updatedPagination = { ...productsPaginated.pagination, rowsPerPage: parseInt(rowsPerPage, 10) };
    fetchProductsHandler(updatedPagination);
  }

  return (
    <article>
      <h1>Products available</h1>
      <Grid container spacing={2} justify="center">
        <Products productList={productsPaginated.products} />
        <Pagination
          paginationProps={productsPaginated.pagination}
          onChangePageHandler={onChangePageHandler}
          onChangeRowsPerPageHandler={({ target }) => onChangeRowsPerPageHandler(target.value)}
        />
      </Grid>
    </article>
  )
}

export default RootView;
