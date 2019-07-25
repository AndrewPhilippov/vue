<template>
  <div class="map">
    <div class="google-map" id="map"></div>
  </div>
</template>

<script>
import firebase from 'firebase';
import db from '@/firebase/init';

export default {
  name: 'GMap',
  data() {
    return {
      lat: 53,
      lng: -2,
    };
  },
  methods: {
    renderMap() {
      const map = new google.maps.Map(document.getElementById('map'), {
        center: {
          lat: this.lat,
          lng: this.lng,
        },
        zoom: 6,
        maxZoom: 20,
        minZoom: 3,
        streetViewControl: false,
      });

      db.collection('users').get().then((users) => {
        users.docs.forEach((doc) => {
          const data = doc.data();
          if (data.geolocation) {
            const marker = new google.maps.Marker({
              position: {
                lat: data.geolocation.lat,
                lng: data.geolocation.lng,
              },
              map,
            });
            //   Add click event to marker`
            marker.addListener('click', () => {
              this.$router.push({ name: 'ViewProfile', params: { id: doc.id } });
            });
          }
        });
      });
    },
  },
  mounted() {
    // Get current user
    const user = firebase.auth().currentUser;
    // Get user geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;

        // Find user record and then update GEOCoords
        db.collection('users')
          .where('user_id', '==', user.uid)
          .get()
          .then((snapshot) => {
            snapshot.forEach((doc) => {
              db.collection('users')
                .doc(doc.id)
                .update({
                  geolocation: {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                  },
                });
            });
          })
          .then(() => {
            this.renderMap();
          })
          .catch(err => console.log(err));
      }, (err) => {
        console.log(err);
        this.renderMap();
      }, {
        maximumAge: 60000,
        timeout: 3000,
      });
    } else {
      // position center by default values
      this.renderMap();
    }
    this.renderMap();
  },
};
</script>

<style scoped>
  .google-map {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background: #fff;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
  }
</style>
