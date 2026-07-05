let inp=document.querySelector("input");
let btn=document.querySelector("button");
let ul=document.querySelector("ul");
btn.addEventListener("click",function(event) {
    let item=document.createElement("li");
    item.innerText=inp.value;
    
    let dltbtn=document.createElement("button");
    dltbtn.innerText="Delete";
    dltbtn.classList.add("delete");
    
    item.append(dltbtn);
    ul.append(item);
    inp.value="";
});

ul.addEventListener("click",function (event) {
    if(event.target.nodeName=="BUTTON")
    {
        let listItm=event.target.parentElement;
        alert(`${listItm.innerText}`);
        listItm.remove();
    }
    
});


// let dlts=document.querySelectorAll(".delete");
// for(dlt of dlts)
// {
//     dlt.addEventListener("click",function (event) {
//         let prnt=this.parentElement;
//         prnt.remove();
//     });
// }

