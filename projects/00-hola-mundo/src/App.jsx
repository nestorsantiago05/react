import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
    const [name, setName] = useState('midudev');
    console.log('Render with name: ', name);


    return (
        <section className='App'>
            <TwitterFollowCard userName={name}>Miguel Angél Duran</TwitterFollowCard>
            <TwitterFollowCard>Elon Musk</TwitterFollowCard>
            <TwitterFollowCard userName="pheralb">Phera Luis B</TwitterFollowCard>

            <button onClick={() => setName('pedromichel')}>Cambio nombre</button>
        </section>

    )
}