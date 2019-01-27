import { PRIMARY_COLOR } from '../../config/Color';

export default {
    inputFormContent : {
        marginBottom: '35px',
        padding: 0,
    },
    inputForm : {
        border: 'none',
        borderBottom: '2px solid #a2a2a2',
        ':focus' : {
            outline: 'none !important',
            borderColor: PRIMARY_COLOR
        },
        '@media screen and (max-width: 991px)' : {
            width: '100%'
          }
    },
    textArea : {
        width: '100%',
        borderWidth: '2px',
        ':focus' : {
            outline: 'none !important',
            borderColor: PRIMARY_COLOR
        }
    }
}