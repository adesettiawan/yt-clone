import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";

import { demoProfilePicture } from "../utils/constants";

const ChannelCard = ({ channelDetail, marginTop }) => {
  const navigate = useNavigate();

  const goToChannelId = (id) => {
    navigate("/channel/" + id);
    window.location.reload();
  };

  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { md: "265px", xs: "100%" },
        height: "320px",
        margin: "auto",
        marginTop,
      }}
    >
      <Link onClick={() => goToChannelId(channelDetail?.id?.channelId)}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <CardMedia
            image={
              channelDetail?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt={channelDetail?.snippet?.title}
            sx={{
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              mb: 2,
              border: "1px solid #e3e3e3",
            }}
          >
            <Typography variant="subtitle2" pt="190px">
              {channelDetail?.snippet?.title}
              <CheckCircle
                sx={{ fontSize: "14px", color: "gray", ml: "5px" }}
              />
            </Typography>
            {channelDetail?.statistics?.subscriberCount && (
              <Typography>
                {parseInt(
                  channelDetail?.statistics?.subscriberCount
                ).toLocaleString()}{" "}
                Subscribers
              </Typography>
            )}
          </CardMedia>
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
