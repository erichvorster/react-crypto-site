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

const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
  },
});

function CryptoCard({ crypto }) {
  return (
    <Card sx={{ maxWidth: 400, minWidth: 270 }}>
      <CardHeader
        avatar={<Avatar src={crypto?.iconUrl}></Avatar>}
        title={crypto?.name}
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Price: {(Math.round(crypto.price * 100) / 100).toFixed(2)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Market Cap:{crypto.marketCap}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Daily Change:{crypto.change}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CryptoCard;
