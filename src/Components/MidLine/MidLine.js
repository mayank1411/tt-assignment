import React from 'react'

const MidLine = () => {
  return (
    <div>
      <button style={{position:'relative',padding:'20px',color:'#4290f5',background:'white',border:'0.25px solid grey',top:'3px',zIndex:'1',borderBottom: 'none',fontWeight:'bold'}}>134 Posts</button>
     <div style={{display:'flex',justifyContent:'start',position:'absolute',height:'0.5px',width:'100%',border:'1px solid #bbc1c9'}}></div> 
    </div>
  )
}

export default MidLine