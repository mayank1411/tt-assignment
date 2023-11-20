import React from 'react'

const Stats = () => {
      const statistics = [
            {
                  symbol : '👍',
                  value : 12
            },
            
            {
                  symbol : '⭐',
                  value : 222
            },
            
            {
                  symbol : '👁️',
                  value : '56K'
            },
            
            {
                  symbol : '💓',
                  value : '34K'
            }
      ]
  return (
    <div style={{display:'flex',justifyContent:'center',marginRight:'700px'}}>
         {
            statistics.map((it)=>(
                  <div  style={{display:'flex',flexDirection:'row', margin:'10px'}}>
                  <p>{it.symbol}</p>
                  <p>{it.value}</p>
                  </div> 
            ))
         }   
    </div>
  )
}

export default Stats