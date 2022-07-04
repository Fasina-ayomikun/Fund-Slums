import { React, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { useAppProvider } from "../context";

import { ethers } from "ethers";
import { create } from "ipfs-http-client";
import { abi, contractAddress } from "./constants.js";

const client = create("https://ipfs.infura.io:5001/api/v0");

function Withdrawer() {
  const { getid } = useAppProvider();

  useEffect(() => {
    console.log(getid);
  });

  async function endCharity() {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      console.log(signer);
      const contracts = new ethers.Contract(contractAddress, abi, signer);
      try {
        const transactionResponse = await contracts.endFundMe(getid);
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

  const { isWithdrawerOpen, closeWithdrawer } = useAppProvider();
  return (
    <section
      className={`${isWithdrawerOpen ? "withdrawer show-form" : "withdrawer"}`}
    >
      <FaTimes className='close-icon' onClick={closeWithdrawer} />
      <button
        className='donate-btn'
        onClick={() => {
          closeWithdrawer();
          withdraw();
        }}
      >
        withdraw
      </button>
      <button
        className='donate-btn'
        onClick={() => {
          closeWithdrawer();
          endCharity();
        }}
      >
        end donation
      </button>
    </section>
  );
}

export default Withdrawer;
