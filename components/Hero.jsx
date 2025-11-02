import React from 'react'
import HeroTopBar from './HeroTopBar'
import '../src/App.css'
import ColorBends from './HeroBack'
import CurvedLoop from './CurvedLoop'
import GradualBlur from './GradualBlur'
import Dock from './Dock'
import Tab from './Tab'
function Hero() {
  return (
    <div className='bg-primary-dark h-screen w-full relative overflow-y-hidden'>
        <Tab/>
        <HeroTopBar/>
        <div className='text-white w-full flex justify-center items-center flex-col mt-40' style={{zIndex:2}}>
            <div>
                <div className='flex translate-y-4'>
                <h1 className='text-3xl font-kollektif font-bold'>Vinay</h1> 
                
                <h2 className='text-3xl font-kollektif italic '>Choudhary</h2> 
                </div>
                <h3 className='font-kollektif font-bold text-9xl'>portfolio</h3>
            </div>
            
        </div>
        <div className='w-full flex justify-center pt-40'>
            <div className='relative'><button className='bg-primary/20 backdrop-blur-3xl border border-b-6 hover:border-b-2 border-white font-kollektif font-bold text-2xl text-white tracking-wide pt-3 pb-3 pl-8 pr-8 '>ENTER</button>
            <div className='h-3 w-3 bg-primary-dark absolute top-0 border-b border-r border-white'></div>
            <div className='h-3 w-3 bg-primary-dark absolute right-0 top-0 border-l border-b border-white'></div>
            <div className='h-3 w-3 bg-primary-dark absolute bottom-0 border-t-6 border-r-4 border-white'></div>
            <div className='h-3 w-3 bg-primary-dark absolute bottom-0 right-0 border-t-6 border-l-4 border-white'></div>
            </div>
            
        </div>
        {/* <CurvedLoop className="fill-white/60"
            marqueeText="Designer   Developer   Creator   Innovator   Learner"
            speed={0.5}
            curveAmount={200}
            interactive={false}
            
            />
            <CurvedLoop className="fill-red translate-y-10 text-4xl"
            marqueeText="Designer   Developer   Creator   Innovator   Learner"
            speed={0.8}
            curveAmount={200}
            interactive={false}
            
            /> */}
            <Dock/>
        <ColorBends className="opacity-40"
            colors={["#ff5c7a", "#8a5cff", "#FF5B57"]}
            rotation={30}
            speed={0.5}
            scale={1.2}
            frequency={2}
            warpStrength={1.2}
            mouseInfluence={0.8}
            parallax={0.6}
            noise={0.08}
            transparent
            />
            {/* <GradualBlur
                target="parent"
                position="bottom"
                height="6rem"
                strength={2}
                divCount={5}
                curve="bezier"
                exponential={true}
                opacity={1}
            /> */}
    </div>
  )
}

export default Hero