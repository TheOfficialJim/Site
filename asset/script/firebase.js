<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: process.env.SITE_APP_API_KEY,
    authDomain: process.env.SITE_APP_API_KEY_APP_AUTH_DOMAIN,
    projectId: process.env.SITE_APP_API_KEY_APP_PROJECT_ID,
    storageBucket: process.env.SITE_APP_API_KEY_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.SITE_APP_API_KEY_APP_MESSAGING_SENDER_ID,
    appId: process.env.SITE_APP_API_KEY_APP_APP_ID,
    measurementId: process.env.SITE_APP_API_KEY_APP_MEASUREMENT_ID
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>