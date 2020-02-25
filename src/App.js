import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Video from "./Components/Video";
import './styles/index.css';
import CommentInput from "./Components/CommentInput";
import Comments from "./Components/Comments";

function App() {
    const [ comments, changeComments ] = useState([]);
    const [ player, setPlayer ] = useState('play');
    const [ timePassed, setTimePassed ] = useState('00:00');

    const video = React.createRef();

    const rewindVideo = (time) => {
        let rez = time / video.current.duration * 100;
        console.log(rez)
        video.current.currentTime = rez * video.current.duration / 100;
    }

    useEffect(() => {
        fetch('./api/index.json')
            .then(response => response.json())
            .then(data => changeComments(data))
    }, [])

    const addComment = (myComment) => {
        myComment.timeStamp = timePassed;
        changeComments([...comments, myComment])
    }

    let pausePlayer = () => {
        setPlayer('play');
        video.current.pause();
    }

    let changePlayer = () => {
        console.log(video.current.duration)
        console.log(video.current.currentTime)
        switch (player) {
            case 'play':
                setPlayer('pause');
                video.current.play();
                break;
            case 'pause':
                setPlayer('play');
                video.current.pause();
                break;
        }
    }

    return (
        <div className='main'>
            <div className='main_content'>
                <Video timePassed={timePassed} setTimePassed={setTimePassed} ref={video} comments={comments} player={player} changePlayer={changePlayer} pausePlayer={pausePlayer}/>
                <CommentInput player={player} changePlayer={changePlayer} addComment={addComment}/>
            </div>
            <Comments rewindVideo={rewindVideo} comments={comments}/>
        </div>
    );
}

export default App;
