import logo from "./logo.svg";
import "./App.css";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";

import { useEffect, useState } from "react";
// import { LoadingButton } from "@mui/material";

function App() {
  const [submitting, setSubmitting] = useState(false);
  useEffect(() => {
    const id = setTimeout(() => {
      setSubmitting(false);
    }, 1000);
    return () => {
      clearTimeout(id);
    };
  }, []);
  return (
    <div className="App">
      <div
        style={{
          background: "#f7f7f7",

          width: "400px",

          height: "400px",

          borderRadius: "1rem",
          padding: "2rem",
        }}
      >
        <h3>shakil monsi mama</h3>
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          sx={{
            mb: 2,
          }}
        >
          Checkout
        </Button>

        <Avatar
          alt="Remy Sharp"
          src="https://thumbs.dreamstime.com/z/portrait-beautiful-hiding-girl-tangled-pictur-closeup-hair-green-sweater-young-sexy-woman-naked-shoulder-looking-60263671.jpg"
          style={{
            height: "80px",
            width: "80px",
          }}
        />
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 56, height: 56 }}
        />

        <Typography variant="h1" gutterBottom>
          h1. Heading
        </Typography>
        {/* <LoadingButton
          loading={submitting}
          variant="outlined"
          onClick={() => setSubmitting(true)}
        >
          Fetch data
        </LoadingButton> */}
      </div>
    </div>
  );
}

export default App;
