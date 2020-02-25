import React, {useEffect, useState} from 'react';
import { Icon } from 'semantic-ui-react';
import '../../styles/index.css';
import AvatarTimeline from "./AvatarTimeline";

const Video = React.forwardRef((props, ref) => {
    const [ duration, setDuration ] = useState('00:00');
    const [ highlight, changeHighlight ] = useState([]);

    const progressUpdate = () => {
        var time = Math.trunc(ref.current.currentTime);
       // time = changeTimeFormat(time);
        props.setTimePassed(time);
        // Устанавливаем позицию воспроизведения
        let positionBar = document.getElementById("durationBar");
        positionBar.style.width = (ref.current.currentTime / ref.current.duration * 100) + "%";
    }

    const changeDuration = (e, data) => {
        const video = document.getElementsByTagName('video')[0];
        document.getElementsByClassName('video-container')[0].innerHTML = '';
        document.getElementsByClassName('video-container')[0].append(video);
        if(data && data.highlight) {
            data.highlight.map(e => highlightArea(e));
            props.pausePlayer();
        }
        let len = e.pageX - document.getElementsByClassName('barContainer')[0].offsetLeft;
        let difference = (len/ document.getElementsByClassName('barContainer')[0].offsetWidth);
        ref.current.currentTime = difference * ref.current.duration;
    }

    const changeTimeFormat = (seconds) => {
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

    console.log(highlight)
    const highlightArea = (e) => {
        changeHighlight([...highlight, {pageX: e.pageX, pageY: e.pageY}])
        let left = e.pageX - document.getElementsByClassName('barContainer')[0].offsetLeft;
        let bottom = document.getElementsByClassName('barContainer')[0].offsetTop - e.pageY;
        if(bottom / document.getElementsByClassName('video-container')[0].offsetHeight * 100 < 10) {
            return
        }
        left -= 50;
        bottom -= 50;

        left = left / document.getElementsByClassName('video-container')[0].offsetWidth * 100;
        bottom = bottom / document.getElementsByClassName('video-container')[0].offsetHeight * 100;

        let area = document.createElement('div');
        area.className = 'highlightArea';
        area.style.width = '20%';
        area.style.height = '20%';
        area.style.marginLeft = left + '%';
        area.style.bottom = bottom + '%';
        document.getElementsByClassName('video-container')[0].append(area);
    }
    console.log(props.timePassed)

    return(
        <div className='video-wrapper'>
            <div className='player'>
                <div className='video-container'>
                    <video onClick={(e) => highlightArea(e)} ref={ref} onTimeUpdate={progressUpdate} onCanPlay={(e) => {setDuration(e.target.duration)}}>
                        <source src='./video/test.mp4' type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'/>
                    </video>
                </div>
                <div className='barContainer' onClick={(e) => changeDuration(e)}>
                    <div id="durationBar"></div>
                </div>
                <div className='timeline'>
                    {props.comments[0] &&
                     props.comments.map(e => <AvatarTimeline
                         changeDuration={changeDuration}
                         duration={duration}
                         data={e}
                     />)}
                </div>
                <div className='player_control_panel'>
                    <Icon className='icon' name={props.player} size='large' onClick={props.changePlayer}/>
                    <div className='time'>{changeTimeFormat(props.timePassed)} / {changeTimeFormat(duration)}</div>
                </div>
            </div>
        </div>
    )
})

export default Video;