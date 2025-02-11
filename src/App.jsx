import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
    return (
        <div className="relative bg-white h-screen mx-auto">
            <Header />
            <Hero />
            <div className='bg-white h-screen'></div>
        </div>
    );
}

export default App;
