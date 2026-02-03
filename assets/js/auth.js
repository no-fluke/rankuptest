<script>
/* ========= FIREBASE INIT (COMPAT ONLY) ========= */

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();

/* ========= REQUIRE LOGIN ========= */
window.requireLogin = function (callback) {
  auth.onAuthStateChanged(user => {
    if (!user) {
      window.location.href = "/login.html";
    } else {
      callback(user);
    }
  });
};

/* ========= LOGOUT ========= */
window.logoutUser = function () {
  console.log("Logout function called"); // DEBUG LINE
  return auth.signOut();
};
</script>
