import Post from "./Post.jsx"
import NewPost from "./newpost.jsx"
export default function Feed(){
    return(
        <div id="feed" className="flex flex-col  ">
            <NewPost/>

            <Post
            fullname="Dear Self."
            username="@Dearme2_"
            time="23h"
            profilepic="https://pbs.twimg.com/profile_images/1863136130268360705/3dkACUpC_400x400.jpg"
            likes={500}
            retweets="50"
            views="1k"
            comments="30"
            verified={true}
            >
            <p>this is a test</p>
            </Post>
            <Post
            fullname="mahdi"
            username="@Dearme69"
            time="23h"
            profilepic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFdOlgFXvlHaVni4jFIK1QKteSBJfKzX0s_Q&s"
            likes={300}
            retweets="50"
            views="1k"
            comments="30"
            verified={true}
            >
            <img className="rounded-xl" src="https://preview.redd.it/fluxing-random-superheros-with-schnell-higher-resolution-v0-8brghkytuoid1.png?width=640&crop=smart&auto=webp&s=93f0d767a27bb1722c9e15227a8ec21a70593740" alt="dear"/>
            </Post>
            <Post
            fullname="Dear Self."
            username="@Dearme2_"
            time="23h"
            profilepic="https://pbs.twimg.com/profile_images/1863136130268360705/3dkACUpC_400x400.jpg"
            likes={400}
            retweets="50"
            views="1k"
            comments="30"
            verified={false}
            >
            <p>Dear Self,</p>
            <img className="rounded-xl" src="https://pbs.twimg.com/media/GdpRPvwWMAAzXHK?format=jpg&name=small" alt="dear"/>
            </Post>
          </div>
    )
}