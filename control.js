let  enigmeShow=0;
    class Question {
        constructor(text, choices, answer) {
          this.text = text;
          this.choices = choices;
          this.answer = answer;
        }
        isCorrectAnswer(choice) {
          return this.answer === choice;
        }
      }
      let questions =[
        new Question(
          "[Et Voila le C ;)]: Si je veux créé une variable qui comprend une phrase en c. j'utilise quelles libraires.",
          ["char", "string", "int", "double"],"string"),
     
        new Question(
          "[Moins drôle mais bon ;) ]: La dureté de la vie nous amène à avoir une mauvaise pense du monde. À mon avis, la vie est simple du moins simple en simplifiant les choses qui la rendent compliqué. Tu en penses quoi ?",
          ["Je valide", " Sans importance", "Pas trop simple", "Je passe"],"Je passe"),
     
        new Question(
            "[Question bizarre! ]: Spécial est un mélange entre unique et très rare",
            ["Je valide à 1000%", "Ja valide 31%", "Ayema Ayema :)", "Pour Quoi cette question arabi l3alamin"],"Je valide à 1000%"),
        
        new Question(
            "Quelle est la chose que t'aimerais faire parmi ces 4.",
            ["Faire du parachute", "Dormir", "Nager", "Acheter un chiwawa"],"Dormir"),
        
        new Question(
              "[Question bizarre! ]: Spécial est un mélange entre unique et très rare",
              ["Je valide à 1000%", "Ja valide 31%", "Ayema Ayema :)", "Pour Quoi cette question arabi l3alamin"],"Je valide à 1000%"),
          
        new Question(
            "[Encore du C ;)]: Supposons j'ai une variable entière, je dois utiliser quel type de variable",
            ["int", "unsigned int", "double", "char"],"double")
        ];
      
      console.log(questions);
      
      class Quiz {
        constructor(questions) {
          this.score = 0;
          this.questions = questions;
          this.currentQuestionIndex = 0;
        }
        getCurrentQuestion() {
          return this.questions[this.currentQuestionIndex];
        }
        guess(answer) {
          if (this.getCurrentQuestion().isCorrectAnswer(answer)) {
            this.score++;
          }
          this.currentQuestionIndex++;
        }
        hasEnded() {
          return this.currentQuestionIndex >= this.questions.length;
        }
        }
        /*
    var myEle = document.getElementById("guess0");
   // myEle.innerHTML(questions[0].text);
   var txt=questions[0].text;
    if(myEle===null){
        alert('does not exist!');
    }
    else{
        console.log(myEle);
        myEle.textContent=questions[0].text;
    }
    //console.log(element);
    console.log(questions[0].text);
    //element.innerHTML(questions[0].text);
      */
      // Regroup all  functions relative to the App Display
      const display = {
        elementShown: function(id, text) {
          let element = document.getElementById(id);
          //console.log(id+element);
          element.textContent = text;
        },
        elementShown:function (id, text,i)
        {
            let element = document.getElementById(id);
            
            element.innerHTML = text;
        },
        endQuiz: function() {
          endQuizHTML = `
          <h1 id="quiz-termine" onload="prankActive();" class="superws">Quiz terminé !</h1>
          <h3 class="superws"> Votre score est de : ${quiz.score} / ${quiz.questions.length}</h3>
          <h3 class="superws"> Et je te dis que la surprise est pas loin, il suffit de suivre la recette ;)</br>
          J'ai un petit conseille suit les dala3 et les pink ;)</h3>
          <h2 class="superws">t'es vraiment prete</h2>
          <div id="recette" class="superws">
          <img src="ressources/recetteJeu.png" id="recette-image">
          </div>`;
        
          this.elementShown("quiz", endQuizHTML,1);
        
        },
        question: function() {
          this.elementShown("question", quiz.getCurrentQuestion().text);
        },
        choices: function() {
          let choices = quiz.getCurrentQuestion().choices;
      
          guessHandler = (id, guess) => {
            document.getElementById(id).onclick = function() {
              quiz.guess(guess);
              quizApp();
            }
          }
          // display choices and handle guess
          for(let i = 0; i < choices.length; i++) {
            this.elementShown("choice" + i, choices[i]);
            guessHandler("guess" + i, choices[i]);
          }
        },
        progress: function() {
          let currentQuestionNumber = quiz.currentQuestionIndex + 1;
          this.elementShown("progress", "Question " + currentQuestionNumber + " sur " + quiz.questions.length);
        }

      };
      
       function activePageGame(){
         console.log("activehdhjs");
        let passewordws=document.getElementById("inputpassword");
        let passewordPageGame=passewordws.value; 
        console.log(passewordPageGame);
         if(
           passewordPageGame==="Dala3Station"
         ||passewordPageGame==="dala3Station"
         ||passewordPageGame==="Dala3station"
         ||passewordPageGame==="dala3station"
         ||passewordPageGame==="Dala3 Station"
         ||passewordPageGame==="Dala3 station"
         ||passewordPageGame==="dala3 Station"
         ||passewordPageGame==="dala3 station"
         ||passewordPageGame==="dala3 station"
         ||passewordPageGame==="DalarStation"
         ||passewordPageGame==="dalarStation"
         ||passewordPageGame==="Dalarstation"
         ||passewordPageGame==="dalarstation"
         ||passewordPageGame==="Dalar Station"
         ||passewordPageGame==="Dalar station"
         ||passewordPageGame==="dalar Station"
         ||passewordPageGame==="dalar station"
         ||passewordPageGame==="dalar station"){
           console.log("ok");

           let pagehello=document.getElementById("pagehello");
           pagehello.style.display="none";
           let quizmenuValue=document.getElementById("quizmenu");
           quizmenuValue.style.display="block";
           console.log(quizmenuValue);
           let quizValue=document.getElementById("quiz");
           quizValue.style.display="block";
           console.log(quizValue);
          }
      }

      function prankActive(){
        console.log("prankActive");
        for (let i = 0; i < 10; i++){

        }
        let prankActivated=document.getElementById("quiz-termine");
        prankActivated.textContent="It's juste a prank" ; 
       
      }

      function activeStartAuthen(){
        let activeAuth=document.getElementById("active-authen");
        activeAuth.style.display="none";  
        
        let imagebegin=document.getElementById("imagebegin");
        imagebegin.setAttribute('src', 'ressources/dala3news.gif');

        let solve=document.getElementById("solve");
        solve.style.display="block";  

        let pagehello=document.getElementById("passewordws");
        pagehello.style.display="block";  
      }
      var prankActivate=0;
      var contactActivatews=0;
      var aboutActivatews=0;
      var activeContact=false;
      var activeAbout=false;

      function activePrank(){
        prankActivate++;
        console.log(prankActivate);
        if(prankActivate>=31){
        let code1=document.getElementById("code1");
        code1.display="none";
        //logoSite.setAttribute('src', 'ressources/nbLogo.gif');

        let about=document.getElementById("about-str");
        about.style.backgroundColor = '#eb67b0';
        activeAbout=true;
        prankActivate=0;
      }
    }

    function executeAbout(){
      if(activeAbout===false){
        return;
      }
      aboutActivatews++
    if(aboutActivatews>=5)  
    {
     
      let about=document.getElementById("about-str");
      about.style. display = 'none';
      let contact=document.getElementById("contact-str");
        contact.style. backgroundColor = '#eb67b0';
        activeContact=true;
    }
    }

      function executeContact(){
        if(activeContact===false){
          return;
        }
        contactActivatews++
      if(contactActivatews>=5)  
      {
        let contact=document.getElementById("contact-str");
        contact.style.display = 'none';
        let start=document.getElementById("start-str");
        start.style. backgroundColor = '#eb67b0';
        
      }
      }
      function executeStart(){
        let quiz=document.getElementById("quiz");
        quiz.style.display = 'none';

        let superws=document.getElementById("superws");
        superws.style.display = 'block';
        superws.style.display = 'flex';         
              
        this.elementShown("quizmenu", endQuizHTML,1);
       }
      
      
      // Game logic


      quizApp = () => {
        if (quiz.hasEnded()) {
          display.endQuiz();
        } else {
          display.question();
          display.choices ();
          display.progress();
        } 
      }

      // Create Quiz
      let quiz = new Quiz(questions);
      quizApp();

      anonymous =() =>{
          let elementY= document.getElementById("code1");
          console.log(elementY);
      }
      anonymous();
           console.log(quiz);