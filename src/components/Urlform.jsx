import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import ShortnerList from "./ShortnerList";
const Urlform = () => {
  const [urls, setUrls] = useState([
    { longUrl: "", expiry: "", shortcode: "" },
  ]);
  const [shortened, setShortened] = useState([]);

  const handleChange = (index, field, value) => {
    const updated = [...urls];
    updated[index][field] = value;
    setUrls(updated);
  };

  const addUrlField = () => {
    if (urls.length < 5) {
      setUrls([...urls, { longUrl: "", expiry: "", shortcode: "" }]);
    }
  };

  const shorten = () => {
    const results = urls.map((entry) => {
      const sc = entry.shortcode || Math.random().toString(36).slice(2, 7);
      return {
        ...entry,
        shortcode: sc,
        createdAt: new Date(),
        expiresAt: entry.expiry
          ? new Date(Date.now() + entry.expiry * 60000)
          : null,
        clicks: [],
      };
    });

    setShortened(results);
  };

  return (
    <Box p={3}>
      <Typography variant="h5" mb={2}>
        URL Shortener
      </Typography>

      {urls.map((entry, index) => (
        <Box key={index} display="flex" gap={2} mb={2}>
          <TextField
            fullWidth
            label="Long URL"
            value={entry.longUrl}
            onChange={(e) => handleChange(index, "longUrl", e.target.value)}
          />
          <TextField
            label="Expiry (min)"
            type="number"
            value={entry.expiry}
            onChange={(e) => handleChange(index, "expiry", e.target.value)}
          />
          <TextField
            label="Custom Shortcode"
            value={entry.shortcode}
            onChange={(e) => handleChange(index, "shortcode", e.target.value)}
          />
        </Box>
      ))}

      <Box display="flex" gap={3}>
        <Button variant="outlined" onClick={addUrlField}>
          Add more
        </Button>
        <Button variant="contained" onClick={shorten}>
          Shorten
        </Button>
      </Box>

      <ShortnerList data={shortened} />
    </Box>
  );
};

export default Urlform;
