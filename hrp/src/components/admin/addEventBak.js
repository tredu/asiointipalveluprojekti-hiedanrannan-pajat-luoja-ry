db.collection("events").doc("testi").set({
    organizer: "addEvent",
    description: "addEvent.js testi",
    start: new Date(2019-09-29),
    end: Date.now(),
    location: "Hello World",
    participant: "1"
})
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});