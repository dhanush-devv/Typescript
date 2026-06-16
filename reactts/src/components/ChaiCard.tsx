
interface CardProp{
    name:string;
    price:number;
    isSpecial?:boolean
}
export function ChaiCard({name,price,isSpecial=false}: CardProp) {
   return(
    <article>
        <h2>
            {name} {isSpecial  && <span>hi</span>}
        </h2>
        <p>{price}</p>
    </article>
   ) 
}