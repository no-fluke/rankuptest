<script>
console.log("auth.js loaded");

/* 🔥 Firebase config (YOUR PROJECT) */
const firebaseConfig = {
  apiKey: "AIzaSyAQk0dJayCyv8gfDGsYW-XSYC5n13oWvpA",
  authDomain: "ssc-journey.firebaseapp.com",
  projectId: "ssc-journey"
};

/* Init Firebase (only once) */
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();

/* 🔒 Require login */
window.requireLogin = function (callback) {
  console.log("requireLogin called");
  auth.onAuthStateChanged(user => {
    console.log("Auth state:", user);
    if (!user) {
      window.location.href = "login.html";
    } else {
      callback(user);
    }
  });
};

/* 🚪 Logout */
window.logoutUser = function () {
  console.log("logoutUser called");
  return auth.signOut();
};
</script>

