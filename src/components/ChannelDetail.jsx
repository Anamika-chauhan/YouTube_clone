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

  console.log(channelDetail)

  useEffect(() => {
    fetchFromAPI(`channels?part="snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]));

   fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data?.items));
  }, [id])

  return (
    <div>ChannelDetail</div>
  )
}

export default ChannelDetail