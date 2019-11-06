//Displays time on screen(not in realtime yet)
let now = moment();
console.log(now.format("YYYY MM DD - hh:mm:ss a"));

displaytime.textContent = now

//Displays alert when save button is clicked
$('#b9').click(function(){
    alert("Event Scheduled!")

})