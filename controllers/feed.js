export const getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        title: 'First Post',
        content: 'This is the first post!',
      },
    ],
  });
};
