

// // document.getElementById('emailsubmitbutton_id').onclick = function() {
// //    document.getElementById('mailform').style.display = "none";
// // 	document.getElementById('submitted_id').style.display = "block";
// // }​

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById("js-submit");
    // onClick's logic below:
    if(link!=null)
    {
        link.addEventListener('click', function() {
            submitted();
        });
    }
});

function submitted(){
    document.getElementById('mailform').style.display = "none";
    document.getElementById('submitted_id').style.display = "block";
    const email = document.getElementById('js-email').value;
    console.log(email);
}


