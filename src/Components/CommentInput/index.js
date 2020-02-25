import React, {useEffect, useState} from 'react';

function CommentInput(props) {
    const [ comment, changeComment ] = useState('');
    const [ buttonStyle, changeButtonStyle ] = useState('disable');

    useEffect(() => {
        if(comment) {
            changeButtonStyle('able')
        } else {
            changeButtonStyle('disable')
        }
    }, [comment])

    const addComment = () => {
        props.addComment({
            name: 'me',
            comment: comment,
            timeStamp: "40"
        })
    }

    return (
        <div className='commentInput-wrapper'>
            <div className='input-wrapper'>
                <input value={comment} onChange={(e) => {changeComment(e.target.value); props.player === 'pause' && props.changePlayer()}} placeholder='Leave your comment here...'/>
                <button className={'send_comment ' + buttonStyle} onClick={addComment}>
                    Send
                </button>
            </div>
        </div>
    )
}

export default CommentInput;