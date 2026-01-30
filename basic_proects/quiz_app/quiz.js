const { createElement } = require("react");

const questions = [
        {
            question: "What does HTML stand for?",
            options: [
                "Hyper Text Markup Language",
                "High Text Machine Language",
                "Hyperlinks Text Mark Language"
            ],
            answer: 0
        },
        {
            question: "Which language is used for styling web pages?",
            options: ["HTML", "CSS", "JavaScript"],
            answer: 1
        },
        {
            question: "Which is not a JavaScript framework?",
            options: ["React", "Angular", "Django"],
            answer: 2
        }
    ];
let currentquestion=0;
let totalscore=0;

const questionEl=document.getElementById("questions");
const optionEl=document.getElementById("options");
const next=document.getElementById("nextbutton");
const scoreEl=document.getElementById("score");

function loadquestion(){
    optionEl.innerHTML='';
    scoreEl.innerHTML='';
    
    const q= questions[currentquestion];
    question.innerText=q[question];
    q.options.forEach((option,index)=>{
        const div=createElement('div');
        div.innerText=option;
        div.classList.add("option");
        div.onclick=()=>{
            checkanswer();
        }
        optionEl.appendChild(div);

    });


}
function checkanswer(ans){
    if (ans===questions[currentquestion].answer){
        totalscore++;
    }
    currentquestion++;
    if (currentquestion<questions.length()){
        loadquestion(); 
    }
    else{
        showresult();

    }

}
function showresult(){
    questionEl.innerText = "Quiz Completed 🎉";
        optionsEl.innerHTML = "";
        nextBtn.style.display = "none";
        scoreEl.innerText = `Your Score: ${score} / ${questions.length}`;
    
}
nextBtn.onclick()=loadquestion;
loadquestion();
 