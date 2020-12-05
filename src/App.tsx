import React from "react";
import "./App.css";
import cafeBar from "./assets/backgrounds/cafe-bar.jpg";
import Api from "./api";
import { Chat } from "./Chat";
import Fake from "./fake";

function App() {
  const friend = Api.getFriend();

  return (
    <div className="fill-parent">
      <img src={cafeBar} className="fill-parent background" alt="local" />
      <div className="fill-parent background grid">
        <div className="content-bottom">
          <img src={friend.image.url} alt="friend-img" className="friend" />
          <div className="friend-summary">
            <span className="friend-name">Finbad Hortipants</span>
          </div>
        </div>
        <Chat text={Fake.TEXT} />
        {/* <div className="yellow" /> */}
      </div>
    </div>
  );
}

export default App;
