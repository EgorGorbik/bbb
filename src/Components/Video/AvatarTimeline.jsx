import React, {createRef, useEffect} from 'react';

function AvatarTimeline(props) {
    let ava = createRef();

    useEffect(() => {
        let distance = props.data.timeStamp / props.duration * 100;
        ava.current.style.marginLeft = `${distance}%`;
    }, [props.duration])

    return (
        <img
            className='avatarTimeline'
            id={props.data.name}
            src={`./img/${props.data.name}.jpg`}
            onClick={(e) => props.changeDuration(e, props.data)}
            ref={ava}
        />
    )
}

export default AvatarTimeline;