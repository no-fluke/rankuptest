<script type="module">
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

/* 🔥 SAME FIREBASE CONFIG YOU USED BEFORE */
const firebaseConfig = {
  apiKey: "AIzaSyAQk0dJayCyv8gfDGsYW-XSYC5n13oWvpA",
  authDomain: "ssc-journey.firebaseapp.com",
  projectId: "ssc-journey"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

/* 🔒 Protect page */
export function requireLogin(callback) {
  onAuthStateChanged(auth, user => {
    if (!user) {
      window.location.href = "/login.html";
    } else {
      callback(user);
    }
  });
}

/* 🚪 Logout */
export function logoutUser() {
  return signOut(auth);
}
</script>
