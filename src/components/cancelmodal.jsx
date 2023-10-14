import React from 'react';

function CancelModal({ closeCancelRegModal, showCancelRegConfirmModal }) {

  function handleSubmit(event) {
    event.preventDefault();

    // CALL REG API

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
