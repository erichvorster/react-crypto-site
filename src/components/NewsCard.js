import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { Box } from "@mui/system";

function NewsCard({ article, width, height, color, text }) {
  return (
    <Card
      sx={{
        maxWidth: width,
        height: height,
        position: "relative",
        backgroundColor: color,
        color: text,
      }}
    >
      <Avatar sx={{ marginLeft: 2, marginTop: 2 }}>
        <Box
          component="img"
          sx={{ height: 50, width: 50 }}
          src={article?.image?.thumbnail?.contentUrl}
        ></Box>
      </Avatar>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {article?.name}
        </Typography>
        <Typography sx={{ color: text }} variant="body2" color="text.secondary">
          {article?.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ position: "absolute", bottom: 1, left: 1 }}>
        <Button size="small" href={article?.url}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default NewsCard;
