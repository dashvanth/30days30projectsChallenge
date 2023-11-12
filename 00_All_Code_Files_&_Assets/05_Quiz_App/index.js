// selecting elements 

const questionElement = document.querySelector("#question");
const btns = document.querySelectorAll(".btn");
const allbtns = document.querySelector(".ans-btns");
const answerText = document.querySelector("#answer");
const nextBtn = document.querySelector("#next-btn");


const URL = "https://opentdb.com/api.php?amount=10";

async function getRandomQuiz(){
    // fetching the data using API 
    questionElement.innerHTML = "Loading please wait..!";
    const response = await fetch(URL);
    const data = await response.json();

    // displaying the question 
    questionElement.innerHTML = `${data.results[0].question}`;
    const allAnswers = [...data.results[0].incorrect_answers, data.results[0].correct_answer];

    // shuffling the options 
    const randomArray = allAnswers.sort(() => (Math.random() > .5) ? 1 : -1);
    
    // checking whether the option is < 2 
    if(data.results[0].incorrect_answers.length<2){
        btns[2].style.display = "none";
        btns[3].style.display = "none";
    }


    btns.forEach((text,index)=>{
        // adding options text to buttons UI
        text.innerHTML = randomArray[index];
        
        // checking if clicked event is right / wrong and displaying answer 
        text.addEventListener("click",(e)=>{
            if(text.innerHTML == data.results[0].correct_answer){
                // text.innerHTML = `${randomAns}`
                text.style.backgroundColor = "#70f87080"
                answerText.style.display = "block";

        }else{
            text.style.backgroundColor = "#f8877080";
            answerText.innerHTML = `Correct Answer: ${data.results[0].correct_answer}`;
            answerText.style.display = "block";
        }
        
        // displaying next btn after clicking the options 
        nextBtn.style.display = "block";

        // reloading page to give new quiz 
        nextBtn.addEventListener("click",()=>{
            // Problem : the function calling above 1 times 
            // getRandomQuiz();
            
            // used reload function to solve this 
            window.setTimeout( function() {
                window.location.reload();
              }, 100);
            answerText.style.display = "none";
            nextBtn.style.display = "none";
            })
        },{once:true})

    })

}
getRandomQuiz();