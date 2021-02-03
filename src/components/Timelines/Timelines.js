import React from "react";
import { TwitterTweetEmbed, TwitterTimelineEmbed } from "react-twitter-embed";


function Home() {
  return (
      <div className="content-strip">
        <div className="container">
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="thelogansia"
            options={{ height: 700 }}
          />
      </div>
    </div>
  );
}

export default Home;
