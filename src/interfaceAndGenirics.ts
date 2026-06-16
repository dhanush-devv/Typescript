interface Chai{
    flavour:string;
    price:number;
    milk?:boolean
}

const masala:Chai={
    flavour:"masla",
    price:30
}

interface Shop{
    readonly id:number
    name:string
}

const s:Shop={
    id:1,
    name:"chai code coffee"
}

//s.id=2

interface TeaMachine{
    start():void;
    stop():void
}

const machine:TeaMachine={
    start(){
        console.log("Start")
    },
    stop(){
        console.log("Stop")
    }
}
//signature
interface ChaiRating{
    [flavor:string]:number
}

const rating:ChaiRating={
    masala:4.4,
    ginger:5
}

interface User{
    name:string
}

interface User{
    age:number
}

const u:User={
    name:"Dhanush",
    age:20
}

interface A{a:string}

interface B{b:string}

interface C extends A, B{

}


