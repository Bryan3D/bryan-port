
import Particles from "react-particles";


const partclesBG = () => {
  return (
    <div className="App">
      <Particles
        options={{
          // background: {
          //   color: 'rgba(0,0,0,0.2)', 
          // },
          fpsLimit: 60,
          interactivity: {
            detectsOn: 'canvas',
            events: {
              resize: true,
            },
          },
          particles: {
            color: {
              value: 'white',
            },
            number: {
              density: {
                enable: true,
                area: 10,
              },
              limit: 0,
              value: 400,
            },
            opacity: {
              animation: {
                enable: true,
                minimumValue: 0.1,
                speed: 1,
                sync: false,
              },
              random: {
                enable: true,
                minimumValue: 0.05,
              },
              value: 0.1,
            },
            shape: {
              type: 'circle',
            },
            size: {
              random: { 
                enable: true,
                minimumValue: 0.9,  

              },
              value: 1,
          
          }
        }
          
        }
      }
          />
        
    </div>
  )
}

export default partclesBG
