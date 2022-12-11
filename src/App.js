import logo from "./logo.svg";
import "./App.css";
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
