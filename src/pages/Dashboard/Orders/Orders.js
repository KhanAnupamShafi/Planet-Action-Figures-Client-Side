import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Avatar,
  Chip,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Tooltip,
  Typography,
} from "@mui/material";
import { Delete, Image, ShoppingCart } from "@mui/icons-material";
import useAuth from "../../../hooks/useAuth";
import { lightGreen, purple, yellow } from "@mui/material/colors";
import PageHeader from "../../../components/PageHeader/PageHeader";
import Swal from "sweetalert2";

export default function Orders() {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/orders/?email=${user?.email}`;

    fetch(url)
      .then((res) => res.json())
      .then((result) => setOrders(result));
  }, []);

  //handle delete order
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      iconColor: "#f33",
      background: "#f3f3f4",
      showCancelButton: true,
      confirmButtonColor: "#3084dd",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/orders/all/${id}`, { method: "DELETE" })
          .then((res) => res.json())
          .then((result) => {
            const remaining = orders.filter((order) => order._id !== id);

            if (result.deletedCount) {
              setOrders(remaining);
              Swal.fire(" Order has been deleted!", {
                icon: "success",
              });
            }
          });
      } else {
        Swal.fire("order deletion canceled");
      }
    });
  };

  return (
    <TableContainer component={Paper}>
      <PageHeader
        title="My Orders"
        subTitle={
          <Typography variant="h6" color="warning.light">
            Total Orders: {orders.length}
          </Typography>
        }
        icon={
          <Avatar
            sx={{ bgcolor: purple[500], color: "orange" }}
            variant="rounded"
          >
            <ShoppingCart fontSize="large" />
          </Avatar>
        }
      />

      <Divider />
      <Table sx={{ width: "100%", overflow: "auto" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Index&nbsp;</TableCell>
            <TableCell align="left">Product&nbsp;Name</TableCell>
            <TableCell align="center">Product&nbsp;Type</TableCell>
            <TableCell align="center">Brand</TableCell>
            <TableCell align="center">Shipping&nbsp;Address</TableCell>
            <TableCell align="center">Order&nbsp;Number</TableCell>
            <TableCell align="center">Price&nbsp;($)</TableCell>
            <TableCell align="center">Status&nbsp;</TableCell>
            <TableCell align="center">Cancel&nbsp;Order</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((row, index) => (
            <TableRow
              key={row._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">{index + 1}.</TableCell>
              <TableCell component="th" scope="row">
                <ListItem>
                  <ListItemAvatar>
                    <Avatar
                      src={row.product_image}
                      sx={{ width: 56, height: 56, mr: 1 }}
                    >
                      <Image />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={row.product_title}
                    secondary={`Productc Id: ${row.product_id}`}
                    primaryTypographyProps={{
                      fontSize: 16,
                      fontWeight: "bold",
                      letterSpacing: 0,
                    }}
                  />
                </ListItem>
              </TableCell>
              <TableCell align="center">
                <Typography variant="subtitle2" color="info.light">
                  {row.product_type}
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Chip label={row.product_brand} variant="outlined" />
              </TableCell>
              <TableCell align="center">{row.address}</TableCell>
              <TableCell align="center">{row._id} </TableCell>
              <TableCell align="center">{row.product_price} $</TableCell>
              <TableCell align="center">
                <Chip
                  label={row?.status}
                  size="small"
                  sx={
                    row?.status === "pending"
                      ? {
                          bgcolor: yellow[400],
                          color: "error.dark",
                          fontWeight: 500,
                        }
                      : {
                          bgcolor: lightGreen[400],
                          color: "info.dark",
                          fontWeight: 500,
                        }
                  }
                />
              </TableCell>
              <TableCell align="center">
                <Tooltip title="Cancel Order">
                  <Chip
                    icon={<Delete />}
                    label="Delete"
                    color="error"
                    onClick={() => handleDelete(row._id)}
                  />
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
