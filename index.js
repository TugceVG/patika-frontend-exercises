// import fetch from "node-fetch";
import axios from "axios";

export default async function getData(user_id) {
    return new Promise(async (resolve, reject) => {
        const { data: user } = await axios("https://jsonplaceholder.typicode.com/users/" + user_id);
        const { data: post } = await axios("https://jsonplaceholder.typicode.com/posts/" + user_id);
        resolve(user, post)
    });
};


// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then(data => console.log(data));

// async function getData() {
//     const users = await (await fetch("https://jsonplaceholder.typicode.com/users")).json();
//     console.log("users", users);

//     const post1 = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();
//     console.log("post1", post1);
// }
// getData();

// (async () => {
//     const { data: users } = await axios("https://jsonplaceholder.typicode.com/users");
//     const { data: post1 } = await axios("https://jsonplaceholder.typicode.com/posts/1");

//     console.log("users", users);
//     console.log("post1", post1);
// })();


