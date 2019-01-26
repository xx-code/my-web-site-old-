import { WHITE, 
         PRIMARY_COLOR } from '../../config/Color';

export default {
    headerLogo : {
        color: WHITE,
        marginLeft: '10px',
        '@media screen and (max-width: 792px)' : {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%'
        }
    },
    headerLogoScroll : {
        color: PRIMARY_COLOR,
        marginLeft: '10px',
        '@media screen and (max-width: 792px)' : {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%'
        }
    },
    headerTitle : {
        fontSize: '25px',
        fontWeight: 300,
        textTransform: 'uppercase',
        margin: 0,
        '@media screen and (max-width: 792px)' : {
            marginLeft: '10px'
        }
    },
}