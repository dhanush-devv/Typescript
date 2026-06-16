
import "./App.css"
import CardList from "./components/CardList.tsx"

import { ChaiCard } from './components/ChaiCard.tsx'
import { Counter } from "./components/Counter.tsx"
import OrderForm from "./components/OrderForm.tsx"
import type { Card } from "./types.ts"

const menu:Card[]=[
  {id:1,name:"Masala",price:30},
  {id:2,name:"Ginger",price:50},
  {id:3,name:"Lemon",price:40},
]
const App = () => {
  return (
    <div>
      <ChaiCard 
      name="Iphone"
      price={5000}
      />
      <div>
        <Counter/>
      </div>
      {/* <div>
        <CardList items={menu}/>
      </div> */}
      <div>
<OrderForm onSubmit={(order)=>{
  console.log(order.name,order.cups)
}}/>
      </div>
    </div>
  )
}

export default App
