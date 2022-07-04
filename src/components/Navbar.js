import { React, useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { ethers } from "ethers";
import { abi, contractAddress } from "./constants.js";
import { useAppProvider } from "../context.js";
function Navbar() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(" - ");
  const [connButtonText, setConnButtonText] = useState("Connect Wallet");
  const [defaultAccounts, setDefaultAccounts] = useState(null);

  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);

  const connectWalletHandler = () => {
    if (window.ethereum && window.ethereum.isMetaMask) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          accountChangedHandler(result[0]);
          setConnButtonText("Wallet Connected");
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    } else {
      console.log("Need to install MetaMask");
      setErrorMessage("Please install MetaMask browser extension to interact");
      setConnButtonText("Metamask not found");
    }
  };

  const accountChangedHandler = (newAccount) => {
    setDefaultAccount(newAccount);
    setDefaultAccounts(newAccount);
    updateEthers();
  };

  const updateEthers = () => {
    let tempProvider = new ethers.providers.Web3Provider(window.ethereum);
    setProvider(tempProvider);

    let tempSigner = tempProvider.getSigner();
    setSigner(tempSigner);

    let tempContract = new ethers.Contract(contractAddress, abi, tempSigner);
    setContract(tempContract);
  };
  const { openSidebar } = useAppProvider();
  return (
    <div className='navbar'>
      <div className='nav-container'>
        <FiAlignJustify className='toggle-btn' onClick={openSidebar} />
        <ul className='nav-links '>
          <li className='nav-link '>
            <NavLink to='/' activeclassname='active'>
              Home
            </NavLink>
          </li>
          <li className='nav-link '>
            <NavLink to='/profile' activeclassname='active'>
              Profile
            </NavLink>
          </li>

          <li className='nav-link'>
            <NavLink to='/charities' activeclassname='active'>
              Charities
            </NavLink>
          </li>

          <li className='nav-link'>
            <NavLink to='/about' activeclassname='active'>
              About
            </NavLink>
          </li>
        </ul>
        <button className='wallet-btn' onClick={connectWalletHandler}>
          {connButtonText}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
