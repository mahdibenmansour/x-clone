import Post from "./Post.jsx"
export default function Following(){
    return(
        <div id="folloing" className="flex flex-col  ">

            <Post
            fullname="Dear Self."
            username="@Dearme2_"
            time="23h"
            profilepic="https://pbs.twimg.com/profile_images/1863136130268360705/3dkACUpC_400x400.jpg"
            likes={503}
            retweets={404}
            views="1k"
            comments={30}
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
            retweets={50}
            views="1k"
            comments="30"
            verified={true}
            ><p>meme</p>
            <img className="rounded-xl" src="https://scontent.ftun2-2.fna.fbcdn.net/v/t39.30808-6/470193453_549297274601324_1131013522110841112_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=5Avv7zXWU28Q7kNvgECN3fp&_nc_zt=23&_nc_ht=scontent.ftun2-2.fna&_nc_gid=A-kNtop3Vh-IaGU5vNGlraX&oh=00_AYAGanp9yxpQGWogdR5TJ1zj1NTTwBCD9qOsrOx_Nx3ihg&oe=6763D3DE" alt="dear"/>
            </Post>
            <Post
            fullname="Dear Self."
            username="@Dearme2_"
            time="23h"
            profilepic="https://pbs.twimg.com/profile_images/1863136130268360705/3dkACUpC_400x400.jpg"
            likes={200}
            retweets={5}
            views="1k"
            comments="30"
            verified={false}
            >
            <p>new elden ring? lets go</p>
            <img className="rounded-xl" src="https://scontent.ftun2-2.fna.fbcdn.net/v/t39.30808-6/470069515_1126046338887522_770869288046702444_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=w9jkL9QERI8Q7kNvgE04kn4&_nc_zt=23&_nc_ht=scontent.ftun2-2.fna&_nc_gid=AEoUjYuCiLyQH9Cao6E2aOU&oh=00_AYAHLeXV8IIAAExuR8v4CKgW7RuVtyj0kodWT-upaAJH-g&oe=6763C3EE" alt="dear"/>
            </Post>
          </div>
    )
}