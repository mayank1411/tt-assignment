import React from 'react'
import Stats from './Stats'

const ProfileDetails = () => {
  return (
<div style={{display:'flex',flexDirection:'column'}}>
    <div style={{position:'absolute',top:'60vh',display:'flex',justifyContent:'space-between'}}>
            <img style={{border:'1px solid black',borderRadius:'100px',margin:'30px',marginLeft:'150px'}} src='https://static.vecteezy.com/system/resources/thumbnails/020/765/399/small/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg' alt=''/>
            <div style={{marginRight:'500px'}}>
                  <div style={{display:'flex',alignItems:'center',justifyContent:'center',marginRight:'50px',marginTop:'80px',marginLeft:'80px'}}>
                  <h3>Anuj Gosalia</h3>
                  </div>
                  <div style={{color:'grey',display:'flex',alignItems:'center',justifyContent:'center',marginRight:'55px',marginLeft:'80px'}}>
                  <div style={{margin:'20px'}}>
                        <div style={{border:'2px solid grey',height:'30px',width:'80px',textAlign:'center',alignItems:'center',borderRadius:'10px',fontWeight:'bold'}}>4546</div>
                        <label>Followers</label>
                  </div>
                  <div>
                        <div style={{border:'2px solid grey',height:'30px',width:'80px',textAlign:'center',alignItems:'center',borderRadius:'10px',fontWeight:'bold'}}>455</div>
                        <label>Following</label>
                  </div>
                  </div>
            </div>
    </div>
            <div style={{marginTop:'180px',marginLeft:'250px'}}>
                        <p>Co-founder & CEO at Terribly Tiny Tales</p>
                        <a href='https://www.instagram.com/anujgosalia' style={{textDecoration:'none'}}>https://www.instagram.com/anujgosalia</a>
            <Stats/>  
            </div>

</div>
  )
}

export default ProfileDetails