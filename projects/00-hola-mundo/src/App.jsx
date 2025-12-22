import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
    return (
        <section className='App'>
            <TwitterFollowCard userName="midudev" name="Miguel Angél Duran" isFollowing={false} />
            <TwitterFollowCard userName="elonmusk" name="Elon Musk" isFollowing />
            <TwitterFollowCard userName="pheralb" name="Phera Luis B" isFollowing />
        </section>
    )
}