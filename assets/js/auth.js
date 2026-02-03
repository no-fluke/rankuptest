<script>
/* 🔥 Firebase App + Auth (COMPAT) */
const firebaseConfig = {
  apiKey: "AIzaSyAQk0dJayCyv8gfDGsYW-XSYC5n13oWvpA",
  authDomain: "ssc-journey.firebaseapp.com",
  projectId: "ssc-journey"
};

/* Initialize only ONCE */
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();

/* 🔒 Protect page */
function requireLogin(callback) {
  auth.onAuthStateChanged(user => {
    if (!user) {
      window.location.href = "/login.html";
    } else {
      callback(user);
    }
  });
}

/* 🚪 Logout */
function logoutUser() {
  return auth.signOut();
}

/* Expose globally */
window.requireLogin = requireLogin;
window.logoutUser = logoutUser;
</script>
