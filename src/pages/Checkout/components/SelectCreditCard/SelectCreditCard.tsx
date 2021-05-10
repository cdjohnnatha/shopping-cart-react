import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import CreditCard from '@material-ui/icons/CreditCard';

export const SelectCreditCard = (): JSX.Element => {
  return (
    <Select fullWidth defaultValue="XXXX-XXXX-XXXX-9988" >
      <MenuItem value="XXXX-XXXX-XXXX-9988">
        <ListItemIcon>
          <CreditCard />
        </ListItemIcon>
        <ListItemText primary="XXXX-XXXX-XXXX-XX88" />
      </MenuItem>
      <MenuItem value="9989">
        <ListItemIcon>
          <CreditCard />
        </ListItemIcon>
        <ListItemText primary="XX89" />
      </MenuItem>
    </Select>
  )
}
