import Post from "./Post.jsx";
import NewPost from "./newpost.jsx";
export default function Feed({ posts, setPosts }) {
  return (
    <div id="feed" className="flex flex-col  ">
      <NewPost setPosts={setPosts} />
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
