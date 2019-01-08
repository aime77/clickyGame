import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com/",
    headers: {
        Authorization:
          "Client-ID e5d71c70ddc4f01872fae30c59223265277eb8f827a18396885a90b593db519d"
      }
});