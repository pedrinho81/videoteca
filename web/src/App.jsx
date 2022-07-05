import './App.css'

import Layout from './components/Layout/Index'
import { VideoContextProvider } from './contexts/VideoContext'

function App() {
  return (
    <>
    <VideoContextProvider value={""}>
      <Layout/>
    </VideoContextProvider>
    </>
  )
}

export default App
