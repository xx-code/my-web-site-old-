import { WHITE, 
         PRIMARY_COLOR } from '../../../../config/Color';

export default {
    bar: {
        marginTop: 5
    },
    skill: {    
        fontSize: '18px',
        fontWeight: 'bold',
        marginBottom: '6px'
    },
    containerBar: {
        backgroundColor: WHITE,
        height: '25%',
        padding: 0
    },
    pourcentageBar: {
        height: '100%',
        display: 'flex',
        flexDirection: 'row-reverse',
        alignItems: 'center',
        backgroundColor: PRIMARY_COLOR
    },
    pourcentText: {
        fontSize: '18px',
        fontWeight: 'bold',
        marginRight: '8px',
        color: WHITE
    }
}