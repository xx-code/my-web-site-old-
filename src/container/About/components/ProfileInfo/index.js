import React from 'react';
import style from './style'
import Radium from 'radium';

const ProfileInfo = props => {
    return(
        <React.Fragment>
            <h2 style = {style.textH2} >ABOUT <span style = {style.textSpan} >ME</span></h2>
            <p style = {style.paragraph}>Auguste Tiemele jeune développeur informatique, ayant des compétences en programmation web et android/IOS.
                Il a aquis ses compétences durant son parcours universitaire et ces heures intensives de recherche.</p>
            <p style = {style.paragraph}>En tant que développeur informatique lorsqu'il n'est pas devant son écran, il fait beaucoup de sport. 
                il aime la lecture, les jeux vidéos et les mangas.</p>
            <p style = {style.paragraph}>Les techniques et language qu'il utilise sont : le javascript, reactjs, react native, firebase, SQL, noSQL et python</p>
        </React.Fragment>
    )
}

export default Radium(ProfileInfo)