import getData from "./index.js";

(async () => {
    const user = await getData(1);
    const post = await getData(1);
    console.log("user", user);
    console.log("post", post);
})();