import React, { useState } from 'react'

function Likebutton() {
    const [liked, setLiked] = useState(false)

  return (
    <div>
        <button onClick={()=> setLiked(!liked)}>
            {liked ? "❤️ Liked": "🤍 Like"}
        </button>

       
    </div>
  )
}

export default Likebutton