import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';

function App() {
    return (
        <div className="relative bg-white h-screen mx-auto">
            <Header />
            <main className='bg-white'>
                <Hero />
                <WhatWeDo />
                <div className='h-screen'></div>
            </main>
        </div>
    );
}

export default App;
