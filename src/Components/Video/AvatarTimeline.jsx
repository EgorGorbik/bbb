import React, {createRef, useEffect} from 'react';

function AvatarTimeline(props) {
    let ava = createRef();
    console.log(props.data.timeStamp)
    console.log(props.duration)

    useEffect(() => {
        console.log(props.data.timeStamp)
        console.log(document.getElementsByClassName('barContainer')[0].offsetWidth)
        console.log(props.duration)
        let rez = props.data.timeStamp / props.duration * 100;
        ava.current.style.marginLeft = `${rez}%`;
        console.log(rez)
    }, [props.duration])

    return (
        <img id={props.data.name} onClick={(e) => props.changeDuration(e, props.data)} ref={ava} className='avatarTimeline' src={`./img/${props.data.name}.jpg`}/>
    )
}

export default AvatarTimeline;