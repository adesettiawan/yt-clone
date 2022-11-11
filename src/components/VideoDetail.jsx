import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import Videos from "./Videos";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import moment from "moment/moment";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);

  if (!videoDetail?.snippet) return "Loading...";

  const {
    snippet: { title, publishedAt, channelId, description, channelTitle },
    statistics: { viewCount, likeCount, commentCount },
  } = videoDetail;

  const goToChannelId = (id) => {
    navigate("/channel/" + id);
    window.location.reload();
  };

  return (
    <Box minHeight="95vh">
      <Stack direction={{ md: "row", sm: "column" }}>
        <Box flex={1}>
          <Box
            sx={{
              width: "100%",
              top: "86px",
              position: "sticky",
            }}
          >
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={4}>
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#fff" }}
              py={1}
              px={4}
            >
              <Link onClick={() => goToChannelId(channelId)}>
                <Typography
                  variant={{ sm: "subtitle1", md: "h6" }}
                  color="#fff"
                >
                  {channelTitle}
                  <CheckCircle
                    sx={{
                      fontSize: "12px",
                      color: "gray",
                      ml: "5px",
                    }}
                  />
                </Typography>
                <Stack direction="row" gap="20px">
                  <Typography
                    variant="subtitle2"
                    sx={{ opacity: 0.8 }}
                    color="#fff"
                    pt={2}
                  >
                    {parseInt(viewCount).toLocaleString()} Views
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ opacity: 0.8 }}
                    color="#fff"
                    pt={2}
                  >
                    {moment(publishedAt).format("DD MMM YYYY")}
                  </Typography>
                </Stack>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.8 }} color="#fff">
                  {parseInt(commentCount).toLocaleString()} Comments
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.8 }} color="#fff">
                  {parseInt(likeCount).toLocaleString()} Likes
                </Typography>
              </Stack>
            </Stack>
            <Stack>
              <Typography
                color="#fff"
                variant="caption"
                sx={{ opacity: 0.7 }}
                px={4}
                pt={-1}
              >
                {description}
              </Typography>
            </Stack>
          </Box>
        </Box>

        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
