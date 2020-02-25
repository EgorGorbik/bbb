import React from 'react';
import Comment from "../Comment";

function Comments(props) {
    return (
        <div className='comments'>
            {props.comments.map(e => <Comment rewindVideo={props.rewindVideo} data={e}/>)}
        </div>
    )
}

export default Comments;
