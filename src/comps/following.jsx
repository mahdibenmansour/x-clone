import Post from "./Post.jsx";
export default function Following({ posts }) {
  return (
    <div id="following" className="flex flex-col  ">
      {posts.map((post) => (
        <Post key={post.id} data={post}>
          {post.description && <p>{post.description}</p>}
          {post.image && (
            <img
              className="rounded-xl"
              src={post.image.link}
              alt={post.image.alt}
            />
          )}
        </Post>
      ))}
    </div>
  );
}
