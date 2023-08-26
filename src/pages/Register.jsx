import React, { useState } from "react";
import Add from "../assets/user-add.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { auth, storage, db } from "../firebase";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [err, setErr] = useState("");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value.trim();
    const email = e.target[1].value.trim();
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    const qry = query(
      collection(db, "users"),
      where("displayName", "==", displayName)
    );
    try {
      const querySnapshot = await getDocs(qry);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
        console.log(user);
      });
    } catch (err) {
      setErr("cant query");
    }

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      let downloadURL = "";

      if (!file) {
        const gsReference = ref(
          storage,
          "gs://chat-a-lot-1d327.appspot.com/defaultUserPFP.jpg"
        );
        downloadURL = await getDownloadURL(gsReference);
      } else {
        const storageRef = ref(storage, displayName);
        const uploadTask = uploadBytesResumable(storageRef, file);

        const uploadSnapshot = await uploadTask;
        downloadURL = await getDownloadURL(uploadSnapshot.ref);
      }

      await updateProfile(user, {
        displayName,
        photoURL: downloadURL,
      });

      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        displayName,
        email,
        photoURL: downloadURL,
      });

      await setDoc(doc(db, "userChats", user.uid), {});
      navigate("/");
    } catch {
      setErr("Check email address and/or password");
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat-a-Lot</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" /> <span>Add an Avatar</span>
          </label>
          <button>Sign up</button>
          {err && <span className="error-msg">{err}</span>}
        </form>
        <p>
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
