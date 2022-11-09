import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import Videos from "./Videos";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Box display="flex" p={2}>
        <Box sx={{ mr: { lg: "110px", md: "180px", sm: "70px" } }} />
        <Typography
          fontWeight="bold"
          variant="h4"
          mb={2}
          sx={{ color: "#fff" }}
        >
          Search Results :&nbsp;
          <span style={{ color: "#f31503" }}> {searchTerm} </span>Videos
        </Typography>
      </Box>

      <Box display="flex" p={2}>
        <Box sx={{ mr: { lg: "110px", md: "180px", sm: "70px" } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default SearchFeed;
