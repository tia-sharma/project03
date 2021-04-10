class Stone {
  constructor(x, y) {
    var options = {
      'density':0.8,
      'friction': 0.9,
      'restitution':12
    };
    this.body = Bodies.rectangle(x, y, 50, 50, options);
    this.width = 40;
    this.height = 140;
    World.add(world, this.body);
  };
  display(){
    
    push();
    strokeWeight(3);
    stroke('white')
    fill('blue')
    rectMode(CENTER)
    rect(0, 0, this.width, this.height);
    pop();
  };
};