// src/components/Welcome/Welcome.js
import React, { useEffect, useState } from "react";
import { auth, db } from "../../Firebase";
import { doc, getDoc } from "firebase/firestore";
import './Welcome.css';

function Welcome() {
  const [userDetails, setUserDetails] = useState(null);

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const docRef = doc(db, "Users", user.uid);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            setUserDetails(docSnap.data());
          } else {
            console.log("No such document found!");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } else {
        console.log("User is not logged in");
      }
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="welcome-container">
      {userDetails ? (
        <>
          <h1>Welcome to the Dashboard, {userDetails.name}!</h1>
          
        </>
      ) : (
        <>
          <h1>Welcome to Our Page</h1>
          <p>You have successfully logged in!</p>
        </>
      )}
    </div>
  );
}

export default Welcome;
