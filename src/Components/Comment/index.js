import React from 'react';

function Comment(props) {
    const changeTimeFormat = (seconds) => {
        console.log(seconds)
        let minutes = Math.trunc(seconds / 60);
        seconds = Math.trunc(seconds % 60);
        if(minutes < 10) {
            minutes = '0' + minutes
        }
        if(seconds < 10) {
            seconds = '0' + seconds
        }
        return minutes + ':' + seconds;
    }

    return(
        <div className='comment'>
            <div className='comment_header'>
                <img className='avatar' src={`./img/${props.data.name}.jpg`}/>
                <div className='commentator_name'>{props.data.name}</div>
            </div>
            <div onClick={() => {props.rewindVideo(props.data.timeStamp)}} className='time_stamp'>{changeTimeFormat(props.data.timeStamp)}</div>
            <div className='comment_text'>{props.data.comment}</div>
        </div>
    )
}

export default Comment;