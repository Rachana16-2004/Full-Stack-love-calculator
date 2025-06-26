function cal() {
    
    var myname = document.getElementById("myname").value;
    var fname = document.getElementById("fname").value;
    var par = document.getElementById("result");

    var result = Math.random() * 100;

    par.innerHTML = "<h3>The friendship between</h3> " + myname + " and " + fname + " is " + result;
}
