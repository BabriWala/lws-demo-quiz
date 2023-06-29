import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import classes from "../styles/Videos.module.css";
import Video from "./Video";
import useVideoList from "./hooks/useVideoList";

export default function Videos() {
  const [page, setPage] = useState(1);
  const { loading, error, videos, hasMore } = useVideoList(page);

  // console.log(videos)

  return (
    <>
      <div className={classes.videos}>
        {videos.length > 0 && (
          <InfiniteScroll
            dataLength={videos.length}
            hasMore={hasMore}
            loader={"Loading"}
            next={() => setPage(page + 8)}
          >
            {videos.map((video) =>
              video.noq > 0 ? (
                <Link to={`/quiz/${video.youtubeID}`} state={{videoTitle: video.title}} key={video.youtubeID}>
                  <Video
                    title={video.title}
                    key={video.youtubeID}
                    id={video.youtubeID}
                    noq={video.noq}
                  ></Video>
                </Link>
              ) : (
                <Video
                  title={video.title}
                  id={video.youtubeID}
                  key={video.youtubeID}
                  noq={video.noq}
                ></Video>
              )
            )}
          </InfiniteScroll>
        )}

        {!loading && videos.length === 0 && (
          <div className=""> No Data Found</div>
        )}
        {error && <div className="">There was an error!</div>}
        {loading && <div>Loading .....</div>}
      </div>
    </>
  );
}
