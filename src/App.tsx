
import './App.css'
import Header from './Header'

function App() {

    return (

		<main>

			<div className="blob-cont">

				<div className="yellow blob"></div>

				<div className="red blob"></div>

				<div className="green blob"></div>

			</div>

			<svg>

				<filter id='noiseFilter'>

					<feTurbulence 
					type='fractalNoise' 
					baseFrequency='0.6' 
					stitchTiles='stitch'/>

					<feColorMatrix in="colorNoise" type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
					
					<feComposite operator="in" in2="SourceGraphic" result="monoNoise"/>
					
					<feBlend in="SourceGraphic" in2="monoNoise" mode="screen" />

				</filter>
			
			</svg>

		</main>

    )

}

export default App
