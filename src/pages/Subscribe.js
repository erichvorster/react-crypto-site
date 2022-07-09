import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import chat from "../Assets/chat.svg";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Subscribe = () => {
  return (
    <>
      <Box sx={{ pt: 10 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} sx={{ height: "100%" }}>
            <Box
              sx={{
                maxWidth: 400,
                margin: "0 auto",
                marginTop: { xs: 8, sm: 10, md: 10, lg: 12 },
                paddingLeft: 2,
                paddingRight: 2,
                paddingBottom: 7,
              }}
            >
              <Typography
                variant="h4"
                sx={{ fontWeight: 600, paddingBottom: 2 }}
              >
                Subscribe to get all the updates as they happen
              </Typography>
              <Typography
                variant="body1"
                sx={{ paddingBottom: 5, color: "var(--lightBlue)" }}
              >
                We send out daily updates on market changes as well as price
                changes
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  paddingBottom: 2,
                }}
              >
                <TextField
                  id="outlined-basic"
                  label="Full name"
                  variant="outlined"
                  sx={{ paddingBottom: 2 }}
                />
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  sx={{ paddingBottom: 2 }}
                />
                <Button variant="contained" sx={{ padding: 2 }}>
                  Subscribe
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              backgroundColor: "var(--darkBlue)",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              sx={{
                maxHeight: { xs: 400, md: 450 },
                maxWidth: { xs: 400, md: 450 },
                marginTop: { xs: 8, sm: 8, md: 15, lg: 12 },
                marginLeft: { md: 8 },
                mb: { xs: 10, sm: 20 },
                mr: { md: 8 },
                px: { xs: 2 },
                display: "flex",
                justifyContent: "center",
              }}
              alt="The house from the offer."
              src={chat}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Subscribe;
