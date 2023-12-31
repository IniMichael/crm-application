import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CancelModal({ closeCancelRegModal, showCancelRegConfirmModal, listId, regLists, setRegLists}) {
  const [id, setId] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData) {
      setId(userData.data.id);
      setToken(userData.token);
      console.log('Received listId:', listId, regLists)
    }
  }, []);


  function handleSubmit(event) {
    event.preventDefault();
    
   const cancel ={
    isCancelled:true,
   }

   
   axios
   .patch(`https://crm-ai.onrender.com/api/v1/registrations/${listId}`, cancel, {
     headers: {
       Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
        const newRegLists = regLists.filter(item => item.id != listId)
        console.log("Event deleted successfully:", response.data);
        setRegLists(newRegLists)
        
        onEventDeleted(event._id);
        closeDeleteModal();
      })
      .catch((error) => {
        console.error("Error deleting event:", error);
      });

    showCancelRegConfirmModal();
    closeCancelRegModal();
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
    <div className="fixed inset-0 bg-black opacity-60"></div>
    <div className="fixed z-10 w-[451px] h-[175px] bg-white rounded-xl py-5 px-7">
      <div className="text-2xl font-semibold mb-4 flex">
      <p className=" flex justify-center mr-4 mb-6">Are you sure you want to cancel?</p>
        <button
          className="hover:text-red-700 text-[#667080] mb-6"
          onClick={closeCancelRegModal}
        >
          x
        </button>
      </div>

        <form onSubmit={handleSubmit} className='flex justify-center gap-5'>
          <button type='submit' className='text-black border-2 border-[#1E1E1E] bg-white w-[140px] h-[40px] rounded-lg text-xl mb-2'>
              Yes, Cancel
          </button>
          
            <button onClick={closeCancelRegModal} className='text-white bg-black w-[170px] h-[40px] rounded-lg text-xl mb-2'>
              No, Don't Cancel
            </button>
        </form>
    </div>
  </div>
  );
}

export default CancelModal;
