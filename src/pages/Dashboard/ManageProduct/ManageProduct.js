import { Delete, DeleteForever, Image } from "@mui/icons-material";
import {
  Avatar,
  Chip,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import { Box } from "@mui/system";
import Paper from "@mui/material/Paper";
import React from "react";
import PageHeader from "../../../components/PageHeader/PageHeader";
import useProducts from "../../../hooks/useProducts";
import Swal from "sweetalert2";

const ManageProduct = () => {
  const { productsAll, setProductsAll } = useProducts();

  const handleDelete = (id) => {
    console.log("clicked", id);

    //handle delete order

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
        fetch(`http://localhost:5000/products/${id}`, { method: "DELETE" })
          .then((res) => res.json())
          .then((result) => {
            console.log("______", result);
            const remaining = productsAll.filter((order) => order._id !== id);

            if (result.deletedCount) {
              setProductsAll(remaining);
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
    <div>
      <TableContainer component={Paper}>
        <PageHeader
          title="Manage Product"
          subTitle="Delete"
          icon={
            <Avatar sx={{ bgcolor: red[500], color: "#ff4" }} variant="rounded">
              <DeleteForever fontSize="large" />
            </Avatar>
          }
        />
        <Divider />
        <Table
          sx={{ width: "100%", overflow: "auto" }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell align="left">Index&nbsp;No.</TableCell>
              <TableCell align="center">Product&nbsp;Info</TableCell>
              <TableCell align="left">Made&nbsp;By</TableCell>

              <TableCell align="left">Price</TableCell>
              <TableCell align="left">Action&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productsAll.map((row, index) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{index + 1}.</TableCell>

                <TableCell align="center">
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar
                        variant="rounded"
                        src={row.image}
                        sx={{ width: 56, height: 56, mr: 2 }}
                      >
                        <Image />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={`${row.title} by ${
                        row.brand ? row.brand : "unknown brand"
                      }`}
                      secondary={`Product Id: ${row._id}`}
                      primaryTypographyProps={{
                        fontSize: 14,
                        fontWeight: "bold",
                        letterSpacing: 0,
                      }}
                    />
                  </ListItem>
                </TableCell>

                <TableCell align="left">
                  <Typography variant="subtitle2" color="info.light">
                    {row.manufacturer}&nbsp;
                  </Typography>
                </TableCell>

                <TableCell align="left">{row.price} $</TableCell>

                <TableCell align="left">
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      p: 0,
                    }}
                  >
                    <Tooltip
                      title="Delete product"
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
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ManageProduct;
