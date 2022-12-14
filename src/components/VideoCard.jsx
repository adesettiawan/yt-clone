import { Link, useNavigate } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import {
  demoChannelTitle,
  demoChannelUrl,
  demoVideoTitle,
  demoVideoUrl,
} from "../utils/constants";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  const navigate = useNavigate();

  const goToVideoId = (id) => {
    navigate("/video/" + id);
    window.location.reload();
  };

  const goToChannelId = (id) => {
    navigate("/channel/" + id);
    window.location.reload();
  };
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "358px", md: "265px" },
        borderRadius: 0,
        boxShadow: "none",
        mb: 2,
      }}
    >
      <Link onClick={() => (videoId ? goToVideoId(videoId) : demoVideoUrl)}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: { xs: "100%", sm: "358px", md: "265px" }, height: 180 }}
        ></CardMedia>
      </Link>
      <CardContent sx={{ background: "#1e1e1e", height: "106px" }}>
        <Link onClick={() => (videoId ? goToVideoId(videoId) : demoVideoUrl)}>
          <Typography variant="subtitle1" fontWeight="bold" color="#fff">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link
          onClick={() =>
            snippet?.channelId
              ? goToChannelId(snippet?.channelId)
              : demoChannelUrl
          }
        >
          <Typography variant="subtitle2" fontWeight="bold" color="gray" mt={1}>
            {snippet?.channelTitle.slice(0, 60) ||
              demoChannelTitle.slice(0, 60)}
            <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
