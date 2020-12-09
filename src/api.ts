import _ from "lodash";
import { friendUrls } from "./assets/friend";
import { Friend } from "./types";

const ENDPOINT =
  "https://kbzg23mcr3.execute-api.us-east-1.amazonaws.com/dev/friend";

const apiFriend = (): Promise<Friend.Friend> =>
  fetch(ENDPOINT, {
    method: "get",
  })
    .then((res) => res.json())
    .then(({ thoughts, friend }) => {
      return Friend.create({
        name: friend.name,
        image: { url: _.sample(friendUrls) || "" },
        thoughts: thoughts,
      });
    });

const api = {
  getFriend: apiFriend,
};

export default api;
