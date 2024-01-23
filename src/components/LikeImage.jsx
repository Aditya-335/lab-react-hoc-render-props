import React from 'react';
import CommonProps from './Render Props/CommonProps';

export default function LikeImage(){
  return(
    <CommonProps>
      {/* {This is a children} */}
      {

        (
          
          {like, handleLike}
        )=>(
          <button onClick={handleLike}>Like <Image>like</Image></button>
        )

      }
    </CommonProps>
  )
}