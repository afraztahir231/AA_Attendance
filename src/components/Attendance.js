import React from 'react'
import { useReactMediaRecorder } from 'react-media-recorder';
import './Attendance.css'

const Attendance = () => {
  const {startRecording, stopRecording, mediaBlobUrl} = useReactMediaRecorder({video:true});

  const handleSend = async () => {
    stopRecording()
    if (!mediaBlobUrl) return;
    const blob = await fetch(mediaBlobUrl)
    const mediaBlob = await blob.blob()

    const formData = new FormData();
    formData.append('video', mediaBlob);
    console.log(mediaBlob)
    try {
      const response = await fetch('http://127.0.0.1:8000/record', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      const result = await response.json();
      console.log('Success:', result);
    } catch (error) {
      console.error('Error:', error);
    }
 };

  return (
    <div>
      <button className='start' onClick = {startRecording}>Start Recording</button>
      <button className='stop' onClick = {handleSend}>Stop Recording</button>
      <video className='video' src = {mediaBlobUrl} autoPlay controls></video>
      <div className='status'></div>
      <p className='status-text'>Status</p>
    </div>
  )
}

export default Attendance
