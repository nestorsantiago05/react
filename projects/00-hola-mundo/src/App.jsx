import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
    return (
        <section className='App'>
            <TwitterFollowCard userName="midudev">Miguel Angél Duran</TwitterFollowCard>
            <TwitterFollowCard>Elon Musk</TwitterFollowCard>
            <TwitterFollowCard userName="pheralb">Phera Luis B</TwitterFollowCard>
        </section>
    )
}