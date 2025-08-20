// /search icon event listener
navi.addEventListener("click",()=>{
    if(search.value.length>0){
        Array.from(desc).findIndex((li)=>{
        if(li.innerHTML.includes(search.value)){
            search.style.color = 'limegreen';
            let href = "#" + search.value;
            isearch.setAttribute("href", href);
        }
        else{
            alert("No matching values found!");
             isearch.removeAttribute("href");
        }
    })
    }
    else if (search.value.length==0){
        alert("Please Enter value to search!!")
    //     isearch.removeAttribute("href");
    //     search.value = "no values found!";
    //     search.style.color = 'red';
    }
})





//Add to Cart Logic.













