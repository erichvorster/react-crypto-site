import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { green, red } from "@mui/material/colors";
import { Box } from "@mui/material";
import "./CryptoCard.css";
import { createTheme } from "@mui/material/styles";
import millify from "millify";

function CryptoCard({ crypto }) {
  return (
    <Card
      sx={{
        maxWidth: 400,
        minWidth: 270,
        transition: "transform 0.3s ease",
        "&:hover": {
          transform: "translateY(-10px)",
          boxShadow:
            "rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px",
        },
      }}
    >
      <CardHeader
        variant="h5"
        avatar={<Avatar src={crypto?.iconUrl}></Avatar>}
        title={crypto?.name}
      />
      <CardContent sx={{}}>
        <Typography variant="body2" color="text.secondary">
          Price: {millify(crypto.price)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Market Cap:{millify(crypto.marketCap)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Daily Change:{millify(crypto.change)}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CryptoCard;
