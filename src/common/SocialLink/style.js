import { WHITE, 
         PRIMARY_COLOR } from '../../config/Color';

export default {
    socialLinkList : {
        display: 'flex',
        listStyleType: 'none',
        paddingLeft: 0
    },
    socialLinkLi : {
        marginRight: '5px',
        verticalAlign: 'top',
        ':hover' : {
            backgroundColor: PRIMARY_COLOR,
            borderRadius: '100%'
        }
    },
    socialLinkA : {
        width: '35px',
        display: 'block',
        height: '35px',
        textAlign: 'center',
        lineHeight: '35px',
        backgroundColor: '#000',
        borderRadius: '50%',
        margin: 'auto',
        color: WHITE
    }
}
