import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isReadmoreOpen, setIsReadmoreOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isWithdrawerOpen, setIsWithdrawerOpen] = useState(false);
  const [getid, setGetId] = useState(null);
  const [desc, setDesc] = useState([]);
  const setId = (div) => {
    if (div !== undefined) {
      setGetId(div.id);
    }
    console.log(getid);
  };
  const Desc = (description) => {
    setDesc(description);
  };

  const openWithdrawer = () => {
    setIsWithdrawerOpen(true);
    console.log(isWithdrawerOpen);
  };
  const closeWithdrawer = () => {
    setIsWithdrawerOpen(false);
  };
  const openCreate = () => {
    setIsCreateOpen(true);
  };
  const closeCreate = () => {
    setIsCreateOpen(false);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openReadmore = () => {
    setIsReadmoreOpen(true);
  };
  const closeReadmore = () => {
    setIsReadmoreOpen(false);
  };
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        isReadmoreOpen,
        openReadmore,
        openSidebar,
        closeSidebar,
        isSidebarOpen,
        closeReadmore,
        openModal,
        closeModal,
        openCreate,
        closeCreate,
        isCreateOpen,
        getid,
        setId,
        isWithdrawerOpen,
        openWithdrawer,
        closeWithdrawer,
        desc,
        Desc,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppProvider = () => {
  return useContext(AppContext);
};
export default AppProvider;
