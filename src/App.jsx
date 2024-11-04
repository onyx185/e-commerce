import HomePage from './page/HomePage.component'
import { productCategories } from "./page/products-categories"

function App() {

  return (
    <div>
      <HomePage productCategories={productCategories?.sections} />
    </div>
  )
}

export default App
