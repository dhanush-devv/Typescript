const chaiFlavors:string[]=["Masala","Adrak"]
const rating:Array<number>=[4.0,5.0];

type chai={
    name:string;
    price:number
}

const menu:chai[]=[
    {name:"masala",price:20}
]

//readonly
const cities:readonly string[]=["Bengaluru","Mumbai"]

const table:number[][]=[
    [1,2,3],
    [4,5,6]
]

//tuples
let chaiTuple:[string,number];
chaiTuple=["Masala",20]

let userInfo:[string,number,boolean?]
userInfo=["Dhanush",1000]

const location:readonly [number,number]=[28.66,32.22];

const chaiItems:[name:string,price:number]=["Masala",30]

enum cupSize{
    SMALL,
    MEDIUM,
    LARGE
}

const size=cupSize.LARGE

enum Status{
    PENDING=100,
    SERVED,//101
    CANCELLED//102
}

enum ChaiType{
    MASALA="masala",
    GINGER="ginger"
}

function makeChai(type:ChaiType) {
    console.log(`Making ${type}`)
}
makeChai(ChaiType.GINGER)

enum RandomEnum{
    ID=1,
    NAME="chai"
}

const enum Sugars{
    LOW=1,
    MEDIUM=2,
    SUGAR=3
}
 const s=Sugars.LOW;