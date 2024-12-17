import Post from "./Post.jsx";
import NewPost from "./newpost.jsx";
export default function Feed({ setPage, posts, setPosts, setReposts }) {
  return (
    <div id="feed" className="flex flex-col  ">
      <NewPost setReposts={setReposts} setPage={setPage} setPosts={setPosts} />
      {posts.map((post) => (
        <div className="border-t border-gray-500">
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
        </div>
      ))}
    </div>
  );
}
