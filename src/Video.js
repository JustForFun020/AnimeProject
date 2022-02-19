import tiktok_video from './store//tiktok_video.mp4'
import {forwardRef ,useImperativeHandle, useRef} from 'react'

function Video (props, ref) {
    const videoRef = useRef()

    useImperativeHandle(ref, () => ({
        play(){
            videoRef.current.play()
        },
        pause() {
            videoRef.current.pause()
        }
    }))

    return (
        <video
        ref={videoRef}
        src={tiktok_video}
        width={280}
        height={500}
        />
    )
}

export default forwardRef(Video)