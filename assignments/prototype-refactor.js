

// Prototype Refactor

// 1. Copy and paste your code or the solution from yesterday

class GameObject {
      constructor (aGameObject){
            this.createdAt = aGameObject.createdAt,
            this.name = aGameObject.name,
            this.dimensions = aGameObject.dimensions,
            console.log(this);
      }
      destroy(){
            console.log (`${this.name} was removed from the game.`);
      }
}
console.log("gameInfoOne: ");
var gameInfoOne = new GameObject({
      createdAt: 9987,
      name: "Jackie",
      dimensions: 500,
});
gameInfoOne.destroy(); 

class CharacterStats extends GameObject{
      constructor(aCharacterStats){
            super(aCharacterStats);
            this.healthPoints = aCharacterStats.healthPoints;
      }
      takeDamage(){
            return (`${this.name} took damage.`);
      }
}

console.log("CharacterStats charStat: ");
var charStat = new CharacterStats({
      createdAt: 1111,
      name: "Bob",
      dimensions: 70,
      healthPoints: 4
 });
console.log(charStat.takeDamage()); 
charStat.destroy(); 

class Humanoid extends CharacterStats{
      constructor(attrs){
            super(attrs);
            this.team = attrs.team;
            this.weapons = attrs.weapons;
            this.language = attrs.language;
      }
      greet() {
            return (`${this.name} offers a greeting in ${this.language}`)
      }     
} 
console.log("Humanoid:");
var human = new Humanoid({
      createdAt: 2222,
      name: "Evan",
      dimensions: 66,
      healthPoints: 67, 
      team: "Patriots", 
      weapon: "sword", 
      language: "Spanish"
});
console.log(human.greet()); 
console.log(human.takeDamage()); 
human.destroy();
   
// 2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.


