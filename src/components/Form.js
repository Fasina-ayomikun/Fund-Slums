import { React, useEffect } from "react";
import { useAppProvider } from "../context";
import { ethers } from "ethers";
import { create } from "ipfs-http-client";
import { abi, contractAddress } from "./constants.js";
import { FaTimes } from "react-icons/fa";

const client = create("https://ipfs.infura.io:5001/api/v0");

function Form() {
  const { getid } = useAppProvider();

  useEffect(() => {
    console.log(getid);
  });

  const { isModalOpen, closeModal } = useAppProvider();

  async function donate(event) {
    event.preventDefault();
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      console.log(signer);
      const contracts = new ethers.Contract(contractAddress, abi, signer);
      console.log(` Donating with${event.target.amount.value}....`);

      try {
        const transactionResponse = await contracts.donate(getid, {
          value: ethers.utils.parseEther(event.target.amount.value),
        });
        await listenForTransactionMined(transactionResponse, provider);
        console.log("Done");
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

  return (
    <section
      className={`${isModalOpen ? "form-section show-form" : "form-section"}`}
    >
      <FaTimes className='close-icon' onClick={closeModal} />
      <div className='form-container'>
        <form
          onSubmit={(event) => {
            closeModal();
            donate(event);
          }}
        >
          <div>
            <div className='form-header'>
              <h4>Donate to a GoFund Me</h4>
              <p>Fill the form below for a quick donation</p>
            </div>
            <label htmlFor='amount'>Amount in ETH</label>
            <input
              type='text'
              name='amount'
              id='amount'
              required
              placeholder='1.0'
            />

            <label htmlFor='email'>Email address(optional)</label>
            <input
              type='email'
              id='email'
              placeholder='johndoe@gmail.com'
              name='email'
            />

            <button type='submit' className='submit-btn'>
              Confirm Donation
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Form;
