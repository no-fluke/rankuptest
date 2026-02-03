<script>
/* ========= FIREBASE INIT (COMPAT ONLY) ========= */

const firebaseConfig = {
  apiKey: "AIzaSyAQk0dJayCyv8gfDGsYW-XSYC5n13oWvpA",
  authDomain: "ssc-journey.firebaseapp.com",
  projectId: "ssc-journey"
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
