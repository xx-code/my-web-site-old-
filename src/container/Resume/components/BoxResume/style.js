import { WHITE,
         PRIMARY_COLOR } from '../../../../config/Color';

export default {
    resumeRowTitle : {
        fontSize: '16px',
        fontWeight: 600
    },
    resumeRowLabel : {
        fontStyle: 'italic',
        fontSize: '14px'
    },
    resumeRowText : {
        fontSize: '15px'
    },
    resumeFrame : {
        '@media screen and (max-width: 575px)' : {
            marginBottom: '30px'
        }
    },
    resumeBox : {
        padding: '30px 20px 30px 20px',
        backgroundColor: WHITE,
        overflow: 'hidden',
        boxShadow: 'rgba(58,78,95,0.2) 0 10px 16px, rgba(58,78,95,0.05) 0 -5px 16px',
        borderRadius: '10px'
    },
    resumeBoxTitle : {
        color: PRIMARY_COLOR,
        textTransform: 'uppercase',
        fontWeight: 600
    }
}