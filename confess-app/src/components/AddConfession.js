import React, { useState } from "react";
import "../assets/css/addConfession.css";
// import { v4 as uuidv4 } from "uuid";
import { database, ref, set } from "../config/firebaseConfig";
import { ToastContainer, toast } from "react-toast";
import { FaLock } from "react-icons/fa";

const AddConfession = () => {
  const [confession, setConfession] = useState();
  const addConfession = () => {
    if (confession) {
      set(ref(database, "Confessions/" + Date.now()), {
        confession: confession,
        createdAt: Date.now(),
      }).then((err) => {
        if (err) {
          toast.error("Error occured!");
        } else {
          toast.success("Confess added successfully!");
        }
      });
      setConfession("");
    } else {
      toast.warn("Confession can't be empty!");
    }
  };
  return (
    <center>
      <div className="add-confession-container">
        <textarea
          placeholder="Add new confession..."
          value={confession}
          onChange={(e) => setConfession(e.target.value)}
        ></textarea>
        <button className="btn" onClick={addConfession}>
          Confess
        </button>
      </div>
      <small>
        <FaLock /> Your confession will be automatically removed after 24 hrs.
      </small>

      <ToastContainer delay={1500} />
    </center>
  );
};

export default AddConfession;
