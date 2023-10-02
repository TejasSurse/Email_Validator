SubmitBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    console.log("Clicked");
    ResultCont.innerHTML = `<img width = "123px" src="img/loading.svg" alt=""></img>`
  
    let key = "ema_live_D9N7FNH0dVF9FHCXSJHu1spAqmH3a7YgOp4gFIes";
    let email = document.querySelector("#username").value;
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;
  
    try {
      let res = await fetch(url);
      let result = await res.json();
  
      let str = "";
      for (let key of Object.keys(result)) {
        if (result[key] !== "" && result[key] !== " ") {
          str += `<div><strong>${key}:</strong> ${result[key]}</div>`;
        }
      }
  
      console.log(str);
      ResultCont.innerHTML = str;
    } catch (error) {
      console.error("Error:", error);
    }
  });
  