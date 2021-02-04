import React from "react";
import { TwitterTweetEmbed, TwitterTimelineEmbed } from "react-twitter-embed";

function Home() {
  return (
    <div className="content-strip">
      <div className="container">
        <div key="timelines">
          <TwitterTimelineEmbed
            key="timelines"
            sourceType="profile"
            screenName="thelogansia"
            options={{ height: 700 }}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
