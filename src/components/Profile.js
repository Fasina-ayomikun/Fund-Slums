import { React, useState, useEffect } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { BsArrowUpRight } from "react-icons/bs";
import { useAppProvider } from "../context";
import CreateForm from "./CreateForm";
import Form from "./Form";
import { ethers } from "ethers";
import { create } from "ipfs-http-client";
import { abi, contractAddress } from "./constants.js";
import Withdrawer from "./Withdrawer";

import MainFooter from "./MainFooter";

const client = create("https://ipfs.infura.io:5001/api/v0");

function Profile() {
  const [allCharities, setAllCharities] = useState(null);

  const [description, setDescription] = useState([]);
  const { openModal, openCreate, openWithdrawer, getid, setId } =
    useAppProvider();
  const [address, setAddress] = useState("No wallet connected");

  async function getAddress() {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      console.log(signer);
      const contracts = new ethers.Contract(contractAddress, abi, signer);
      const accounts = await signer.getAddress();
      console.log(accounts);
      setAddress(accounts);
    }
  }

  async function endCharity() {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      console.log(signer);
      const contracts = new ethers.Contract(contractAddress, abi, signer);
      try {
        const transactionResponse = await contracts.withdraw(getid);
        await listenForTransactionMined(transactionResponse, provider);
        console.log("Ended");
      } catch (error) {
        console.log(error);
      }
    }
  }

  function listenForTransactionMined(transactionResponse, provider) {
    console.log(`Mining ${transactionResponse.hash}...`);
    return new Promise((resolve, reject) => {
      provider.once(transactionResponse.hash, (getTransactionReceipt) => {
        console.log(
          `Completed with ${getTransactionReceipt.confirmations} confirmations`
        );
        resolve();
      });
    });
  }

  async function withdraw() {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      console.log(signer);
      const contracts = new ethers.Contract(contractAddress, abi, signer);

      try {
        const transactionResponse = await contracts.withdraw(getid);
        await listenForTransactionMined(transactionResponse, provider);
        console.log("Withdrawn");
      } catch (error) {
        console.log(error);
      }
    }
  }

  async function getMyCharities(event) {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      console.log(signer);
      const contracts = new ethers.Contract(contractAddress, abi, signer);

      const accounts = await signer.getAddress();

      try {
        const transactionResponse = await contracts.getAddressCharities(
          accounts
        );
        setAllCharities(transactionResponse);
        console.log(transactionResponse[0][0]);
        console.log(transactionResponse[0][1]);
        console.log(transactionResponse[0][7]);

        const definition = [];

        for (let i = 0; i < transactionResponse.length; i++) {
          fetch(transactionResponse[i][6], { credentials: "omit" })
            .then((resp) => resp.text())
            .then((text) => {
              definition.push(text);
              setDescription(definition);
              //console.log(text);
            });
        }
        console.log(definition);

        console.log(description);
      } catch (error) {
        console.log(error);
      }
    }
  }

  useEffect(() => {
    getAddress();
    getMyCharities();
  }, []);

  return (
    <>
      <Navbar />
      <Sidebar />
      <Form />
      <Withdrawer />
      <CreateForm />
      <section className='profile-section'>
        <div className='profile-container'>
          <div className='profile-header'>
            <div className='profile-info'>
              <div className='profile-img'></div>
              <div>
                <p className='username'>Wallet Address</p>
                <p className='wallet-address'>{address}</p>
              </div>
            </div>
            <div className='profile-btns'>
              <button className='donate-btn' onClick={openModal}>
                donate now
              </button>
              <button className='donate-btn' onClick={openCreate}>
                Create GoFund Me
              </button>
            </div>
          </div>
          <div className='profile-content'>
            <div>
              <p className='active-profile'>Your Charities</p>
            </div>
            {allCharities ? (
              allCharities.map((charity, index) => {
                return (
                  <div key={index} className='info'>
                    <BsArrowUpRight
                      id={index}
                      onClick={(e) => {
                        openWithdrawer();
                        setId(e.target);
                      }}
                    />
                    <h5>{charity.owner}</h5>
                    <h5>{charity.amountNeeded.toString() / 1e18} ETH</h5>
                  </div>
                );
              })
            ) : (
              <h5>No Charities found..</h5>
            )}
          </div>
        </div>
      </section>
      <MainFooter />
    </>
  );
}

export default Profile;
