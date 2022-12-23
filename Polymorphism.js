 class Animal{
    eatFood(){
        console.log('eat veg');
    }
    drinkWater(){
      console.log('water in super')
    }
 }
 class Alligator extends Animal{
    eatFood(){
        
        console.log('eat non veg');
    }
    
 }
 let emp1 =new Alligator();
    emp1.eatFood();
    emp1.drinkWater();