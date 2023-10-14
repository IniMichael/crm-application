import React from 'react';

function CreateEventFormModal({ closeCreateEventModal, showCreateEventConfirmModal }) {

  function handleSubmit(event) {
    event.preventDefault();

    // CALL REG API

    showCreateEventConfirmModal();
    closeCreateEventModal();
  }

  return (
    <div className="create fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-60"></div>
      <div className="fixed w-[507px] h-[700px] bg-white rounded-xl py-5 px-7">
        <div className="flex justify-between text-2xl font-semibold mb-5">
          <p className="">Create Your Event</p>
          <button
            className="hover:text-red-700 text-[#667080]"
            onClick={closeCreateEventModal}
          >
            x
          </button>
        </div>

        <div>
        <form onSubmit={handleSubmit} className='flex flex-col justify-center'>
            <div className='flex flex-col text-lg'>
            <label htmlFor="RegName">Title/Name of the Event</label>
            <input type="text" className='border border-[#7E7E7E] rounded-lg w-[450px] h-[40px] pl-3 mb-2' placeholder='Product Launch' required/>
            </div>

            <div className='flex flex-col text-lg'>
            <label htmlFor="RegEmail">Enter Date of the Event</label>
            <input type="text" className='border border-[#7E7E7E] rounded-lg w-[450px] h-[40px] pl-3 mb-2' placeholder='mm/dd/yy' required/>
            </div>

            <div className='flex flex-col text-lg relative'>
            <label htmlFor="RegPassword">Enter Time of the Event</label>
            <input type="text" className='border border-gray-950 rounded-lg w-[450px] h-[40px] pl-3 text-[#020202] mb-2' placeholder="2PM - 6PM" required/>
            </div>

            <div className='flex flex-col text-lg relative'>
            <label htmlFor="RegPassword">Location</label>
            <input type="text" className='border border-gray-950 rounded-lg w-[450px] h-[40px] pl-3 text-[#020202] mb-2' placeholder="Ubuntu Workspace" required/>
            </div>

            <div className='flex flex-col text-lg relative'>
            <label htmlFor="RegPassword">Add All Necessary Details About the Event</label>
            <textarea name="" id="" cols="30" rows="10" className='border border-gray-950 rounded-lg w-[450px] h-[50px] pl-3 text-[#020202] mb-2'></textarea>
            </div>

            <div className='text-lg flex gap-3 items-center mb-1'><input type="checkbox" className='h-5 w-5'/><p>Add customized follow-up messages</p></div>
            <div className='text-lg flex gap-3 items-center mb-4'><input type="checkbox" className='h-5 w-5'/><p>Add event to calendar</p></div>

            <div>
            <button type='submit' className='text-white bg-black w-[140px] h-[40px] rounded-lg text-xl mb-2'>
              Create Event
            </button>
            
            </div>
          </form>
          </div>
      </div>
    </div>
  );
}

export default CreateEventFormModal;
