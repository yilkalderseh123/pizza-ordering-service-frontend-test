import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const PizzaMenu = ({ pizzas }) => {
  return (
    <div>
      {pizzas.map((pizza) => (
        <Card key={pizza.id} sx={{ marginBottom: 2 }}>
          <CardContent>
            <Typography variant="h5">{pizza.name}</Typography>
            <Typography variant="body2">
              Toppings: {pizza.toppings.map((topping) => topping.name).join(', ')}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PizzaMenu;
