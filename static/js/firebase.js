// you should set your firebaseConfig file
// visit https://console.firebase.google.com/u/1/project/projectID/settings/general/
var firebaseConfig = {
    apiKey: "######YOUR API KEY#####",
    authDomain: "projectId.firebaseapp.com",
    databaseURL: "https://projectId.firebaseio.com",
    projectId: "projectId",
    storageBucket: "projectId.appspot.com",
    messagingSenderId: "######messagingSenderId######",
    appId: "######## appI d#########",
    measurementId: "#### measurementId ####"
};
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
db.collection('notifications').where("is_read", "==", false).onSnapshot(function
    (querySnapshot) {
    var undreaded_box = document.getElementById('undreaded_box');
    undreaded_box.innerHTML = '';
    querySnapshot.forEach(function (snapshot) {
        undreaded_box.innerHTML +=
            `<div id="` + snapshot.id + `" class="alert alert-success" role="alert">
                    <h4 class="alert-heading">New Message</h4>
                    <p>` + snapshot.data().message + `</p>
                    <hr>
                    <a href="#" class="make_as_read_link">Make As Read</a>
                 </div>`;
        $('.make_as_read_link').click(function (e) {
            e.preventDefault();
            makeAsRead(snapshot.id);
        });
    });
});
db.collection('notifications').where("is_read", "==", true).onSnapshot(function
    (querySnapshot) {
    var readed_box = document.getElementById('readed_box');
    readed_box.innerHTML = '';
    querySnapshot.forEach(function (snapshot) {
        readed_box.innerHTML +=
            `<div id="` + snapshot.id + `" class="alert alert-primary" role="alert">
                    <h4 class="alert-heading">Old Message</h4>
                    <p>` + snapshot.data().message + `</p>
                 </div>`;
    });
});

function makeAsRead(snapshot_id) {
    $.ajax("/ajax/make-as-read/?snapshot_id=" + snapshot_id, {
        success: function (data) {
            console.log(data);
        }
    });
}

function sendMessage() {
    var message_element = document.getElementById('id_message');
    $.ajax('/ajax/send-message?message=' + message_element.value, {
        success: function (data) {
            console.log(data);
            message_element.value = '';
        }
    });
}