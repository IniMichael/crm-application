import React from "react";

function RegFormModal({ closeFormModal, showRegisterConfirmModal }) {

  function handleSubmit(event) {
    event.preventDefault();
    
    // CALL REG API
    
    showRegisterConfirmModal();
    closeFormModal();
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-60"></div>
      <div className="fixed z-10 w-[505px] h-[600px] bg-white rounded-xl py-5 px-7">
        <div className="flex justify-between text-2xl font-semibold mb-7">
          <p className="">Register Here</p>
          <button
            onClick={closeFormModal}
            className="hover:text-red-700 text-[#667080]"
          >
            x
          </button>
        </div>

        <div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center"
          >
            <div className="flex flex-col text-lg">
              <label htmlFor="RegName">Name</label>
              <input
                type="text"
                className="border border-[#7E7E7E] rounded-xl w-[450px] h-[56px] pl-3 mb-2"
                placeholder="Milly"
                required
              />
            </div>

            <div className="flex flex-col text-lg">
              <label htmlFor="RegEmail">Email Address</label>
              <input
                type="email"
                className="border border-[#7E7E7E] rounded-xl w-[450px] h-[56px] pl-3 mb-2"
                placeholder="Milly@gmail.com"
                required
              />
            </div>

            <div className="flex flex-col text-lg relative">
              <label htmlFor="RegPassword">Phone Number</label>
              <input
                type="tel"
                className="border border-gray-950 rounded-xl w-[450px] h-[56px] opacity-50 pl-3 text-[#020202] mb-2"
                placeholder="+234"
                required
              />
            </div>

            <div className="text-lg flex gap-3 items-center mb-1">
              <input type="checkbox" className="h-5 w-5" />
              <p>Subscribe to automated follow-up messages</p>
            </div>
            <div className="text-lg flex gap-3 items-center mb-8">
              <input type="checkbox" className="h-5 w-5" />
              <p>Add event to calendar</p>
            </div>

            <div>
              <button type="submit" className="text-white bg-black w-[120px] h-[56px] rounded-xl text-xl mb-2">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegFormModal;
