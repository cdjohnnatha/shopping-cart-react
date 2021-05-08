import React, { ChangeEvent, ReactElement } from 'react'
import Grid from '@material-ui/core/Grid';
import TablePagination from '@material-ui/core/TablePagination';

export interface PaginationInterface {
  totalPages: number,
  totalValues: number,
  rowsPerPage: number,
  currentPage: number,
};

export const paginationInitialState: PaginationInterface = {
  totalPages: 1,
  totalValues: 1,
  rowsPerPage: 10,
  currentPage: 0
};

interface PaginationProps {
  paginationProps: PaginationInterface;
  onChangePageHandler: (newPage: number) => void;
  onChangeRowsPerPageHandler: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

export const Pagination = ({ paginationProps, onChangePageHandler, onChangeRowsPerPageHandler  }: PaginationProps): ReactElement => {
  return (
    <Grid
      container
      alignItems="center"
      item
      xs={12}
      justify="center"
      style={{ marginTop: '1em', marginBottom: '2em' }}
    >
      <TablePagination
        component="div"
        count={paginationProps.totalPages}
        page={paginationProps.currentPage}
        onChangePage={(_event, newPage) => onChangePageHandler(newPage)}
        rowsPerPage={paginationProps.rowsPerPage}
        onChangeRowsPerPage={onChangeRowsPerPageHandler}
      />
    </Grid>
  )
}
