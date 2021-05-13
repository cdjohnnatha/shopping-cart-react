import React, { ChangeEvent, useMemo } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import CreditCard from '@material-ui/icons/CreditCard';

interface selectItemInterface {
  value: string,
  label: string,
}
interface selectCreditCardProps {
  values: Array<selectItemInterface>,
  selected: string,
  onChange: (event: React.ChangeEvent<{ value: unknown }>) => void,
}

export const SelectCreditCard = ({ values, selected, onChange }: selectCreditCardProps): JSX.Element => {
  const menuItems = values.map(({ value, label }, index) => (
    <MenuItem key={`SelectCreditCard-${index}`} value={value}>
      <ListItemIcon>
        <CreditCard />
      </ListItemIcon>
      <ListItemText primary={label} />
    </MenuItem>
  ))

  return (
    <Select
      onChange={onChange}
      fullWidth
      value={selected}
    >
      {menuItems}
    </Select>
  )
}
