{
    "moduleId" : " ... the name of the github repository ...",
    "title" : "Test",
    "subtitle" : "Test Alert, Confirm, Promt",
    
    "loadDataWithBaseUrl2" : 
    "
<!DOCTYPE html>
<html>
<body>

<p>Let's check alert, confirm and promt ...</p>

<script>ver =  grabowCommuter.getVersion();</script>

<p> <script>grabowCommuter.showToast('This is Version:' + ver);</script><p>    

<button onclick='myFunction1()'>Try confirm ...</button>
<button onclick='myFunction2()'>Try promt ...</button>

<p id='demo1'></p>
<p id='demo2'></p>

<script>
    alert('Ok, lets go!');
</script>    

<script>
function myFunction1() {
    var txt;
    var r = confirm('Press a button!');
    if (r == true) {
        txt = 'You pressed OK!';
    } else {
        txt = 'You pressed Cancel!';
    }
    document.getElementById('demo1').innerHTML = txt;    
}
</script>

<script>
function myFunction2() {
    var person = prompt('Please enter your name', 'Harry Potter');
    if (person != null) {
        document.getElementById('demo2').innerHTML =
        'Hello ' + person + '! How are you today?';
    }
}
</script>

</body>
</html>
    "
}
