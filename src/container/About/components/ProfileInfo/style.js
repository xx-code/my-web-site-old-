import { SOOMTH_BLACK, 
         PRIMARY_COLOR } from '../../../../config/Color';

export default {
    textH2 : {
        fontWeight: 'bold',
        position: 'relative',
        lineHeight: '45px',
        '::after': {
            content: '',
            height: '3px',
            color: SOOMTH_BLACK,
            width: '60px',
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: '-10px'
        }
    },
    textSpan : {
        color : PRIMARY_COLOR
    },
}