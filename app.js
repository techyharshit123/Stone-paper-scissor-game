const scoreCard=document.querySelector('.scoreCard');
    const gameArea=document.querySelector('.gameArea');
    const startInfo=document.querySelector('.startInfo')
    const startButton=document.querySelector('.startButton');

    const playerHand=document.querySelector('.playerHand');
    const computerHand=document.querySelector('.computerHand');
    const hands=document.querySelector('.hands img');

    const playerScore=document.querySelector('.playerScore p');
    const computerScore=document.querySelector('.computerScore p');

    let pScore=0;
    let cScore=0;


    startButton.addEventListener('click',start);

    let player={};
    
    // starting the game
    function start(){
        player.start=true;

        scoreCard.classList.remove('fadeOut');
        scoreCard.classList.add('fadeIn');
        startInfo.classList.add('fadeOut');
        gameArea.classList.remove('fadeOut');
        gameArea.classList.add('fadeIn');

        play();
    }

    // play match
    function play(){
      const playerOptions=document.querySelectorAll('.moves button');

      playerOptions.forEach( function(item) {
              item.addEventListener("click", function() {

                // computer options
               let computerOptions=["stone","scissor","paper"]

               // computer choice
              let computerNumber=Math.floor(Math.random()*3);
              let computerChoice=computerOptions[computerNumber];
              
              //starting the animation
              playerHand.style.animation="shakePlayer 1s ease";
              computerHand.style.animation="shakeComputer 1s ease";

               const hands=document.querySelectorAll('.hands img');

               //animation end
              hands.forEach( function(item) {
                item.addEventListener('animationend', function(){
                  this.style.animation="";
                });
              });

             setTimeout(()=>{
              updateHands(this.textContent,computerChoice);
              //updating the hands images
              function updateHands(playerChoice,computerChoice)
              {
                 computerHand.src=`${computerChoice}.png`;
                playerHand.src=`${playerChoice}.png`;
              }

              //compare the hands
              compareHands(this.textContent,computerChoice)
            }, 1000);
      });
           
    });

    
      function updateScore()
      {
        playerScore.textContent=pScore;
        computerScore.textContent=cScore;
      }


      function compareHands(playerChoice,computerChoice)
      {

        const winner=document.querySelector('.gameArea h1')

        //Check for a tie
        if(playerChoice===computerChoice)
        {
          winner.textContent="It's a tie";
          winner.style.color = 'yellow'
          updateScore();
          return;
        }

        //Check for stone
        if(playerChoice==="stone")
        {
          if(computerChoice==="paper")
          {
            winner.textContent="You lost";
            winner.style.color = '#EA1017';
            cScore++;
            updateScore();
            return;
          }
          else
          {
            winner.textContent="You win";
            winner.style.color = '#009431'
            pScore++;
            updateScore();
            return;
          }
        }

        //Check for paper
        if(playerChoice==="paper")
        {
          if(computerChoice==="scissor")
          {
            winner.textContent="You lost";
            winner.style.color = '#EA1017';
            cScore++;
            updateScore();
            return;
          }
          else
          {
            winner.textContent="You win";
            winner.style.color = '#009431';
            pScore++;
            updateScore();
            return;
          }
        }

        //Check for scissor
        if(playerChoice==="scissor")
        {
          if(computerChoice==="stone")
          {
            winner.textContent="You lost";
            winner.style.color = '#EA1017';
            cScore++;
            updateScore();
            return;
          }
          else
          {
            winner.textContent="You win";
            winner.style.color = '#009431';
            pScore++;
            updateScore();
            return;
          }
        }
      }
    }