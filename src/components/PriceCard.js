import React from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";

const PriceCard = ({ crypto }) => {
  console.log(crypto);
  return (
    <Card
      sx={{
        maxWidth: 300,
        minWidth: 200,
        transition: "transform 0.3s ease",
        "&:hover": {
          transform: "translateY(-10px)",
          boxShadow:
            "rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px",
        },
      }}
    >
      <CardHeader
        avatar={<Avatar src={crypto?.iconUrl}></Avatar>}
        title={crypto?.name}
      />
      <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="body1" color="text.secondary">
          Price: {(Math.round(crypto.price * 100) / 100).toFixed(2)}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Change: {crypto.change}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PriceCard;
