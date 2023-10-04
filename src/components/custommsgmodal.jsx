import React from 'react';

function CustomMsgModal({ closeModal }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
    <div className="fixed inset-0 bg-black opacity-60"></div>
    <div className="fixed z-10 w-[557px] h-[332px] bg-white rounded-xl py-5 px-7">
      <div className="text-2xl flex justify-between font-semibold mb-7">
      <p className="">Customize Your Message</p>
        <button
          className="hover:text-red-700 text-[#667080]"
          onClick={closeModal}
        >
          x
        </button>
      </div>

      <div>
        <form action="">
            <textarea placeholder='Hello there, we are pleased to...' name="" id="" className='border border-gray-950 rounded-lg w-[450px] h-[150px] 
            pl-3 text-[#020202] mb-4'>               
            </textarea>
        </form>
        <div>
            <button className='text-white bg-black w-[140px] h-[40px] rounded-lg text-xl mb-2'>
              Add Message
            </button>
            </div>
        </div>
    </div>
  </div>
  );
}

export default CustomMsgModal;
