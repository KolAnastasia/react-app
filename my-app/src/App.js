import Header  from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";


const App = () => {
  const styleLayout = {backgroundImage: 'bg1'};
  return (
    <>
      <Header 
        title = 'This is Title'
        descr = "This is new descriptions"
      />
      <Layout 
        title = "First Layout"
        descr = "Descriptions First Layout"
        urlBg = "Firstbg"

      />
      <Layout 
       title = "Second Layout"
       descr = "Descriptions Second Layout"
       colorBg = "red"
       />
      <Layout 
       title = "Third Layout"
       descr = "Descriptions Third Layout"
       urlBg = "Thirdbg"
       
       />
      <Footer /> 
    </>
  )
}

export default App;