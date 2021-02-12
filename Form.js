class Form {
    constructor() {
      this.input=createInput("Enter your name here")
      this.button=createButton("Run")
      this.title=createElement("h3")
      this.greeting=createElement("h2")
     
  
    }
    hide(){
      this.input.hide();
      this.button.hide();
      this.title.hide();
      this.greeting.hide();

    }
    
  
    display(){
      this.input.position(200,130)
      this.button.position(230,130)
      this.title.html("Game of Running")
      this.title.position("Width/2")
      
  
    }
  }
  