import React, { useEffect, useState } from "react";
import "./App.css";
import Videos from "./pages/Videos";
import db from "./config/firebase";
import { collection, getDocs } from "firebase/firestore/lite";

function App() {

  let maxHeight;
  if(window.innerHeight <= 800){
    maxHeight = window.innerHeight
  }
  const [video, setVideos] = useState([]);

  useEffect(() => {
    async function getVideos() {
      const videosColletion = collection(db, "videos");
      const videosSnaptshot = await getDocs(videosColletion);
      const videoList = videosSnaptshot.docs.map((doc) => doc.data());
      setVideos(videoList);
    }

    getVideos();
  }, []);

  return (
    <div className="App"style={{ maxHeight: maxHeight + "px" }}>
      <div className="app__videos">
        {video.map((item) => {
          return (
            <Videos
              likes={item.likes}
              messages={item.messages}
              shares={item.shares}
              name={item.name}
              description={item.description}
              music={item.music}
              url={item.url}
            />
          );
        })}
      </div>
    </div>
  );
}


 





export default App;
