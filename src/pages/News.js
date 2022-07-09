import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import NewsCard from "../components/NewsCard";
import { autocompleteClasses, Typography } from "@mui/material";
import { Button, Container } from "@mui/material";
import "./News.css";

const News = ({ cryptoNews }) => {
  console.log(cryptoNews);
  return (
    <>
      <Box
        container
        sx={{
          backgroundColor: "var(--darkBlue)",
          color: "white",
          padding: 5,
          paddingTop: 10,
        }}
      >
        <Box sx={{ maxWidth: 400, margin: "0 auto" }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: 600, textAlign: "center" }}
          >
            Latest stories
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "var(--lightBlue)", textAlign: "center" }}
          >
            Keiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          </Typography>
        </Box>
        <Container>
          <Grid
            container
            sx={{
              paddingTop: 5,
              paddingLeft: { xs: 1 },
              paddingRight: { xs: 1 },
            }}
          >
            <Grid item xs={12} lg={3}>
              <Grid container>
                <Grid
                  item
                  xs={12}
                  md={6}
                  lg={12}
                  sx={{ border: "2px solid var(--blue)", padding: 2 }}
                >
                  <Typography variant="h6" sx={{ paddingBottom: 2 }}>
                    {cryptoNews[2]?.name}
                  </Typography>
                  <Typography variant="body2" sx={{ paddingBottom: 2 }}>
                    {cryptoNews[2]?.description}
                  </Typography>
                  <Typography>{cryptoNews[2]?.datePublished}</Typography>
                  <Box sx={{ paddingTop: 2 }}>
                    <Button size="small" href={cryptoNews[2]?.url}>
                      Learn More
                    </Button>
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}
                  lg={12}
                  sx={{ padding: 2, border: "2px solid var(--blue)" }}
                >
                  <Typography variant="h6" sx={{ paddingBottom: 2 }}>
                    {cryptoNews[1]?.name}
                  </Typography>
                  <Typography variant="body2">
                    {cryptoNews[1]?.description}
                  </Typography>
                  <Box sx={{ paddingTop: 2 }}>
                    <Button size="small" href={cryptoNews[1]?.url}>
                      Learn More
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              lg={4}
              sx={{ border: "2px solid var(--blue)", padding: 2 }}
            >
              <Box
                component="img"
                src={cryptoNews[0]?.image?.thumbnail?.contentUrl}
                sx={{
                  height: 150,
                  width: "100%",
                  objectFit: "cover",
                  paddingBottom: 2,
                }}
              ></Box>
              <Typography variant="h4" sx={{ paddingBottom: 2 }}>
                {cryptoNews[0]?.name}
              </Typography>
              <Typography variant="body2">
                {cryptoNews[0]?.description}
              </Typography>
              <Box sx={{ paddingTop: 2 }}>
                <Button size="small" href={cryptoNews[0]?.url}>
                  Learn More
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} lg={5}>
              <Grid container>
                <Grid
                  item
                  xs={12}
                  md={6}
                  sx={{ padding: 2, border: "2px solid var(--blue)" }}
                >
                  <Box
                    component="img"
                    src={cryptoNews[3]?.image?.thumbnail?.contentUrl}
                    sx={{
                      height: 120,
                      width: "100%",
                      objectFit: "cover",
                      paddingBottom: 2,
                    }}
                  ></Box>
                  <Typography variant="h6" sx={{ paddingBottom: 2 }}>
                    {cryptoNews[3]?.name}
                  </Typography>
                  <Typography variant="body2">
                    {cryptoNews[3]?.description}
                  </Typography>
                  <Box sx={{ paddingTop: 2 }}>
                    <Button size="small" href={cryptoNews[3]?.url}>
                      Learn More
                    </Button>
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}
                  sx={{ padding: 2, border: "2px solid var(--blue)" }}
                >
                  <Box
                    component="img"
                    src={cryptoNews[4]?.image?.thumbnail?.contentUrl}
                    sx={{
                      height: 120,
                      width: "100%",
                      objectFit: "cover",
                      paddingBottom: 2,
                    }}
                  ></Box>
                  <Typography variant="h6" sx={{ paddingBottom: 2 }}>
                    {cryptoNews[4]?.name}
                  </Typography>
                  <Typography variant="body2">
                    {cryptoNews[4]?.description}
                  </Typography>
                  <Box sx={{ paddingTop: 2 }}>
                    <Button size="small" href={cryptoNews[4]?.url}>
                      Learn More
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        sx={{
          backgroundColor: "var(--blue)",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: 10,
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ maxWidth: 400, margin: "0 auto" }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 600,
                textAlign: "center",
                color: "white",
                paddingBottom: 6,
              }}
            >
              Other Stories
            </Typography>
          </Box>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            sx={{ paddingBottom: 5 }}
          >
            {cryptoNews.map((article) => {
              return (
                <Grid item sx={4}>
                  <NewsCard
                    article={article}
                    width={400}
                    height={350}
                    color="var(--white)"
                  />
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default News;
