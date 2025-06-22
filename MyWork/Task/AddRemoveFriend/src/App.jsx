import React from 'react'
import Cards from './components/Cards'

const App = () => {
  const arr = [
    {
      bg:"#ff5a07",
      profilePicture:"https://i.pinimg.com/736x/ed/57/d0/ed57d0de049867c155d8b90d079ceb4f.jpg",
      dialog:"Oh, my gosh, I'm so sorry!  I can get ahead of myself.",
      name:"Anxiety",
    },
    {
      bg:"#226FB4",
      profilePicture:"https://i.pinimg.com/236x/0f/5d/95/0f5d952bb325f71227f02eb27c293bcb.jpg"
      ,name:"Sadness",  
      dialog: "Crying helps me slow down and obsess over the weight of life's problems"  
    },
    {
      bg:"#AA0704",
      profilePicture:"https://i.pinimg.com/736x/92/07/52/92075231ccb6efb21748b2e7f2d9cdbd.jpg",
      dialog:"Ever since that puberty alarm went off, nothing around here works the way it's supposed to do.",
      name:"Anger",
    },
    {
      bg:"#814aac",
      profilePicture:"https://i.pinimg.com/474x/1f/a6/fc/1fa6fc53ee7496a406a31595406e417f.jpg",
      dialog:"All right! We did not die today, I call that an unqualified success.",
      name:"Fear",
    },
    {
      bg:"#F082A5",
      profilePicture:"https://i.pinimg.com/736x/59/de/11/59de110b6dfa4584408999e5e64e9ced.jpg",
      dialog:"And she's got us! Ooh, yeah, right?... 'Cause she's.. ha-ha.. maybe...?",
      name:"embarrassment",
    },
    {
      bg:"#3F7EAD",
      profilePicture:"https://i.pinimg.com/236x/3c/c8/39/3cc83950983a3e2511519a00735ae0b3.jpg",
      dialog:"Of course I'm delusional! Do you know how hard it is to stay positive all the time? When all you folks do is complain, complain, complain!",
      name:"Joy",
    },


  ]
 
  return (
    <div className='flex h-screen bg-[#fff3e2]  p-2 gap-4 flex-wrap items-center justify-center'>
      {
        arr.map(function(elem){
          return <Cards object = {elem}/>
        })
      }
    </div>
  )
}

export default App