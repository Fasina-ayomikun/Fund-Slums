import { React, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useAppProvider } from "../context";
import Form from "./Form";
import { ethers } from "ethers";
import { create } from "ipfs-http-client";
import { abi, contractAddress } from "./constants.js";

import image1 from "../images/boys.jpg";
import image2 from "../images/boys2.jpg";
import image3 from "../images/boy1.jpg";

import Readmore from "./Readmore";
import Sidebar from "./Sidebar";
import MainFooter from "./MainFooter";
import { BsFullscreen } from "react-icons/bs";
import { FaHtml5 } from "react-icons/fa";

const client = create("https://ipfs.infura.io:5001/api/v0");

function Charities() {
  const { openModal, openReadmore } = useAppProvider();

  const [fileUrl, updateFileUrl] = useState(null);
  const [allCharities, setAllCharities] = useState(null);
  const [img, setImg] = useState(null);
  const [con, setCon] = useState(null);
  const [info, setInfo] = useState(null);

  const [description, setDescription] = useState([]);

  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(" - ");
  const [connButtonText, setConnButtonText] = useState("Connect Wallet");
  const [defaultAccounts, setDefaultAccounts] = useState(null);

  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);

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

  //in the donate now pop up: to be called when the user confirms deposit
  async function donate(event) {
    event.preventDefault();
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      console.log(signer);
      const contracts = new ethers.Contract(contractAddress, abi, signer);
      console.log(` Donating with${event.target.amount.value}....`);

      try {
        const transactionResponse = await contracts.donate(
          event.target.charityId.value,
          {
            value: ethers.utils.parseEther(event.target.amount.value),
          }
        );
        await listenForTransactionMined(transactionResponse, provider);
        console.log("Done");
      } catch (error) {
        console.log(error);
      }
    }
  }

  //to be called when the user wants to withdraw from his/her charity
  //note: charity must be marked as ended before withdrawing
  async function withdraw(event) {
    event.preventDefault();

    // try {
    //   const transactionResponse = await contract.withdraw(
    //     event.target.charityId.value,
    //     ethers.utils.parseEther(event.target.amount.value)
    //   );
    //   await listenForTransactionMined(transactionResponse, provider);
    //   console.log("Withdrawn");
    // } catch (error) {
    //   console.log(error);
    // }
  }

  async function getCharities(event) {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      console.log(signer);
      const contracts = new ethers.Contract(contractAddress, abi, signer);

      try {
        const transactionResponse = await contracts.getAllCharities();
        setAllCharities(transactionResponse);
        console.log(transactionResponse[0][0]); // amount gotten
        console.log(transactionResponse[0][1]); // amount needed
        console.log(transactionResponse[0][7]); // image
        console.log(transactionResponse[0][5]); // charity id

        console.log(transactionResponse[0][6]); // description
        console.log(transactionResponse[0][4]); // charity state(open or ended)
      } catch (error) {
        console.log(error);
      }
    }
  }
  console.log(allCharities);
  const [fullscreen, setFullScreen] = useState(false);
  const { getid, setId } = useAppProvider();
  useEffect(() => {
    if (!allCharities === null) {
      setFullScreen(true);
    } else {
      setFullScreen(false);
    }

    toast.error("Don't forget connect your Wallet");

    getCharities();
  }, []);

  let ids;

  async function id(e) {
    let i = 0;
    do {
      await setId(e.currentTarget);

      i++;
      console.log(getid);
    } while (getid === null && i < 3);

    if (getid !== null) {
      openModal();
    }
  }

  return (
    <>
      <Navbar />
      <Sidebar />
      <Readmore />
      <Form />
      <section
        className={`${fullscreen ? "charities full-screen" : "charities"}`}
      >
        <div className='charities-container'>
          <div className='charities-header'>
            <h3>List of Charities</h3>
          </div>
          <div className='causes-content charities-content'>
            {allCharities ? (
              allCharities.map((charity, index) => {
                const { owner, amountNeeded } = charity;

                return (
                  <div key={index} className='causes-info'>
                    <img src={charity[7]} alt='' />
                    <h4>{owner.substring(0, 20)}...</h4>

                    <a href={charity[6]} target='blank' className='text'>
                      Click to read descriptions..
                    </a>

                    {/* <p>
                      {description
                        ? description.substring(0, 150)
                        : "no description found"}
                      <span className='read-more' onClick={openReadmore}>
                        Read more..
                      </span>
                    </p> */}
                    <p className='amount'>
                      Amount Needed:{" "}
                      <span>{amountNeeded.toString() / 1e18} ETH</span>{" "}
                    </p>

                    <p className='amount'>
                      Amount Gotten:{" "}
                      <span>{charity[2].toString() / 1e18} ETH</span>
                    </p>
                    <button id={charity[5]} onClick={id} className='donate-btn'>
                      Donate now
                    </button>
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

export default Charities;
