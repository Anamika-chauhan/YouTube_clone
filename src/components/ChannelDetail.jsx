import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Box } from '@mui/material';

import { Videos, ChannelCard } from './';
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { SettingsInputSvideoSharp } from "@mui/icons-material";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([])

  const {id} =useParams();

  console.log(channelDetail, videos);

  useEffect(() => {
    fetchFromAPI(`channels?part="snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]));

   fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data?.items));
  }, [id])

  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
          background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,2,32,1) 36%, rgba(11,3,31,1) 36%, rgba(11,3,31,1) 36%, rgba(27,11,47,1) 47%, rgba(12,42,70,1) 61%, rgba(8,106,140,1) 100%, rgba(10,74,105,1) 100%, rgba(0,212,255,1) 100%)',
          zTndex: 10,
          height: '300px'
        }} />
        <ChannelCard channelDetail={channelDetail} marginTop="-110px"/>
      </Box>

      <Box display="flex" p="2">
        <Box sx={{ mr: {sm: '100px' }}}/>
          <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail