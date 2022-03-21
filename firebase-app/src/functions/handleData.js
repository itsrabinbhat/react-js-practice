import { database, ref, set, onValue, update } from "../config/firebaseConfig";
const handleChange = (e, userData, setUserData) => {
  setUserData({ ...userData, [e.target.name]: e.target.value });
};

const addUser = (e, userData) => {
  e.preventDefault();
  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => (input.value = ""));

  set(ref(database, "users/" + Date.now()), {
    ...userData,
  }).then((err) => {
    if (err) {
      console.log("Error occured while adding user!");
    } else {
      console.log("User added Successfully!");
    }
  });
};

const updateUser = (e, userData) => {
  e.preventDefault();
  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => (input.value = ""));

  update(ref(database, "users/" + userData.UserID), {
    Name: userData.Name,
    Address: userData.Address,
  }).then((err) => {
    if (err) {
      console.log("Error occured while updating user!");
    } else {
      console.log("User updated Successfully!");
    }
  });
};
const removeUser = (e, userData) => {
  e.preventDefault();
  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => (input.value = ""));

  set(ref(database, "users/" + userData.UserID), null).then((err) => {
    if (err) {
      console.log("Error occured while Removing user!");
    } else {
      console.log("User removed Successfully!");
    }
  });
};

let _data = [];
const fetchUsers = (setFetchedUsers) => {
  _data = [];
  onValue(ref(database, "users"), (snapshot) => {
    if (snapshot) {
      let _dataList = snapshot.val();

      for (let i in _dataList) {
        _data.push(_dataList[i]);
      }
    }
  });
  setFetchedUsers(_data);
};

export { handleChange, addUser, updateUser, removeUser, fetchUsers, _data };
