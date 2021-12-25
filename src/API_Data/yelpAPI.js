import axios from "axios";

export default axios.create({
  headers: {
    Authorization:
      "Bearer pXgT03ZPP8XFU-itlboT_-tjmrtue6Ieg_ZmLPM0Dn7K-IqOFadN498V0x1IL-HicmcSabht1lK8cNR7CKhj7RLgJV2ZIhKpVyJ6NtPxBwiyaWHCu9VBNPlB1A2dYXYx",
  },
  baseURL: "https://api.yelp.com/v3/businesses/",
});
