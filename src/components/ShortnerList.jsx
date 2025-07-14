import { Box, Typography } from "@mui/material";

const ShortnerList = ({ data }) => {
  if (data.length === 0) return null;

  return (
    <Box mt={4}>
      <Typography variant="h6">Shortened URLs</Typography>
      {data.map((item, idx) => (
        <Box key={idx} mt={1}>
          <Typography>
            <strong>Short:</strong> http://localhost:3000/{item.shortcode}
          </Typography>
          <Typography>
            <strong>Original:</strong> {item.longUrl}
          </Typography>
          {item.expiresAt && (
            <Typography>
              <strong>Expires At:</strong> {item.expiresAt.toLocaleString()}
            </Typography>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default ShortnerList;
