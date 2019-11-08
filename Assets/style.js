//Click function is opperational
$('.hours').on('click', function (event) {
    event.preventDefault();
    alert("Schedule Updated!");
    var inputid = $(this).attr("data-input");
    var value = document.getElementById(inputid).value;
    localStorage.setItem(inputid, value);
})


//retrieves items stored in local storage and displays them on the screen
document.getElementById('input9').value = localStorage.getItem('input9')
document.getElementById('input10').value = localStorage.getItem('input10')
document.getElementById('input11').value = localStorage.getItem('input11')
document.getElementById('input12').value = localStorage.getItem('input12')
document.getElementById('input1').value = localStorage.getItem('input1')
document.getElementById('input2').value = localStorage.getItem('input2')
document.getElementById('input3').value = localStorage.getItem('input3')
document.getElementById('input4').value = localStorage.getItem('input4')
document.getElementById('input5').value = localStorage.getItem('input5')


//Displays time on screen(not in realtime yet)
var update = function (){
let now = moment(new Date());
console.log(now.format("YYYY MM DD - hh:mm:ss a"));
displaytime.textContent = now;
}
update();
setInterval(update, 1000)


function hourupdater() {
    var currenthour = moment().hours()
    $(".time-block").each(function () {
        console.log(parseInt(($(this).text().split(' ')[0])))
        var blockhour = parseInt(($(this).text().split(' ')[0]));
        if (blockhour < currenthour) { $(this).addClass("past") }
        else if (blockhour === currenthour) {
            $(this).removeClass("past")
            $(this).addClass("present")
        }
        else {
            $(this).removeClass("past")
            $(this).removeClass("present")
            $(this).addClass("future")
        }
    });
}
hourupdater();