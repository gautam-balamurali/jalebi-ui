import { createContext, useContext, useState } from "react";
import { capitalizeString } from "../../utils/helper-functions/HelperFunctions";

export const DocsContext = createContext();

export const DocsContextProvider = ({ children }) => {
  const [docsComponentToDisplay, setDocsComponentToDisplay] = useState("Alert");

  const handleSearchInput = (event) => {
    const { value } = event.target;
    setDocsComponentToDisplay(capitalizeString(value));
  };

  return (
    <DocsContext.Provider
      value={{
        docsComponentToDisplay,
        setDocsComponentToDisplay,
        handleSearchInput,
      }}
    >
      {children}
    </DocsContext.Provider>
  );
};

export const useDocsContext = () => {
  return useContext(DocsContext);
};
