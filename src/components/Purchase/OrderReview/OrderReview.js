import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import { Chip } from "@mui/material";

export default function OrderReview({ singleProduct }) {
  const products = [
    {
      name: "By",
      desc: singleProduct?.manufacturer,
      price: singleProduct?.price,
    },
  ];

  return (
    <React.Fragment>
      {singleProduct?.isLimited && (
        <Chip label="Limited Edition" color="warning" sx={{ mr: "auto" }} />
      )}
      <Typography variant="h4" gutterBottom sx={{ fontWeight: "800" }}>
        {singleProduct?.title}
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText
              primary={product.name}
              secondary={product.desc}
              sx={{ color: "red" }}
            />
            <Typography variant="body2">
              Brand: {singleProduct.brand}
            </Typography>
          </ListItem>
        ))}

        <ListItem
          sx={{
            py: 1,
            px: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h4"
            color="primary"
            sx={{ fontWeight: 700, mr: "10px" }}
          >
            $ {singleProduct?.price}
          </Typography>
          <ListItemText
            primary={
              <Chip
                label="In Stock"
                color="success"
                sx={{ mr: "auto", ml: 2 }}
              />
            }
            sx={{ color: "red", fontSize: "22px" }}
          />

          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            Free Shipping
          </Typography>
        </ListItem>
        <ListItem
          sx={{
            py: 1,
            px: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ListItemText
            secondary={
              <Typography
                variant="caption"
                sx={{ fontWeight: 700, textAlign: "left" }}
              >
                Only 25 left in Stock Order now!
              </Typography>
            }
            sx={{ color: "red", fontSize: "22px" }}
          />
        </ListItem>
      </List>
    </React.Fragment>
  );
}
