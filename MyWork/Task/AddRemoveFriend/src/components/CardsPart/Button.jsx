import React, { useEffect, useState } from 'react'

const Button = () => {
  const [isFriend, setIsFriend] = useState(false);
  const [buttonLabel, setButtonLabel] = useState("Add");

  const addFriend = async()=>{
   if(!isFriend){ //is sending will run when adding friend

    setButtonLabel("sending...");
    await new Promise(resolve => setTimeout(resolve,2000)); //jab tak ye code complete nhi hoga tab tak aage ka code nhi chalega
    
   }
  //  setisFriend(!isFriend); start using the downward statement instead of this
   setIsFriend(prevState => !prevState); 
  }

   useEffect(function(){
       setButtonLabel(isFriend ? "Remove" : "Add");
  },[isFriend])
 
  return (
    <>
      <button onClick={addFriend}  className='shadow-lg bg-white text-[#5a4a9e] font-bold text-2xl py-1 w-full rounded-2xl mt-3'>{buttonLabel}</button>
    </>
  )
}

export default Button



// import React, { useEffect, useState } from 'react';

// const Button = () => {
//   const [isFriend, setIsFriend] = useState(false); // Tracks friend status
//   const [buttonLabel, setButtonLabel] = useState("Add"); // Tracks button label
//   const [isSending, setIsSending] = useState(false); // Tracks "sending..." state

//   const addFriend = async () => {
//     if (!isFriend) {  // Only show "sending..." when adding a friend
//       setIsSending(true); // Set to "sending..." state
//       setButtonLabel("sending...");
//       await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate delay

//       setIsFriend(prevState => !prevState); // Toggle isFriend state
//       setIsSending(false); // End "sending..." state
//     } else {
//       // When removing friend, just toggle without "sending..."
//       setIsFriend(prevState => !prevState);
//     }
//   };

//   useEffect(() => {
//     if (!isSending) {
//       setButtonLabel(isFriend ? "Remove" : "Add"); // Update label based on isFriend
//     }
//   }, [isFriend, isSending]);

//   return (
//     <button
//       onClick={addFriend}
//       className="shadow-md bg-white text-[#5a4a9e] font-bold text-2xl py-1 w-full rounded-2xl mt-3"
//       disabled={isSending} // Disable button during "sending..."
//     >
//       {buttonLabel}
//     </button>
//   );
// };

// export default Button;
