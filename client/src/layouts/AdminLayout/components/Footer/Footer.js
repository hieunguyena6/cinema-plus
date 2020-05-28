import React from 'react';
import { Divider, Typography } from '@material-ui/core';
import useStyles from './styles';

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Divider />
      <Typography className={classes.copyright} variant="body1">
        &copy; Hiếu Nguyễn - Nhóm 15. 2020
      </Typography>
      <Typography variant="caption">
        OODA thầy Hạnh | INT3110 8
      </Typography>
    </div>
  );
}
