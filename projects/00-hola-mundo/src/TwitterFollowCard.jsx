import { useState } from "react";

export function TwitterFollowCard({ children, userName = '_unknow', initialIsFollowing = false }) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

    console.log('[twitterFollowCard] render with userName: ', userName);

    // Coments
    /**
     * Comments in a code
     */
    const imgSrc = `https://unavatar.io/${userName}`;
    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassname = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button';

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    };

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' src={imgSrc} alt="user avatar"></img>
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>

            {/* Comment inside JSX */}
            <aside>
                <button className={buttonClassname} onClick={handleClick}>
                    <span className="tw-followCard-text">{text}</span>
                    <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}