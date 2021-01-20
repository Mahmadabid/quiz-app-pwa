import firebase from "./firebase";

const messaging = firebase.messaging();

export function getNotifications() {
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      messaging
        .getToken()
        .then((currentToken) => {
          if (currentToken) {
          }
        })
        .catch((err) => {
        });
    }
  });
}