import {WHITE} from "../../../../config/Color";

export default {
    link: {
        height: '58px',
        position: 'relative',
        '@media (max-width: 600px)': {
            marginTop: '5px'
        }
    },
    img: {
        width: 'auto',
        height: '100%',
        borderRadius: '10px'
    },
    noValid: {
        fontSize: '15px',
        color: WHITE,
        fontStyle: 'bold'
    },
    hoverNoValid: {
        backgroundColor: 'rgba(119, 119, 119, 0.80)',
        position: 'absolute',
        borderRadius: '10px',
        width: '100%',
        height: '100%',
        textAlign: 'center',
        top: 0
    },
}