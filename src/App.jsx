import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import Tools from './components/Tools';
import Projects from './components/Projects';

function App() {
    return (
        <div className="relative bg-white h-screen mx-auto">
            <Header />
            <main className='bg-white flex flex-col'>
                <Hero />
                <WhatWeDo />
                <Tools />
                <Projects />
                <div className='h-screen'></div>
            </main>
        </div>
    );
}

export default App;
