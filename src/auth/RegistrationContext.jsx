import React, { createContext, useContext, useState } from "react";
import axios from "axios";

// Create the RegistrationContext
const RegistrationContext = createContext();

export function useRegistration() {
  return useContext(RegistrationContext);
}

export function RegistrationProvider({ children }) {
  const [registrationData, setRegistrationData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const register = (registrationData, token) => {
    setIsLoading(true);

    axios.get(`https://crm-ai.onrender.com/api/v1/registrations?user=${userData.data.id}&isCancelled=false`, {
        headers,
        
      })
      .then((response) => {
        setRegistrationData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error during registration:", error);
        setIsLoading(false);
      });
  };

  return (
    <RegistrationContext.Provider value={{ registrationData, isLoading, register }}>
      {children}
    </RegistrationContext.Provider>
  );
}
