import React, { useState } from 'react';
import dashboardImg from '../components/assets/dashboard.png';
import myeventsImg from '../components/assets/myevents.png';
import registeredImg from '../components/assets/registered.png';
import analyticsImg from '../components/assets/analytics.png';
import setImg from '../components/assets/set.png';
import upcomingImg from '../components/assets/upcoming.png';
import RegFormModal from '../components/regformmodal';
import RegSuccessModal from '../components/regsuccessmodal';
import CreateEventFormModal from '../components/createeventformmodal';
import CustomMsgModal from '../components/custommsgmodal';
import CreateEventSuccessModal from '../components/createeventsuccmodal';
import CancelModal from '../components/cancelmodal';
import CancelledModal from '../components/cancelledmodal';

function NavBar() {
  const [isRegFormModalOpen, setIsRegFormModalOpen] = useState(false);
  const [isRegSuccessModalOpen, setIsRegSuccessModalOpen] = useState(false);
  const [isCreateEventModalOpen, setIsCreateEventModalOpen] = useState(false);
  const [isCustomMsgModalOpen, setIsCustomMsgModalOpen] = useState(false);
  const [isCreateEventSuccessModalOpen, setIsCreateEventSuccessModalOpen] = useState(false);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [isCancelledModalOpen, setIsCancelledModalOpen] = useState(false);
  const [isContentBlurred, setIsContentBlurred] = useState(false);

  const openRegFormModal = () => {
    setIsRegFormModalOpen(true);
    setIsContentBlurred(true);
  };

  const openRegSuccessModal = () => {
    setIsRegSuccessModalOpen(true);
    setIsContentBlurred(true);
  };

  const openCreateEventModal = () => {
    setIsCreateEventModalOpen(true);
    setIsContentBlurred(true);
  };

  const openCustomMsgModal = () => {
    setIsCustomMsgModalOpen(true);
    setIsContentBlurred(true);
  };

  const openCreateEventSuccessModal = () => {
    setIsCreateEventSuccessModalOpen(true);
    setIsContentBlurred(true);
  };

  const openCancelModal = () => {
    setIsCancelModalOpen(true);
    setIsContentBlurred(true);
  };

  const openCancelledModal = () => {
    setIsCancelledModalOpen(true);
    setIsContentBlurred(true);
  };

  const closeModal = () => {
    setIsRegFormModalOpen(false);
    setIsRegSuccessModalOpen(false);
    setIsCreateEventModalOpen(false);
    setIsCustomMsgModalOpen(false);
    setIsCreateEventSuccessModalOpen(false);
    setIsCancelModalOpen(false);
    setIsCancelledModalOpen(false);
  };

  return (
    <div className={`w-[100%] bg-slate-500 flex ${isContentBlurred ? 'blur-none' : ''}`}>
      <nav className='bg-black w-[212px] h-screen text-source-sans-3 font-medium text-md pt-10 mr-12'>
        <div>
          <p className='text-2xl font-normal mb-14 pl-5'>
            <span className='font-normal text-source-serif text-[#FFFFFF]'>Event</span>
            <span className='font-black text-source-serif text-[#669083]'>Buddy</span>
          </p>
        </div>
        <ul>
          <li className=''>
            <a
              href=""
              className='text-[#FFFFFF] flex items-center gap-2 w-[212px] pl-5 h-[56px] hover:bg-[#669083] active:bg-[#669083]'>
              <img src={dashboardImg} alt='My Image' className='h-5 w-6' />Dashboard
            </a>
          </li>
          <li className=''>
            <a
              href=""
              className='text-[#FFFFFF] flex items-center gap-2 w-[212px] pl-5 h-[56px] hover:bg-[#669083] active:bg-[#669083]'>
              <img src={upcomingImg} alt='My Image' className='h-5 w-6' />Upcoming Events
            </a>
          </li>
          <li className=''>
            <a
              href=""
              className='text-[#FFFFFF] flex items-center gap-2 w-[212px] pl-5 h-[56px] hover:bg-[#669083] active:bg-[#669083]'>
              <img src={registeredImg} alt='My Image' className='h-5 w-6' />Registered Events
            </a>
          </li>
          {/* ... other list items ... */}
          <li>
                <a href="" className='text-[#FFFFFF] flex items-center gap-2 w-[212px] pl-5 h-[56px] hover:bg-[#669083] active:bg-[#669083]'>
                <img src={myeventsImg} alt='My Image' className='h-5 w-6'/>My Events
                </a>
              </li>
              <li>
                <a href="" className='text-[#FFFFFF] flex items-center gap-2 w-[212px] pl-5 h-[56px] hover:bg-[#669083] active:bg-[#669083]'>
                <img src={analyticsImg} alt='My Image' className='h-5 w-6'/>Analytics
                </a>
              </li>
              <li>
                <a href="" className='text-[#FFFFFF] flex items-center gap-2 w-[212px] pl-5 h-[56px] hover:bg-[#669083] active:bg-[#669083]'>
                <img src={setImg} alt='My Image' className='h-5 w-6'/>Settings
                </a>
              </li>
        </ul>
      </nav>
      {/* Render modals conditionally */}
      {isRegFormModalOpen && (
        <RegFormModal closeModal={closeModal} />
      )}
      {isRegSuccessModalOpen && (
        <RegSuccessModal closeModal={closeModal} />
      )}
      {isCreateEventModalOpen && (
        <CreateEventFormModal closeModal={closeModal} />
      )}
      {isCustomMsgModalOpen && (
        <CustomMsgModal closeModal={closeModal} />
      )}
      {isCreateEventSuccessModalOpen && (
        <CreateEventSuccessModal closeModal={closeModal} />
      )}
      {isCancelModalOpen && (
        <CancelModal closeModal={closeModal} />
      )}
      {isCancelledModalOpen && (
        <CancelledModal closeModal={closeModal} />
      )}

        <button className='bg-slate-700 w-32 h-10 mr-5' onClick={openRegFormModal}>Register events</button>
        <button className='bg-slate-700 w-32 h-10 mr-5' onClick={openRegSuccessModal}>Register success</button>
        <button className='bg-slate-700 w-32 h-10 mr-5' onClick={openCreateEventModal}>Create events</button>
        <button className='bg-slate-700 w-32 h-10 mr-5' onClick={openCustomMsgModal}>Custom msg</button>
        <button className='bg-slate-700 w-32 h-10 mr-5' onClick={openCreateEventSuccessModal}>Create event suc</button>
        <button className='bg-slate-700 w-32 h-10 mr-5' onClick={openCancelModal}>Cancel</button>
        <button className='bg-slate-700 w-40 h-10 mr-5' onClick={openCancelledModal}>Cancelled</button>

    </div>
  );
}

export default NavBar;
