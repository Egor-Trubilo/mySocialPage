import React from "react";
import p from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = (props) => {



    let postElement = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount}/>)

    return (
        <div>
            <h2 className={p.postsBlock}>
                My posts
            </h2>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
                <div>
                    <button>Delete post</button>
                </div>

            </div>
            <div className={p.posts}>
                {postElement}
            </div>

        </div>

    )
}

export default MyPosts;