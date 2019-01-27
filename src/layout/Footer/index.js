import React from 'react';
// component
import { SocialLinkList } from '../../common/SocialLink';
// data & firebase
import { socialLinks } from '../../utils/StaticData';
// style 
import styles from './styles';
import Radium from 'radium';


const Footer = props => {
    return(
        <footer style =  {styles.footer}>
            <div style = {styles.subTitleFooter}>
                <h4 style = {styles.subTitleFooterTitle}>Auguste TIEMELE</h4>
                <SocialLinkList 
                    anotherOption = {styles.subTitleFooterSocialLink}
                    socialLinks = {socialLinks}
                />
            </div>
            <div style = {styles.copyRight}>
                <p style = {styles.copyRightText}>Copy Right © By Auguste Junior 2018-19 | All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Radium(Footer)