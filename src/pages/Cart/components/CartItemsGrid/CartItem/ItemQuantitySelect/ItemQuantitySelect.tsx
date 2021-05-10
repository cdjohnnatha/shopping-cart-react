import React, { useContext } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { CartContext } from '../../../../context/CartContext';

interface itemQuantitySelectProps {
  maxQuantityPerCustomer: number;
  quantity: number;
  productId: string;
}

export const ItemQuantitySelect = ({
  // quantityAvailable,
  quantity,
  productId,
  maxQuantityPerCustomer,
}: itemQuantitySelectProps): JSX.Element => {
  // const totalQuantityAvailable = quantityAvailable + quantity;
  const itemsQuantity = new Array(maxQuantityPerCustomer).fill(0);
  const menuItems = itemsQuantity.map((_value, index) => {
    const menuItemValue = index+1;
    return (
      <MenuItem
        key={`item-${index}-${productId}`}
        value={menuItemValue}
      >
        {menuItemValue}
      </MenuItem>
    );
  });
  const selectId = `select-quantity-${productId}`;
  const { updateCartItemQuantity } = useContext(CartContext);

  const selectOnChangeHandler = (event: React.ChangeEvent<{ value: unknown }>, id: string) => {
    const updatedQuantity = (event.target.value as number);
    updateCartItemQuantity(id, updatedQuantity);
  }

  return (
    <FormControl>
      <InputLabel id={`${selectId}-label`}>Quantity</InputLabel>
      <Select
        labelId={`${selectId}-label`}
        id={selectId}
        value={quantity}
        onChange={event => selectOnChangeHandler(event, productId)}
      >
        {menuItems}
      </Select>
    </FormControl>
  )
}
