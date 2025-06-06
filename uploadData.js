// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-firestore.js";

// Firebase configuration (replace with your Firebase config object)
const firebaseConfig = {
  apiKey: "AIzaSyDHAFOwKHAZR9lGOaGtbPEOIa3pLqi1HnM",
  authDomain: "cla3schedule.firebaseapp.com",
  projectId: "cla3schedule",
  storageBucket: "cla3schedule.firebasestorage.app",
  messagingSenderId: "813133654179",
  appId: "1:813133654179:web:c45dd59b6a26788f203716",
  measurementId: "G-SB0V98NY8H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Data to upload (copy the contents of your data.json file here)
const data = {
  "saturday": {
    "content": "<table><tr><th>Time</th><th>Subject</th><th>Room</th></tr><tr><td>09.00-09.50</td><td>DCE-2209</td><td>339</td></tr><tr><td>10.00-10.50</td><td>FLAT-2211</td><td>339</td></tr><tr><td>11.00-12.50</td><td>DCE-2210</td><td>S2</td></tr><tr><td>02.00-02.50</td><td>MI-2207</td><td>339</td></tr><tr><td>03.00-04.50</td><td>MI-2208</td><td>S3</td></tr></table>",
    "lastEditedBy": ""
  },
  "sunday": {
    "content": "<table><tr><th>Time</th><th>Subject</th><th>Room</th></tr><tr><td>09.00-09.50</td><td>FLAT-2211</td><td>339</td></tr><tr><td>10.00-10.50</td><td>DCE-2209</td><td>339</td></tr><tr><td>11.00-12.50</td><td>DBMS-2204</td><td>S1</td></tr><tr><td>02.00-02.50</td><td>ADA-2201</td><td>339</td></tr><tr><td>03.00-04.50</td><td>ADA-2202</td><td>S2</td></tr></table>",
    "lastEditedBy": ""
  },
  "monday": {
    "content": "<table><tr><th>Time</th><th>Subject</th><th>Room</th></tr><tr><td>09.00-10.50</td><td>ADA-2202</td><td>S1</td></tr><tr><td>11.00-11.50</td><td>DBMS-2203</td><td>339</td></tr><tr><td>12.00-12.50</td><td>ADA-2201</td><td>339</td></tr><tr><td>02.00-02.50</td><td>MI-2207</td><td>339</td></tr><tr><td>03.00-04.50</td><td>MI-2208</td><td>S1</td></tr></table>",
    "lastEditedBy": ""
  },
  "tuesday": {
    "content": "<table><tr><th>Time</th><th>Subject</th><th>Room</th></tr><tr><td>09.00-09.50</td><td>ADA-2201</td><td>339</td></tr><tr><td>10.00-10.50</td><td>DCE-2209</td><td>339</td></tr><tr><td>11.00-11.50</td><td>OOAD-2205</td><td>339</td></tr><tr><td>12.00-12.50</td><td>DBMS-2203</td><td>339</td></tr><tr><td>02.00-02.50</td><td>MI-2207</td><td>339</td></tr><tr><td>03.00-04.50</td><td>DBMS-2204</td><td>S3</td></tr></table>",
    "lastEditedBy": ""
  },
  "wednesday": {
    "content": "<table><tr><th>Time</th><th>Subject</th><th>Room</th></tr><tr><td>10.00-10.50</td><td>DBMS-2203</td><td>339</td></tr><tr><td>11.00-11.50</td><td>OOAD-2205</td><td>339</td></tr><tr><td>12.00-12.50</td><td>FLAT-2211</td><td>339</td></tr><tr><td>03.00-04.50</td><td>OOAD-2206</td><td>S3</td></tr></table>",
    "lastEditedBy": ""
  },
  "tasks": {
    "content": "<ol><li>Math homework - Due Friday</li><li>Science project - Next week</li></ol>",
    "lastEditedBy": ""
  },
  "bus": {
    "onfromCampus": "<ul><li>08.00 AM</li><li>09.00 AM</li><li>10.00 AM</li><li>12.00 PM</li><li>01.10 PM</li><li>02.30 PM</li><li>04.10 PM</li><li>05.15 PM</li><li>06.20 PM</li><li>08.10 PM</li></ul>",
    "ontoCampus": "<ul><li>08.30 AM</li><li>09.30 AM</li><li>10.30 AM</li><li>12.30 PM</li><li>01.40 PM</li><li>03.00 PM</li><li>04.40 PM</li><li>05.45 PM</li><li>07.00 PM</li><li>08.50 PM</li></ul>",
    "offfromCampus": "<ul><li>09.00 AM</li><li>12.00 PM</li><li>02.30 PM</li><li>04.30 PM</li><li>06.00 PM</li><li>08.20 PM</li></ul>",
    "offtoCampus": "<ul><li>09.30 AM</li><li>12.30 PM</li><li>03.00 PM</li><li>05.30 PM</li><li>07.00 PM</li><li>09.00 PM</li></ul>",
    "lastEditedBy": ""
  }
};

// Upload data to Firestore
async function uploadData() {
  try {
    await setDoc(doc(db, "schedule", "data"), data); // Upload the data to Firestore
    console.log("Data uploaded successfully!");
  } catch (error) {
    console.error("Error uploading data:", error);
  }
}

// Call the upload function
uploadData();