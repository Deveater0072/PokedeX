import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
const Home = () => {
  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Pokemon Name" variant="filled" />
      </Box>
      <Stack spacing={2}>
        <Pagination count={2} shape="rounded" />
      </Stack>
    </>
  );
};



export default Home;

