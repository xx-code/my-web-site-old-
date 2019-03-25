import { WHITE,
         BlACK } from '../../../../config/Color';

export default {
    serviceBox : {
        textAlign: 'center',
        backgroundColor: WHITE,
        padding: '40px 20px',
        overflow: 'hidden',
        boxShadow: 'rgba(58,78,95,0.2) 0 10px 16px, rgba(58,78,95,0.05) 0 -5px 16px',
        borderRadius: '10px'
    },
    serviceBoxH4 : {
        fontWeight: 'bold',
        '::after' : {
            content: '',
            height: '3px',
            color: BlACK,
            width: '60px',
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: '-10px'
        }
    },
    frameService : {
        '@media screen and (max-width: 768px)' : {
            marginBottom: '30px'
        }
    },
    icon : {
        display: 'inline-block',
        backgroundColor: '#f34236',
        color: WHITE,
        width: '80px',
        height: '80px',
        marginBottom: '15px',
        borderRadius: '50%',
        lineHeight: '80px'
    },
    IconSub : {
        fontSize: '40px',
        lineHeight: '80px'
    }
}