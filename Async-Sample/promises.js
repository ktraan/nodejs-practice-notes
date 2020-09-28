const posts = [
  { title: 'Post 1', body: 'This is post 1' },
  { title: 'Post 2', body: 'This is post 2' },
];

function getPosts() {
  setTimeout(() => {
    let output = '';
    posts.forEach((posts, index) => {
      output += `<li>${posts.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPosts(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject('Error: Something went wrong');
      }
    }, 2000);
  });
}

// createPosts({ title: 'Post Three', body: 'This is post 3' })
//   .then(getPosts)
//   .catch((err) => console.log(err));

// Async / Await
// Await waits for an asyncronus action
// async function init() {
//   await createPosts({ title: 'Post Three', body: 'This is post 3' });

//   getPosts();
// }

// init();

// Async/Await/Fetch
async function fetchUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');

  const data = await res.json();

  console.log(data);
}

fetchUsers();

// Promise.All

// const promise1 = Promise.resolve('Hello World');
// const promsie2 = 10;
// const promise3 = new Promise((resolve, reject) =>
//   setTimeout(resolve, 200, 'Goodbye')
// );

// const promise4 = fetch(
//   'https://jsonplaceholder.typicode.com/users'
// ).then((response) => response.json());

// Promise.all([promise1, promsie2, promise3, promise4]).then((values) =>
//   console.log(values)
// );
