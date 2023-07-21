import { useState } from "react";
import { TwitterFollowCard } from "./Twitter-followCard.jsx"
import './App.css'

export function App () {
    const formatUserName = (userName) => `@${userName}` //=== pasamos la funcion directamente
    //si queremos pasar la ejecucion de la funcion con lo que devuelva === {formatUserName()}
    //const formattedUserName = <span>@motogp</span>
    const motoGP = {userName:"motogp", initialIsFollowing:true};

    const [name, setName] = useState('hrc_motogp');
    const [userName, setUserName] = useState('hrc_motogp');

    const users = [
        {
            userName: 'motogp',
            name: 'motoGP',
            isFollowing: true
        },
        {
            userName: 'bmw',
            name: 'bmw',
            isFollowing: false
        },
        {
            userName: 'hrc_motogp',
            name: 'HRC motoGP',
            isFollowing: true
        },
        {
            userName: 'aprilia',
            name: 'Aprilia motoGP',
            isFollowing: false
        }
    ]

    return (
        /* <section className="App">
            <TwitterFollowCard formatUserName={formatUserName} {...motoGP}>
            motoGP
            </TwitterFollowCard>
            <TwitterFollowCard formatUserName={formatUserName} userName="bmw" >
                BMW
            </TwitterFollowCard>
            <TwitterFollowCard formatUserName={formatUserName} userName={name}>
                {userName}
            </TwitterFollowCard>
            <TwitterFollowCard formatUserName={formatUserName}>
                Santiago Guzmán
            </TwitterFollowCard>
        <button className = 'sugerencia' onClick={() => {setName('aprilia'),setUserName('aprilia')}} >
            Más sugerencias
        </button>
        </section> */
        <section className="App">
            {
                users.map(user => {
                    const { userName, name, isFollowing} = user //extraemos esos props de user
                    return (
                        <TwitterFollowCard
                            key={name}
                            userName={userName}
                            name = {name}
                            initialIsFollowing={isFollowing}
                        >
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
    )
}


//aprilia