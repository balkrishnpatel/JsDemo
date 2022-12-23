class Car{
    setName(name){
        this.name=name;
    }
    startEngine(){
        console.log('Engine started for'+this.name);
    }
    stoptEngine(){
        console.log('Engine stop for'+this.name);
    }
}
class Honda extends Car{
    setSpeed(speed){
        console.log('Top Speed for '+this.name+' is '+speed)
    }
}
let honda =new Honda();
honda.setName('Krisna');
honda.startEngine();
honda.stoptEngine();
honda.setSpeed('120');