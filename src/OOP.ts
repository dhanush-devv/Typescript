// class Chai{
//     flavour:string;
//     //price:number

//     // constructor(flavour:string,price:number){
//     //     this.flavour=flavour
//     //     this.price=price
//     // }
//     constructor(flavour:string){
//         this.flavour=flavour
//         console.log(this);
        
//     }
// }

// const masalaChai=new Chai("Ginger")
// masalaChai.flavour="masala"

class Chai{
    public flavour:string="Masala"

    private secreteIngredients="Cardamon"

    revel(){
        return this.secreteIngredients //ok

    }
    //protected shopName="Chai corner"
}

class Shop{
    protected shopName="Chai corner"
}

class Branch extends Shop{
    getName(){
        return this.shopName //ok
    }
}

//new Branch().getName()
//const c=new Chai()
//c.revel() // we will not get private deirectly 

class Walet{
    #balance=100 //private

    getBalance(){
        return this.#balance
    }
}

const w=new Walet()
w.getBalance()

class Cup{
    readonly capacity:number=250

    constructor(capacity:number){
        this.capacity=capacity
    }
}

class ModernChai{
    private _sugar:number=2

    get sugar(){
        return this._sugar
    }
    set sugar(value:number){
        if(value>5) throw new Error("Too sweet");
        this._sugar=value
    }
}

const c=new ModernChai()
c.sugar=3

class EkChai{
    static shopName="Chaicode caffee"

    constructor(public flavour:string){

    }
}
console.log(EkChai.shopName)

abstract class Drink{
    abstract make():void
}

class MyChai extends Drink{
    make() {
       console.log("Brewing chai") 
    }
}

