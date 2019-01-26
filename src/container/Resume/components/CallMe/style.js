import { PRIMARY_COLOR,
         WHITE,
         SOOMTH_BLACK } from '../../../../config/Color';

export default {
    callme : {
        backgroundColor: PRIMARY_COLOR,
        padding: '60px 0',
    },
    callmeBox : {
        textAlign: 'center'
    },
    callmeBoxTitle : {
        fontWeight: 600,
        color: WHITE
    },
    btnWhite : {
        lineHeight: '50px',
        padding: '0 25px',
        display: 'inline-block',
        color: SOOMTH_BLACK,
        backgroundColor: WHITE,
        textAlign: 'center',
        fontWeight: 600,
        letterSpacing: '1px',
        fontSize: '16px',
        borderRadius: '100px',
        border: 'none',
        transition: 'all .2s ease',
        ':hover' : {
            borderRadius: 0,
            textDecoration: 'none',
            color:PRIMARY_COLOR
        }
    }
}