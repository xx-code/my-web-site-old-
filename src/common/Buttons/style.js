import { WHITE,
         PRIMARY_COLOR} from '../../config/Color';

export default {
    btnLettalk : {
        lineHeight: '60px',
        padding: '0 45px',
        color: WHITE,
        backgroundColor: PRIMARY_COLOR,
        textAlign: 'center',
        fontWeight: 600,
        letterSpacing: '1px',
        fontSize: '16px',
        borderRadius: '100px',
        border: 'none',
        transition: 'all .2s ease',
        ':hover' : {
            borderRadius: 0
          }
    }
}