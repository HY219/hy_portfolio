/** top_list */
const home = document.querySelectorAll(".home");
const tech = document.querySelectorAll(".tech");
const award = document.querySelectorAll(".award");
const project = document.querySelectorAll(".project");

/** home */
for(const el of home){
    el.addEventListener("click", ()=>{
        //content.innerHTML = "abc";
        document.getElementById("page_tech").style.display="none"
        document.getElementById("page_award").style.display="none"
        document.getElementById("page_project").style.display="none"
        console.log("abc");
    })
}

/** tech */
for(const el of tech){
    el.addEventListener("click", ()=>{
        //content.innerHTML = "abc";
        document.getElementById("page_tech").style.display="inline"
        document.getElementById("page_award").style.display="none"
        document.getElementById("page_project").style.display="none"
        console.log("abc");
    })
}

/** award */
for(const el of award){
    el.addEventListener("click", ()=>{
        //content.innerHTML = "abc";
        document.getElementById("page_tech").style.display="none"
        document.getElementById("page_award").style.display="inline"
        document.getElementById("page_project").style.display="none"
        console.log("abc");
    })
}

/** award */
for(const el of project){
    el.addEventListener("click", ()=>{
        //content.innerHTML = "abc";
        document.getElementById("page_tech").style.display="none"
        document.getElementById("page_award").style.display="none"
        document.getElementById("page_project").style.display="inline"
        console.log("abc");
    })
}
