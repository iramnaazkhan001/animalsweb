import React from 'react'
 
function Video() {
  return (
    <div>
<video  width={320} height={240} controls>
    <source src='import.mp4' type='video/mp4'/>
    <source src='import.mp4' type='video/mp4'/>
</video>
    </div>
  )
}

export default Video
{/* <video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
  Your browser does not support the video tag.
</video> */}