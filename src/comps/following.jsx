import Post from "./Post.jsx";
import NewPost from "./newpost.jsx";
export default function Following({ setPage, posts, setPosts }) {
  return (
    <div id="following" className="flex flex-col h-[100%] min-h-screen ">
      <NewPost posts={posts} setPage={setPage} setPosts={setPosts} />
      {posts
        .filter((post) => post.type === "all" || post.type == "following")
        .map((post) => (
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
