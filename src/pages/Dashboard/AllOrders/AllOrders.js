import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Swal from "sweetalert2";

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
import { Assignment, Delete, Image, ThumbUpAlt } from "@mui/icons-material";
import { green, lightGreen, yellow } from "@mui/material/colors";
import PageHeader from "../../../components/PageHeader/PageHeader";
import { Box } from "@mui/system";

export default function AllOrders() {
  const [orders, setOrders] = useState([]);

  //Get Orders

  useEffect(() => {
    const url = `https://murmuring-bayou-10657.herokuapp.com/orders/all`;

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
        fetch(`https://murmuring-bayou-10657.herokuapp.com/orders/all/${id}`, {
          method: "DELETE",
        })
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

  //handle update order

  const handleConfirm = (data) => {
    data.status = "shipped";
    Swal.fire({
      icon: "success",
      title: "Done...",
      text: "Order Successfully shipped..",
      footer: '<a href="/">Home</a>',
    }).then(() => {
      fetch("https://murmuring-bayou-10657.herokuapp.com/orders/all", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
          //alert

          if (result.modifiedCount) {
            const pending = orders.filter(
              (order) => order.status === "pending"
            );
            const shipped = orders.filter(
              (order) => order.status !== "pending"
            );
            console.log(pending, shipped);
            //alert
            setOrders(shipped.concat(pending));
          }
        });
    });
  };

  return (
    <TableContainer component={Paper}>
      <PageHeader
        title="Manage All Orders"
        subTitle={
          <Typography variant="h6" color="warning.light">
            Total Orders: {orders.length}
          </Typography>
        }
        icon={
          <Avatar sx={{ bgcolor: green[500] }} variant="rounded">
            <Assignment fontSize="large" />
          </Avatar>
        }
      />
      <Divider />
      <Table sx={{ width: "100%", overflow: "auto" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Index&nbsp;No.</TableCell>
            <TableCell align="left">Ordered&nbsp;By</TableCell>
            <TableCell align="center">Ordered&nbsp;Product</TableCell>
            <TableCell align="center">Ship&nbsp;To</TableCell>

            <TableCell align="center">Shipping&nbsp;Address</TableCell>

            <TableCell align="center">Amount&nbsp;(Total)</TableCell>
            <TableCell align="center">Status&nbsp;</TableCell>
            <TableCell align="center">Action&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((row, index) => (
            <TableRow
              key={row._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">{index + 1}.</TableCell>
              <TableCell align="left">
                <ListItem>
                  <ListItemText
                    primary={`${row.user_name}`}
                    secondary={`Email: ${row.email}`}
                    primaryTypographyProps={{
                      fontSize: 16,
                      fontWeight: "bold",
                      letterSpacing: 0,
                    }}
                  />
                </ListItem>
              </TableCell>
              <TableCell component="th" scope="row">
                <ListItem>
                  <ListItemAvatar>
                    <Avatar
                      src={row.product_image}
                      sx={{ width: 52, height: 52, mr: 1 }}
                    >
                      <Image />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={`${row.product_title} by ${
                      row.product_brand ? row.product_brand : "unknown brand"
                    }`}
                    secondary={`Product Id: ${row.product_id}`}
                    primaryTypographyProps={{
                      fontSize: 12,
                      fontWeight: "bold",
                      letterSpacing: 0,
                    }}
                  />
                </ListItem>
              </TableCell>

              <TableCell align="center">
                <Typography variant="subtitle2" color="info.light">
                  {row.firstName}&nbsp;{row.lastName}
                </Typography>
              </TableCell>
              <TableCell align="center">{row.address}</TableCell>
              <TableCell align="center">{row.product_price} $</TableCell>
              <TableCell align="center">
                <Chip
                  label={row?.status}
                  size="large"
                  sx={
                    row?.status === "pending"
                      ? {
                          bgcolor: yellow[300],
                          color: "error.dark",
                          fontWeight: 500,
                        }
                      : {
                          bgcolor: lightGreen[300],
                          color: "info.dark",
                          fontWeight: 500,
                        }
                  }
                />
              </TableCell>
              <TableCell align="center">
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    p: 0,
                  }}
                >
                  <Tooltip
                    title="Cancel Order"
                    sx={{
                      mr: 1,
                    }}
                  >
                    <Chip
                      icon={<Delete />}
                      label="Delete"
                      color="error"
                      onClick={() => {
                        handleDelete(row._id);
                      }}
                    />
                  </Tooltip>
                  <Tooltip title="Update Order status to 'Shipped'">
                    <Chip
                      icon={<ThumbUpAlt />}
                      label="Confirm?"
                      color="success"
                      onClick={() => handleConfirm(row)}
                    />
                  </Tooltip>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
