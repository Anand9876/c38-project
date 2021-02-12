class Game{
    constructor(){}
    
    getState(){
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
           gameState = data.val();
        })
       
      }
    
      update(state){
        database.ref('/').update({
          gameState: state
        });
      }
    
      async start(){
         if(gameState === 0){
            runner = new Runner();
             var runnerCountRef = await database.ref('runnerCount').once("value");
              if(runnerCountRef.exists()){
                 runnerCount = runnerCountRef.val();
                  runner.getCount();
                 } 
                 form = new Form()
                  form.display();
                 } 
                }
  play(){
  form.hide();
   textSize(30);
    text("Game Start", 120, 100) 
    Runner.getContestantInfo();
     if(allRunners !== undefined){
        var display_position = 130;
         for(var rns in allRunners){
            if (rns === "runner" + runner.index)
             fill("red")
              else fill("black");
               display_position+=20;
                textSize(15);
                 text(allRunners[rns].name + ": " + allRunners[rns].distance,
                  120,display_position)
                  } 
                 } 
                 if(keyIsDown(UP_ARROW) && runner.index !== null){
                    runner.distance +=50
                     runner.update();
                    }
                    } 
                  }
                   
                   

