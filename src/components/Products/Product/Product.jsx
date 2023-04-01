import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography } from '@material-ui/core';

import {Button} from '@material-ui/core';

import useStyles from './styles';

const Product = ({ product }) => {
  const classes = useStyles();

 

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={product.image.url} title={product.name} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
          ₹{product.price.formatted}
          </Typography>
        </div>
        <Typography  dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" component="p" />
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        
        <Button  href={product.thank_you_url} target='blank' variant="outlined" color="secondary">
        BUY NOW
        </Button>
      </CardActions>
    </Card>
  );
};

export default Product;

