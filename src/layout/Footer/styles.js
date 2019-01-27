import { BLACK_SKY,
         WHITE,
         BROWN_HIGH,
         SLIM_BLACK } from '../../config/Color';

export default {
    footer : {
        backgroundColor: BLACK_SKY,
        position: 'absolute',
        width: '100%'
    },
    subTitleFooter : {
        textAlign: 'center',
        padding: '40px 0'
    },
    subTitleFooterSocialLink : {
        display: 'flex',
        justifyContent: 'center'
    },
    subTitleFooterTitle : {
        color: WHITE,
        padding: '0 0 20px',
        fontWeight: 300,
        fontSize: '22px',
        textTransform: 'uppercase'
    },
    copyRight : {
        textAlign: 'center'
    }, 
    copyRightText : {
        backgroundColor: SLIM_BLACK,
        color: BROWN_HIGH,
        padding: '25px 0',
        margin: 0,
        fontSize: '14px'
    }
}