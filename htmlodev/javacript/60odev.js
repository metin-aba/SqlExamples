import axios from 'axios';

const getData = async (userId) => {
  try {
    const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const postsResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);

    const user = userResponse.data;
    const posts = postsResponse.data;

    const mergedData = {
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
      address: user.address,
      phone: user.phone,
      website: user.website,
      company: user.company,
      posts: posts,
    };

    return mergedData;
  } catch (error) {
    console.log(error);
  }
};

(async () => {
  const userId = 1;
  const result = await getData(userId);
  console.log(result);
})();
