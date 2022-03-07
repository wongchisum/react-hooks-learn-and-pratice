import { useRoutes } from 'react-router-dom'
import { RouterConfig } from "./routes";


function App() {
  const elements = useRoutes(RouterConfig)
  return elements;
}

export default App;
