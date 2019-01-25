import { WHITE } from '../../config/Color';

export default {
    about : {
        backgroundColor: WHITE,
        position: 'relative',
        padding: '100px 0',
    },
    actionAbout : {
        display: 'flex',
        flexDirection: 'row',
        '@media screen and (max-width: 991px)': {
            padding: '0 20px',
            lineHeight: '30px',
            marginRight: '10px',
            fontSize: '14px'
        }
    },
    textAbout : {
        ' @media (max-width: 767px)':{
            paddingTop: '40px'
        }
    },
    actionAboutBtn : {
        padding: '0 40px',
        lineHeight: '40px',
        marginRight: '10px'
    }
}