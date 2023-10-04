import bell from "../assets/bell.svg";
import time from "../assets/time.svg";
import Frame451 from "../assets/Frame 45 (1).svg";
import Frame45 from "../assets/Frame 45.svg";
import Frame46 from "../assets/Frame 46.png";
import Frame47 from "../assets/Frame 47.svg";
import dashboardImg from "../assets/dashboard.png";
import myeventsImg from "../assets/myevents.png";
import registeredImg from "../assets/registered.png";
import analyticsImg from "../assets/analytics.png";
import setImg from "../assets/set.png";
import upcomingImg from "../assets/upcoming.png";
import '../UserDashboard.css'
import React, { useState } from 'react';
import RegFormModal from '../components/regformmodal';
import RegSuccessModal from '../components/regsuccessmodal';
import CreateEventFormModal from '../components/createeventformmodal';
import CustomMsgModal from '../components/custommsgmodal';
import CreateEventSuccessModal from '../components/createeventsuccmodal';
import CancelModal from '../components/cancelmodal';
import CancelledModal from '../components/cancelledmodal';
  
function UserDashboard() { 
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
    <div className={`App ${isContentBlurred ? 'blur-none' : ''}`}>
      <header className="App-header">
        <div className="all">
          <div className="container">
            <nav className="bg-black w-[205px] h-full fixed text-source-sans-3 font-medium text-md pt-10">
              <div>
                <p className="text-2xl font-normal mb-14 pl-5">
                  <span className="font-normal text-source-serif text-[#FFFFFF]">
                    Event
                  </span>
                  <span className="font-black text-source-serif text-[#669083]">
                    Buddy
                  </span>
                </p>
              </div>
              <ul>
                <li>
                  <a
                    href=""
                    className="text-[#FFFFFF] flex items-center gap-2 w-[205px] pl-5 h-[56px] hover:bg-[#669083] active:bg-[#669083]"
                  >
                    <img
                      src={dashboardImg}
                      alt="My Image"
                      className="h-5 w-6"
                    />
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-[#FFFFFF] flex items-center gap-2 w-[205px] pl-5 h-[56px] hover:bg-[#669083] active:bg-[#669083]"
                  >
                    <img src={upcomingImg} alt="My Image" className="h-5 w-6" />
                    Upcoming Events
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-[#FFFFFF] flex items-center gap-2 w-[205px] pl-5 h-[56px] hover:bg-[#669083] active:bg-[#669083]"
                  >
                    <img
                      src={registeredImg}
                      alt="My Image"
                      className="h-5 w-6"
                    />
                    Registered Events
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-[#FFFFFF] flex items-center gap-2 w-[205px] pl-5 h-[56px] hover:bg-[#669083] active:bg-[#669083]"
                  >
                    <img src={myeventsImg} alt="My Image" className="h-5 w-6" />
                    My Events
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-[#FFFFFF] flex items-center gap-2 w-[205px] pl-5 h-[56px] hover:bg-[#669083] active:bg-[#669083]"
                  >
                    <img
                      src={analyticsImg}
                      alt="My Image"
                      className="h-5 w-6"
                    />
                    Analytics
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-[#FFFFFF] flex items-center gap-2 w-[205px] pl-5 h-[56px] hover:bg-[#669083] active:bg-[#669083]"
                  >
                    <img src={setImg} alt="My Image" className="h-5 w-6" />
                    Settings
                  </a>
                </li>
              </ul>
            </nav>

            <div className="first-container">
              <div className="btn-search">
                <input type="search" placeholder="Search for an event"></input>
              </div>

              <div className="welcome">
                <div className="welcome-btn">
                  <div className="welcome-event">
                    <h2>Welcome to EventBuddy</h2>
                    <p>Your all-in-one Event Management and Follow-up tool</p>
                    <p>Where you can easily register for events and receive</p>
                    <p>personalized follow up messages.</p>
                  </div>
                  <img src={time}></img>
                </div>
              </div>

              <div className="btn-up">
                <h3>Upcoming Events</h3>
                <a href="#">See More</a>
              </div>

              <div className="save-me">
                <h3>Product Launch</h3>
                <div className="about">
                  <p>
                    <spn className="p-span">About the Event:</spn> Stakeholders
                    and staff of Ril gather here as we lauch our new and
                    indomitable
                  </p>
                  <p>
                    product “HEADLESS HR”. We would be elated to have you here.
                  </p>
                </div>

                <div className="date">
                  <div>
                    <p>
                      <span>Date:</span> 8:30pm on the 18th, May 2022
                    </p>
                    <p>
                      <span>Location:</span> Aztec Arcum, Trans Amadi Rivers
                      State.
                    </p>
                  </div>
                  <div>
                    <button onClick={openRegFormModal}>Save me a spot!</button>
                  </div>
                </div>
              </div>

              <div className="save-me">
                <h3>Product Launch</h3>
                <div className="about">
                  <p>
                    <spn className="p-span">About the Event:</spn> Stakeholders
                    and staff of Ril gather here as we lauch our new and
                    indomitable
                  </p>
                  <p>
                    product “HEADLESS HR”. We would be elated to have you here.
                  </p>
                </div>

                <div className="date">
                  <div>
                    <p>
                      <span>Date:</span> 8:30pm on the 18th, May 2022
                    </p>
                    <p>
                      <span>Location:</span> Aztec Arcum, Trans Amadi Rivers
                      State.
                    </p>
                  </div>
                  <div>
                    <button onClick={openRegFormModal}>Save me a spot!</button>
                  </div>
                </div>
              </div>

              <div className="btn-up">
                <h3>Register Event</h3>
                <a href="###">See More</a>
              </div>

              <div className="net-div">
                <div className="net-container">
                  <p>Networking Event for Enterpreneurs</p>
                  <p className="br-family">
                    A once in a lifetime opportunity to<br></br>
                    meet top tech talent and Network<br></br>
                    your way to the top<br></br>
                  </p>
                  <p>
                    <span>Date:</span> 8:30pm on the 18th, may 2023
                  </p>
                  <button onClick={openCancelModal}>Cancel Registration</button>
                </div>
                <div className="net-container">
                  <p className="netwk">Networking Event for Enterpreneurs</p>
                  <p className="br-family">
                    A once in a lifetime opportunity to<br></br>
                    meet top tech talent and Network<br></br>
                    your way to the top<br></br>
                  </p>
                  <p>
                    <span className="date20">Date:</span> 8:30pm on the 18th, may 2023
                  </p>
                  <button onClick={openCancelModal}>Cancel Registration</button>
                </div>
              </div>
            </div>

            <div className="second-container">
              <div className="event">
                <img src={bell}></img>
                <button onClick={openCreateEventModal}>+ Create New Event</button>
              </div>
              <div className="btn-14">
                <div className="btn-body">
                  <h2>TODAY</h2>
                  <div className="btn-calender">
                    <div className="date-btn">
                      <div className="days">
                        <div className="day">M</div>
                        <div className="day">T</div>
                        <div className="day">W</div>
                        <div className="day">T</div>
                        <div className="day">F</div>
                        <div className="day">S</div>
                        <div className="day">S</div>

                        {/* <div className="number">26</div>
                <div className="number">27</div>
                <div className="number">28</div>
                <div className="number">29</div>
                <div className="number">30</div> */}
                        <div className="number">1</div>
                        <div className="number">2</div>
                        <div className="number">3</div>
                        <div className="number">4</div>
                        <div className="number">5</div>
                        <div className="number">6</div>
                        <div className="number">7</div>
                        <div className="number">8</div>
                        <div className="number">9</div>
                        <div className="number">10</div>
                        <div className="number">11</div>
                        <div className="number">12</div>
                        <div className="number">13</div>
                        <div className="number">14</div>
                        <div className="number">15</div>
                        <div className="number active">16</div>
                        <div className="number">17</div>
                        <div className="number">18</div>
                        <div className="number">19</div>
                        <div className="number">20</div>
                        <div className="number">21</div>
                        <div className="number">22</div>
                        <div className="number">23</div>
                        <div className="number">24</div>
                        <div className="number">25</div>
                        <div className="number">26</div>
                        <div className="number">27</div>
                        <div className="number">28</div>
                        <div className="number">29</div>
                        <div className="number">30</div>
                        <div className="number">31</div>
                        {/* <div className="number-p">1</div>
                <div className="number-p">2</div>
                <div className="number-p">3</div>
                <div className="number-p">4</div>
                <div className="number-p">5</div>
                <div className="number-p">6</div> */}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="my-event">
                  <h1>My Event</h1>
                  <div className="my-event-btn">
                    <p>No Event for today</p>
                  </div>
                </div>

                <div className="Analytics">
                  <h2> Analytics Overview</h2>

                  <div className="over-btn">
                    <div className="image-div" id="img-div">
                      <img src={Frame45}></img>
                    </div>
                    <div>
                      <p>12 Event Create</p>
                    </div>
                  </div>

                  <div className="over-btn">
                    <div className="image-div">
                      <img src={Frame451}></img>
                    </div>
                    <div>
                      <p>10 Event Succesful</p>
                    </div>
                  </div>

                  <div className="over-btn">
                    <div className="image-div" id="img-div2">
                      <img src={Frame47}></img>
                    </div>
                    <div>
                      <p>2 Cancelled events</p>
                    </div>
                  </div>
                  <div className="over-btn">
                    <div className="image-div">
                      <img src={Frame46}></img>
                    </div>
                    <div>
                      <p>4 Upcoming events</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
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
    </div>
  );
}

export default UserDashboard;
