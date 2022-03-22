import React, { useState, useEffect } from "react";
import { database, ref, onValue } from "../config/firebaseConfig";
import "../assets/css/confessionList.css";
import Moment from "react-moment";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const ConfessionList = () => {
  const [confessionList, setConfessionList] = useState([]);
  useEffect(() => {
    let _confessionList = [];
    onValue(ref(database, "Confessions"), (snapshot) => {
      let _data = snapshot.val();

      for (let idx in _data) {
        _confessionList.push(_data[idx]);
      }

      setConfessionList(_confessionList);
    });
  }, []);
  return (
    <center>
      <div className="confessions">
        {confessionList.length > 1
          ? confessionList.map((confession, idx) => {
              let _date = new Date(confession.createdAt);
              return (
                <div key={idx} className="confession">
                  <p className="date">{`${_date.getFullYear()} ${
                    months[_date.getMonth()]
                  } ${_date.getDay()}`}</p>
                  <p className="confess">{confession.confession}</p>
                  <span className="time-ago">
                    <Moment fromNow>{confession.createdAt}</Moment>
                  </span>
                </div>
              );
            })
          : console.log("loading..")}
      </div>
    </center>
  );
};

export default ConfessionList;
