const Posts = ({ posts, loading }) => {
  console.log(loading);
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <ul
      style={{
        listStyle: "none",
        paddingLeft: "0",
        marginBottom: "1em",
      }}
    >
      {posts.map((post) => (
        <li
          key={post.id}
          style={{
            border: "1px solid #000",
            padding: ".7em 2em",
            margin: ".5em",
          }}
        >
          {post.title}
        </li>
      ))}
    </ul>
  );
};

export default Posts;
