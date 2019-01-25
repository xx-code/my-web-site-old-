import { WHITE } from '../../../../config/Color';

export default {
    homeTextH3 : {
        color: WHITE,
        fontSize: '55px',
        fontWeight: 300,
        textAlign: 'center',
        margin: 0,
        '@media screen and (max-width: 991px)' : {
            fontSize : '35px'
        },
        '@media screen and (max-width: 767px)' : {
            fontSize: '35px'
        },
        '@media screen and (max-width: 468px)' : {
            fontSize: '25px'
        },
        '@media screen and (max-width: 348px)': {
            fontSize: '20px'
        }
    },
    homeTextH2 : {
        color: WHITE,
        fontSize: '99px',
        fontWeight: 600,
        letterSpacing: '2px',
        lineHeight: '80px',
        padding: '20px 0 35px',
        textAlign: 'center',
        '@media screen and (max-width: 991px)' : {
            fontSize: '75px'
        },
        '@media screen and (max-width: 767px)' : {
            fontSize: '49px'
        },
        '@media screen and (max-width: 468px)' : {
            fontSize: '35px'
        },
        '@media screen and (max-width: 348px)': {
            fontSize: '30px'
        }
    },
    homeTextP : {
        color: WHITE,
        margin: 0,
        textAlign: 'center',
        padding: '0 0 50px',
        letterSpacing: '1px',
        fontWeight: 300
    },
}