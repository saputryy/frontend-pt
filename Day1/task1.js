const data{nama:["juan,avav,adlin"],nim:["F5512123061,f5512123062,F5512123063"]};
const btn= document.getElementById("tampilBtn");
const btng=document.getElementById("goneBtn");
const tbody = document.querySelector("tbody");
btn.addEventListener("click",function(){
    tbody.innerHTML="";
    for(let i=0;i<data.nama.length;i++){
        const tr=document.createElement("tr");
       tr.innerHTML=`<td>$(data.nama{i})$(data.nim{i})</td>`;
       tbody.appendChild(tr);  }
})
btng.addEventListener("click",function(){
tbody.innerHTML=""
});