import type { Card } from "../types"
import { ChaiCard } from "./ChaiCard"

interface CardListProps{
    items:Card[]
}

const CardList = ({items}:CardListProps) => {
  return (
    <div>
      {items.map((card)=>(
        <ChaiCard
        key={card.id}
        name={card.name}
        price={card.price}
        isSpecial={card.price > 45}
        />
      ))}
    </div>
  )
}

export default CardList
