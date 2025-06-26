  let modeBtn = document.querySelector("#display");
  let body = document.querySelector("body");

  let mode = "Light";

  modeBtn.addEventListener("click",()=>{
    if(mode==="Light") {
        mode="Dark";
        body.classList.add("Dark")
        body.classList.remove("Light")
        display.innerText="Light";
    }
    else{
        mode="Light";
        body.classList.add("Light")
        body.classList.remove("Dark")
        display.innerText="Dark";
    }
    console.log(mode);
  });