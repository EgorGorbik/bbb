import React from 'react';
import changeTimeFormat from '../../shared/changeTimeFormat';
import { Icon } from 'semantic-ui-react';

function Comment(props) {
    return(
        <div className='comment'>
            <div className='comment_header'>
                <img className='avatar' src={`./img/${props.data.name}.jpg`}/>
                <div className='commentator_name'>{props.data.name}</div>
            </div>
            <div
                onClick={() => {props.rewindVideo(props.data.timeStamp)}}
                className='time_stamp'>
                {changeTimeFormat(props.data.timeStamp)}
                {
                    props.data.highlight && <Icon className='icon' name='paint brush' size='small' />
                }
            </div>
            <div className='comment_text'>{props.data.comment}</div>
        </div>
    )
}

export default Comment;