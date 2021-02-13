import './index.css';

import React from 'react';
import {
  Card,
  CardContent,
  Typography,
} from '@material-ui/core';

function InfoBox({ isRed, isOrange, active, title, cases, total, ...props }) {
  return (
    <Card 
      className={`infoBox ${active && 'infoBox--selected'} ${isRed && 'infoBox--red'} ${isOrange && 'infoBox--orange'}`}
      onClick={props.onClick}
    >
      <CardContent>
        <Typography className="infoBox__title" color="textSecondary">{title}</Typography>
        <h2 className={`infoBox__cases ${isRed && 'infoBox__cases--red'} ${isOrange && 'infoBox__cases--orange'}`}>{cases}</h2>
        <Typography className="infoBox__total" color="textSecondary">
          {total} total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
