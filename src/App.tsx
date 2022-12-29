import Nav from "./components/nav"
import bgvideo from "./assets/bgvideo.mp4"
import Card from "./components/card"
import img from "./assets/img.png"
function App() {


  return (
    <div className="flex flex-col bg-slate-900">
    <div className="">
    <Nav />
    </div>
    <div className=" items-center min-h-screen relative flex flex-col  justify-center overflow-hidden ">
      <div className="relative z-10 p-5 text-sm m-16 text-center bg-opacity-95 text-gray-900 bg-white rounded-md transform -translate-y-44 sm:-translate-y-56 lg:w-96 lg:text-base"> 
      Trabajamos para que puedas mostrar tus productos, tu negocio, tu calidad, tu comunidad, de la manera mas <strong>sencilla y transparente. </strong> 
      <br />
      Aunamos tu vision y objetivos en una página para que puedas compartir,
      crecer y darte a conocer de una manera <strong>profesional. </strong> 
      </div>
    
        <video autoPlay loop muted
          className="absolute z-0 max-w-none  lg:w-screen overflow-hidden">
          <source src={bgvideo} type="video/mp4"  />
        </video>
      
    </div>
    <div className="flex flex-col sm:flex-row transform -translate-y-96  justify-items-end bg-hero sm:bg-auto bg-no-repeat h-screen sm:justify-around "  >

      <div className=" flex flex-col items-center translate-y-4  sm:flex-row  sm:items-start " >
      <span className="text-white text-xl uppercase sm:hidden "><strong>Beneficios</strong></span>
      <div className="flex flex-col sm:flex-row sm:justify-center ">
        <Card text="¿Quieres que tu empresa tenga una presencia en línea sólida y profesional? ¿Estás buscando nuevas formas de llegar a más clientes potenciales y aumentar las ventas? Una página web puede ser la solución perfecta para ti."
              title="Crecimiento"/>
        <Card text="Una página web te permite llegar a un público mucho más amplio que cualquier otro medio tradicional. Esto significa que puedes alcanzar a clientes potenciales en cualquier parte del mundo, las 24 horas del día, los 7 días de la semana. Además, una página web te permite mostrar a tus clientes todo lo que tu empresa ofrece de manera clara y concisa."
              title="Posicionamiento"/>
        <Card text="Además, una página web te permite recopilar información valiosa sobre tus clientes, como sus intereses y preferencias, lo que te permite mejorar tus productos y servicios y ofrecer una experiencia de compra más personalizada."
              title="Experiencia personalizada"/>
      </div>
       

      </div>
    </div>
    </div>
    
      
 
  )
}

export default App
