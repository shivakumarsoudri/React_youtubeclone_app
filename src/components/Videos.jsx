import React from "react";
import { Stack, Box } from "@mui/material";

import { ChannelCard, Loader, VideoCard } from "./";

const Videos = ({ videos, direction }) => {
  if(!videos?.length) return <Loader />;
  
  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" alignitems="start" gap={2}>
      {videos.map((shiva) => (
        //to identify items uniqukly in array we use key property
        <Box key = {shiva.idx}>
          {shiva.id.videoId && <VideoCard video={shiva} /> }
          {shiva.id.channelId && <ChannelCard channelDetail={shiva} />}
        </Box>
      ))}
    </Stack>
  );
}

export default Videos;
