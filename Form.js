class Form {

  constructor() {
    this.Breakfast = createInput("Breakfast");
    this.Lunch = createInput("Lunch");
    this.Snacks = createInput("Snacks");
    this.Dinner = createInput("Dinner");
    this.Calories2 = createInput("Total Calories");
    this.Exersise = createInput("Total Exersise");
    this.Calories1 = createInput("Calories Goal");
    this.button = createButton('Play Basketball!');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton('Reset');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("Kids fitness Pal");
    this.title.position(displayWidth/2 - 50, 0);

    this.Calories2.position(displayWidth/2 - 80 , displayHeight/2 - 100);
    this.Exersise.position(displayWidth/2 - 40 , displayHeight/2 - 120);
    this.Calories1.position(displayWidth/2 - 40 , displayHeight/2 - 100);
    this.Breakfast.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.Lunch.position(displayWidth/2 - 40 , displayHeight/2 - 60);
    this.Snacks.position(displayWidth/2 - 40 , displayHeight/2 - 40);
    this.Dinner.position(displayWidth/2 - 40 , displayHeight/2 - 20);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.reset.position(displayWidth-100,20);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });

    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
    });

  }
}
