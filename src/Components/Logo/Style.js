import { WHITE, 
         PRIMARY_COLOR } from '../../Config/Color';

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
        marginLeft: '10px'
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
    headerToggle : {
        color: WHITE,
        backgroundColor: PRIMARY_COLOR,
        padding: '10px',
        display: 'none',
        fontSize: '25px',
        '@media screen and (max-width: 792px)' : {
            display: 'block',
            padding: '0 10px 0 10px',
            margin: '10px 20px 10px 0'
        }
    },
}