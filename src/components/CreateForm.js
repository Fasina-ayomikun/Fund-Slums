import { React, useState, useEffect } from "react";
import { FaDonate, FaTimes } from "react-icons/fa";
import { useAppProvider } from "../context";
import { ethers } from "ethers";
import { create } from "ipfs-http-client";
import { abi, contractAddress } from "./constants.js";

const client = create("https://ipfs.infura.io:5001/api/v0");

function CreateForm() {
  const { isCreateOpen, closeCreate } = useAppProvider();
  const [fileUrl, updateFileUrl] = useState(null);

  // in the create gofundme popup: to be called when the user uploads the image.
  async function onChange(e) {
    const file = e.target.files[0];
    try {
      const added = await client.add(file);
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      updateFileUrl(url);
      console.log(fileUrl);
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  }

  // in the create gofundme popup: to be called when the user clicks confirm.
  async function createFundMe(event) {
    event.preventDefault();
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      console.log(signer);
      const contract = new ethers.Contract(contractAddress, abi, signer);
      let x, y;

      try {
        const added = await client.add(event.target.desc.value);
        const url = `https://ipfs.infura.io/ipfs/${added.path}`;
        console.log(url);
        x = url;
      } catch (error) {
        console.log("Error uploading file: ", error);
      }

      console.log(` Creating a fund-me`);

      try {
        const transactionResponse = await contract.createFundMe(
          ethers.utils.parseEther(event.target.amount.value),
          x,
          fileUrl
        );
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
      className={`${isCreateOpen ? "form-section show-form" : "form-section"}`}
    >
      <FaTimes className='close-icon' onClick={closeCreate} />
      <div className='form-container'>
        <form
          onSubmit={(event) => {
            closeCreate();
            createFundMe(event);
          }}
        >
          <div>
            <div className='form-header'>
              <h4>Create a GoFund Me</h4>
              <p>Fill the form below to create a GoFund Me</p>
            </div>
            <label htmlFor='amount'>Name of Charity</label>
            <input
              type='text'
              name='name'
              id='name'
              required
              placeholder='John Doe'
            />
            <label htmlFor='file'>Upload File</label>
            <input
              onChange={onChange}
              type='file'
              accept='image/png, image/jpg, image/gif, image/jpeg'
              id='file'
              name='file'
            />
            <label htmlFor='desc'>Description of charity</label>
            <input
              type='text'
              name='desc'
              id='desc'
              required
              placeholder='Education for street kids'
            />
            <label htmlFor='amount'>Amount in ETH</label>
            <input
              type='text'
              name='amount'
              id='amount'
              required
              placeholder='100'
            />
            <button type='submit' className='submit-btn create-btn'>
              Create GoFund Me
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default CreateForm;
