import { useState } from "react";
export function TwitterFollowCard ({formatUserName,userName = "unknow", children, initialIsFollowing}){
    
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

    const text = isFollowing 
        ? 'Siguiendo' 
        : 'Seguir';

    const buttonClassName = isFollowing 
        ? 'tw-followCard-button isFollowing' 
        : 'tw-followCard-button';

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }

return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img 
                    className="tw-followCard-img"
                    alt="avatar--img" 
                    src= {`https://unavatar.io/instagram/${userName}`} />
                <div className="tw-followCard-info">
                    <strong>{children}</strong>
                    <span className="tw-followCard-infoUserName">@{userName}</span>
                </div>
            </header>
            <aside className=".tw-followCard-button-container">
                <button className= {buttonClassName} onClick={handleClick}>
                    <span className='tw-followCard-text'>{text}</span>
                    <span className='tw-followCard-stopFollow'>Dejar de Seguir</span>
                </button>
            </aside>
        </article>
    )
}