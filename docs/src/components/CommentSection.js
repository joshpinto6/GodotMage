import React from 'react';

export default function CommentSection(props) {
    if ((!(window.location.pathname == "/GodotMage/docs/blog"))) {
    return (
    <>    
      <h2 style={{marginTop:"30px"}}>Comments:</h2>

      <div class="giscus">

</div>    </>
  );
    }
    return (
<>
{/* <p>To view comments, open this post in fullscreen.</p> */}
</>
    
    )
}