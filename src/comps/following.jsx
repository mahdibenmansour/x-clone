import Post from "./Post.jsx";
import NewPost from "./newpost.jsx";
export default function Following({ setPage, posts, setPosts, setReposts }) {
  return (
    <div id="following" className="flex flex-col h-screen ">
      <NewPost setReposts={setReposts} setPage={setPage} setPosts={setPosts} />
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
