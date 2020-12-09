import React, { useEffect, useState } from "react";
import "./App.css";
import cafeBar from "./assets/backgrounds/cafe-bar.jpg";
import Api from "./api";
import { Chat } from "./Chat";
import { Friend } from "./types";

function App() {
  const [friend, setFriend] = useState<Friend.Friend | undefined>(undefined);
  useEffect(() => {
    Api.getFriend().then((friend) => setFriend(friend));
  }, []);

  return !friend ? (
    <div>Loading . . . </div>
  ) : (
    <div className="fill-parent">
      <img src={cafeBar} className="fill-parent background" alt="local" />
      <div className="fill-parent background grid">
        <div className="content-bottom">
          <img src={friend.image.url} alt="friend-img" className="friend" />
          <div className="friend-summary">
            <span className="friend-name">{friend.name}</span>
          </div>
        </div>
        <Chat text={friend.thoughts.map(({ text }) => text)} />
      </div>
    </div>
  );
}

export default App;
