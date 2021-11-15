import { MonetizationOn } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { orange } from "@mui/material/colors";
import React from "react";
import PageHeader from "../../../components/PageHeader/PageHeader";

const Pay = () => {
  return (
    <div>
      <PageHeader
        title="Payment"
        subTitle="Feature Incoming Soon"
        icon={
          <Avatar
            sx={{ bgcolor: orange[500], color: "#f1f1f1" }}
            variant="rounded"
          >
            <MonetizationOn fontSize="large" />
          </Avatar>
        }
      />
    </div>
  );
};

export default Pay;
