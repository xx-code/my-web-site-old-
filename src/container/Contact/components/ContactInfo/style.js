import { WHITE,
         BlACK } from '../../../../config/Color';

export default {
    contactInfo : {
        backgroundColor: WHITE,
        position: 'relative',
        padding: '10px 10px 10px 20px',
        borderRadius: '10px',
        boxShadow: 'rgba(58,78,95,0.2) 0 10px 16px, rgba(58,78,95,0.05) 0 -5px 16px',
        marginBottom: '35px'
    },
    contactInfoIcon : {
        position: 'absolute',
        top: '20px',
        left: '20px',
        backgroundColor: BlACK,
        width: '50px',
        height: '50px',
        lineHeight: '50px',
        color: WHITE,
        textAlign: 'center',
        fontSize: '16px',
        borderRadius: '50%'
    },
    contactInfoTitle : {
        margin:' 0 0 0 80px',
        fontWeight: 600,
        fontSize: '18px'
    },
    contactInfoText : {
        margin: '0 0 0 80px',
        fontSize: '15px'
    }
}