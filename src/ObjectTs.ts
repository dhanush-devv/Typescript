const chai={
    name:"Masala Chai",
    price:20,
    isHot:true
}

let tea:{
    name:string;
    price:number;
    isHot:boolean
}

tea={
    name:"Ginger tea",
    price:50,
    isHot:false
}

type Tea={
    name:string;
    price:number;
    ingredients:string[]
}

const adrakChai:Tea={
    name:"adrakchai",
    price:25,
    ingredients:["ginger","tea leaves"]
}

type Cup={
    size:string
}
let smallCup:Cup={
    size:"200ml"
}

let bigCup={size:"500ml",material:"steal"}
smallCup=bigCup