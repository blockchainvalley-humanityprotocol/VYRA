'use client';
import styled from 'styled-components';

const VideoContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
`;

const Video = styled.video`
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    transform: translate(-50%, -50%);
    object-fit: cover;
    z-index: 0;
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
`;

const VideoBackground = () => {
    return (
        <VideoContainer>
            <Video
                autoPlay
                muted
                loop
                playsInline
            >
                <source src="/herovrya.mp4" type="video/mp4" />
            </Video>
            <Overlay />
        </VideoContainer>
    );
};

export default VideoBackground; 