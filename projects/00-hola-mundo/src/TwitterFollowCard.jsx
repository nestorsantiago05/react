export function TwitterFollowCard({ userName, name, isFollowing }) {
    const imgSrc = `https://unavatar.io/${userName}`;
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' src={imgSrc} alt="user avatar"></img>
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>
            <aside>
                <button className='tw-followCard-button'>Seguir</button>
            </aside>
        </article>
    )
}