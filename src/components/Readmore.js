import React from "react";
import { FaTimes } from "react-icons/fa";
import { useAppProvider } from "../context";
function Readmore() {
  const { closeReadmore, isReadmoreOpen, desc } = useAppProvider();
  return (
    <section
      className={
        isReadmoreOpen ? "readmore-section show-readmore" : "readmore-section"
      }
    >
      <FaTimes onClick={closeReadmore} />
      <div className='readmore-container'>
        <h4>Lorem, ipsum dolor.</h4>
        {desc.map((des, index) => {
          console.log(des);
          return <p key={index}>{des}</p>;
        })}
      </div>
    </section>
  );
}

export default Readmore;
