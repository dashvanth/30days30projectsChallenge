const form = document.querySelector("form");
// adding these here will give you empty value when you start the page or refresh 
// parseInt(document.querySelector("#height").value)
form.addEventListener("submit", (e)=>{
    e.preventDefault()

    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const results = document.querySelector("#results");

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height. ${height}`
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight. ${weight}`
    } else{
        const BMI = (weight / ((height*height)/10000)).toFixed(2);
        if(BMI < 18.6){
            results.innerHTML = `<span>${BMI} <br> You are Under Weight!</span`;
        }else if(BMI > 18.6 && BMI < 24.9){
            results.innerHTML = `<span>${BMI} <br> You are in Normal Range!</span`;
        }else if(BMI > 24.9){
            results.innerHTML = `<span>${BMI} <br> You are OverWeight!</span`;
        }
    }
})