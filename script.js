
        let computerScore = 0;
        let playerScore = 0;
        let roundNum = 1;
        

        //declare player var
        var rockButton = document.querySelector (".rockPlayer"); 
        var paperButton = document.querySelector ('.paperPlayer'); 
        var scissorsButton = document.querySelector ('.scissorsPlayer');
        var userScore = document.querySelector ('.user-score');
        var score = document.querySelector ('.score');
        var playScore = document.querySelector ('.play-score');

        //declare computer var
        var rockComputer = document.querySelector ('.rockComputer'); 
        var paperComputer = document.querySelector ('.paperComputer'); 
        var scissorsComputer = document.querySelector ('.scissorsComputer');
        var compScore = document.querySelector ('.comp-score');
        var refresh = document.querySelector('.refresh');
       
        //functions 
        //function to start again and refresh
        function refreshPage (){
            if (playerScore >= 3 || computerScore >=3){
            refresh.textContent = 'play again';
        }
        }

        function computerPlay() {
            const number = Math.floor(Math.random() * 1000);
            if (number % 3 === 0) {
                    return 'rock';
            }
            if (number % 3 === 1) {
                    return 'paper';
            }
            return 'scissors';
    }

        function playRound (playerSelection, computerSelection){
        playerSelection=this.dataset.button;
        computerSelection= computerPlay();
            if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
            ( playerSelection === 'scissors' && computerSelection === 'paper')||
            ( playerSelection === 'paper' && computerSelection === 'rock'&& ( playerScore <= 3 || computerScore <= 3)))
            {
                playerScore++;
                userScore.textContent = roundNum++;
                score.textContent = 'you won ';
                playScore.textContent = playerScore;

                if (playerScore >= 3){
                    rockButton.removeEventListener("click", playRound);
                    paperButton.removeEventListener("click", playRound);
                    scissorsButton.removeEventListener("click", playRound);
                    refreshPage();
                }
                
                }  
                else if (( playerSelection === 'rock' && computerSelection === 'paper') ||
                ( playerSelection === 'scissors' && computerSelection === 'rock') ||
                ( playerSelection === 'paper' && computerSelection === 'scissors' && ( playerScore <= 3 || computerScore <= 3)))
                {    
                computerScore++;
                userScore.textContent = roundNum++;
                compScore.textContent = computerScore;
                
                score.textContent = 'you lose';
                if (computerScore>= 3){
                    rockButton.removeEventListener("click", playRound);
                    paperButton.removeEventListener("click", playRound);
                    scissorsButton.removeEventListener("click", playRound);
                    refreshPage();
                }
                }      
                else
                {
                
                userScore.textContent = roundNum++;
                
                score.textContent = 'tie try again';
                
                }
                refreshPage();
                } 
            
                function refreshPageAll (){
                    if (playerScore >= 3 || computerScore >= 3){
                    window.location.reload(true);
                    }
                }
            
          
        
        refresh.addEventListener('click', refreshPageAll);
        rockButton.addEventListener("click", playRound);
        paperButton.addEventListener("click", playRound);
        scissorsButton.addEventListener("click", playRound);