import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import NewsCard from "../components/NewsCard";
import "./News.css";

const News = ({ cryptoNews }) => {
  return (
    <Box
      sx={{
        backgroundColor: "var(--blue)",
        display: "flex",
        justifyContent: "center",
        paddingTop: 20,
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        {cryptoNews.map((article) => {
          return (
            <Grid item sx={4}>
              <NewsCard article={article} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default News;
