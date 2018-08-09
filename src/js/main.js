let db = firebase.firestore(); // Variable que inicializa Firestore

let completeNameInput = document.getElementById('complete-name');
let emailInput = document.getElementById('email');
let companyInput = document.getElementById('company');
let sendBtn = document.getElementById('send-form-btn');

sendBtn.addEventListener('click', () => {
  if (companyInput.value === '' || emailInput.value === ' ' || companyInput.value === '') {
    alert('Es necesario llenar todos los campos');
  } else {
    db.collection('visitors').add({
      visitor: completeNameInput.value,
      email: emailInput.value,
      company: companyInput.value,
      foto: '',
      asunto: '',
      time: ''
    })
      .then(function(docRef) {
        console.log('Document written with ID: ', docRef.id);
      });
  };
});

var player = document.getElementById('player'); 
var snapshotCanvas = document.getElementById('snapshot');
var captureButton = document.getElementById('capture');
var videoTracks;

var handleSuccess = function(stream) {
  // Attach the video stream to the video element and autoplay.
  player.srcObject = stream;
  videoTracks = stream.getVideoTracks();
};

captureButton.addEventListener('click', function() {
  var context = snapshot.getContext('2d');
  console.log(context);
  // Draw the video frame to the canvas.
  var foto = context.drawImage(player, 0, 0, snapshotCanvas.width, 
    snapshotCanvas.height);
  // Stop all video streams.
  videoTracks.forEach(function(track) {
    track.stop();
  });
});

navigator.mediaDevices.getUserMedia({video: true})
  .then(handleSuccess);
