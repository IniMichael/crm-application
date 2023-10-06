import React from 'react';
import checkMark from '../components/assets/checkmark.png';

function CreateEventSuccessModal({ closeModal }) {

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
    <div className="fixed inset-0 bg-black opacity-60"></div>
    <div className="fixed z-10 w-[484px] h-[478px] bg-white rounded-xl py-5 px-7">
      <div className="text-right text-2xl font-semibold mb-7">
        <button
          className="hover:text-red-700 text-[#667080]"
          onClick={closeModal}
        >
          x
        </button>
      </div>

      <div>
      <p className="text-3xl font-semibold flex justify-center">Event Creation Successful</p>
                <img src={checkMark} alt='My Image' className='h-[170px] w-[170px] mx-auto mt-12 mb-10'/> 
                <p className='mx-auto text-center w-[100%] text-xl font-normal'>HURRAY!! Your event PRODUCT LAUNCH has been created successfully.</p>
        </div>
    </div>
  </div>
  );
}

export default CreateEventSuccessModal;
