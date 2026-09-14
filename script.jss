let photo="";


document.getElementById("photo").onchange=function(e){

let reader=new FileReader();

reader.onload=function(){

photo=reader.result;

document.getElementById("memberPhoto").src=photo;

}

reader.readAsDataURL(e.target.files[0]);

}



function generate(){


let name=document.getElementById("name").value;

let age=document.getElementById("age").value;

let pack=document.getElementById("package").value;

let start=new Date(document.getElementById("start").value);



let id="SKG"+Date.now();


start.setMonth(start.getMonth()+1);



document.getElementById("memberName").innerHTML=name;

document.getElementById("idMember").innerHTML=id;


document.getElementById("memberPackage").innerHTML=
pack+" ("+age+" Tahun)";


document.getElementById("expired").innerHTML=
start.toLocaleDateString("id-ID");



document.getElementById("qr").innerHTML="";


new QRCode(
document.getElementById("qr"),
id
);


}



function download(){

html2canvas(document.getElementById("card"))
.then(canvas=>{

let a=document.createElement("a");

a.download="member-card.png";

a.href=canvas.toDataURL();

a.click();

});


      }
