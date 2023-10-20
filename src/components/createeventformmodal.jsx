import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useAuth } from "../auth/AuthContext";

function CreateEventFormModal({
  closeCreateEventModal,
  showCreateEventConfirmModal,
}) {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [token, setToken] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [about, setAbout] = useState("");

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData) {
      setId(userData.data.id);
      setToken(userData.token);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    console.log(token);
    console.log(id);

    const eventDateTime = `${date}T${time}:00Z`;

    const eventData = {
      name,
      createdBy: id,
      about,
      location,
      date: eventDateTime,
    };

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    try {
      const response = await axios.post(
        "https://crm-ai.onrender.com/api/v1/events/",
        eventData,
        {
          headers,
        }
      );
      console.log(response);

      showCreateEventConfirmModal();
      closeCreateEventModal();
    } catch (error) {
      console.error("Error creating the event:", error);
    } finally {
      setLoading(false);
    }
  };

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
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center"
          >
            <div className="flex flex-col text-lg">
              <label htmlFor="RegName">Title/Name of the Event</label>
              <input
                type="text"
                className={`border border-[#7E7E7E] rounded-lg w-[450px] h-[40px] pl-3 mb-2 ${
                  loading ? "cursor-not-allowed" : ""
                }`}
                placeholder="Product Launch"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                disabled={loading}
              />
            </div>

            <div className="flex flex-col text-lg">
              <label htmlFor="RegEmail">Enter Date of the Event</label>
              <input
                type="date"
                className={`border border-[#7E7E7E] rounded-lg w-[450px] h-[40px] pl-3 mb-2 ${
                  loading ? "cursor-not-allowed" : ""
                }`}
                placeholder="mm/dd/yy"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                disabled={loading}
              />
            </div>

            <div className="flex flex-col text-lg relative">
              <label htmlFor="RegPassword">Enter Time of the Event</label>
              <input
                type="time"
                className={`border border-gray-950 rounded-lg w-[450px] h-[40px] pl-3 text-[#020202] mb-2 ${
                  loading ? "cursor-not-allowed" : ""
                }`}
                placeholder="2PM - 6PM"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
                disabled={loading}
              />
            </div>

            <div className="flex flex-col text-lg relative">
              <label htmlFor="RegPassword">Location</label>
              <input
                type="text"
                className={`border border-gray-950 rounded-lg w-[450px] h-[40px] pl-3 text-[#020202] mb-2 ${
                  loading ? "cursor-not-allowed" : ""
                }`}
                placeholder="Ubuntu Workspace"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
                disabled={loading}
              />
            </div>

            <div className="flex flex-col text-lg relative">
              <label htmlFor="RegPassword">
                Add All Necessary Details About the Event
              </label>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                className={`border border-gray-950 rounded-lg w-[450px] h-[50px] pl-3 text-[#020202] mb-2 ${
                  loading ? "cursor-not-allowed" : ""
                }`}
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                disabled={loading}
              ></textarea>
            </div>

            <div className="text-lg flex gap-3 items-center mb-1">
              <input type="checkbox" className="h-5 w-5" />
              <p>Add customized follow-up messages</p>
            </div>
            <div className="text-lg flex gap-3 items-center mb-4">
              <input type="checkbox" className="h-5 w-5" />
              <p>Add event to calendar</p>
            </div>

            <div>
              <button
                type="submit"
                className={`text-white bg-black w-[140px] h-[40px] rounded-lg text-xl mb-2 ${
                  loading ? "cursor-not-allowed" : ""
                }`}
                disabled={loading}
              >
                {loading ? "Creating..." : "Create Event"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateEventFormModal;
