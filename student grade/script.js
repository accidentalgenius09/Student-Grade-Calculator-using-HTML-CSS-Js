function getmarks(){
    var maths=Number(document.getElementById("maths").value);
    var chem=Number(document.getElementById("chem").value);
    var eng=Number(document.getElementById("eng").value);
    var phy=Number(document.getElementById("phy").value);
    var total=maths+chem+eng+phy;
    var divi=total/400;
    var percent=(divi*100).toFixed(2);
    document.getElementById("percentage").innerHTML=percent+" %";
    if(percent>=90){
        document.getElementById("grade").innerHTML="Os";
    }
    else if(percent>=80&&percent<90){
        document.getElementById("grade").innerHTML="A";
    }
    else if(percent>=70&&percent<80){
        document.getElementById("grade").innerHTML="B";
    }
    else if(percent>=60&&percent<70){
        document.getElementById("grade").innerHTML="C";
    }
    else if(percent>=50&&percent<60){
        document.getElementById("grade").innerHTML="P";
    }
    else{
        document.getElementById("grade").innerHTML="D";
    }
    if(percent>60){
        document.getElementById("pass").innerHTML="Congrats! You've passed";
    }
    else if(percent>=50){
        document.getElementById("pass").innerHTML="Bhoom! Just pass";
    }
    else{
        document.getElementById("pass").innerHTML="Better luck next time!";
    }
    
}
