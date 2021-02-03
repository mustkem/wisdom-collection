import { TwitterTweetEmbed } from "react-twitter-embed";

import "./reset.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <div className="container">
          <div className="content">
            <div className="title">Wisdom</div>
          </div>
        </div>
      </header>
      <div className="content-strip">
        <div className="container">
        <div className="wisdonr-word-sec">
          <TwitterTweetEmbed tweetId={"1356822979125137411"} />
        </div>
        <div className="wisdonr-word-sec">
          <TwitterTweetEmbed tweetId={"1356505886596993027"} />
        </div>
        <div className="wisdonr-word-sec">
          <TwitterTweetEmbed tweetId={"1356551187240263680"} />
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
