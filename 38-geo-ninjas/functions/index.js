const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

exports.checkAlias = functions.https.onCall((data, context) => {
  const ref = admin.firestore().collection('users').doc(data.slug);
  return ref.get()
    .then((doc) => ({ unique: !doc.exists }))
    .catch((err) => {
      throw new functions.https.HttpsError('Faild to connect');
    });
});
