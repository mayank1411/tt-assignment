import React from 'react'
import SinglePost from './SinglePost'

const Posts = () => {
      const postContent = [
            {
            heading : 'A Changing World Order',

            text : `The world is changing at a feverish pace. Friends,
colleagues and everyone engaged in knowledge
work are beginning this, including ...`,
            
            author : 'anujgosalia',
            
            date : 'August 2',
            
            time : '1min',

            views : '156' 

      },
      {
            heading : 'A Changing World Order',

            text : `The world is changing at a feverish pace. Friends,
colleagues and everyone engaged in knowledge
work are beginning this, including ...`,
            
            author : 'anujgosalia',
            
            date : 'January 21',
            
            time : '5min',

            views : '256'

      },
      {
            heading : 'Write To Built',

            text : `Writing is the first step to create:
            - stories
            - products
            - companies
            `,
            
            author : 'anujgosalia',
            
            date : 'November 18',
            
            time : '10min',

            views : '776'

      }
]
  return (
    <div>
            {
                  postContent.map((post)=>(
                        <SinglePost post={post}/>
                  ))
            }
    </div>
  )
}

export default Posts