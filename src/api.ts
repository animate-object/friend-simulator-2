import _ from "lodash";
import { friendUrls } from "./assets/friend";
import { Friend } from "./types";

const randomFriend = (): Friend.Friend =>
  Friend.create({
    image: { url: _.sample(friendUrls) || "" },
  });

const api = {
  getFriend: randomFriend,
};

export default api;
