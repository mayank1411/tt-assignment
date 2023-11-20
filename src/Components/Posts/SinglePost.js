import React from 'react'

const SinglePost = ({post}) => {
  return (
    <div style={{borderBottom:'1px solid #dadee3',marginTop:'60px'}}>
    <div style={{display:'flex',justifyContent:'space-around'}} >
      <h2>{post.heading}</h2>
      <p>👍</p>
    </div>
      <pre style={{display:'flex',justifyContent:'flex-start',fontWeight:'500',fontSize:'18px',marginLeft:'70px'}}>{post.text}</pre>
      <div style={{display:'flex',justifyContent:'space-around'}}>
            <p style={{color:'#bbc1c9'}}><span style={{color:'#4290f5'}}>thoughts </span>{'by '+post.author}</p>
            <div style={{display:'flex',marginRight:'5px',color:'#bbc1c9'}}>
                  <p style={{marginRight:'3px'}}>{post.date}</p>
                  <p style={{marginRight:'3px'}}>{post.time}</p>
                  <p style={{marginRight:'3px'}}>{post.views}<span>Views</span></p>
            </div>
      </div>
    </div>
  )
}

export default SinglePost