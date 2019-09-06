import {BLACK_SKY, WHITE} from "../../../../config/Color";

export default {
    container: {
      display: 'flex'
    },
    link: {
        height: '50px',
        width: '230px',
        backgroundColor: BLACK_SKY,
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        ':hover': {
            textDecoration: 'none',
            backgroundColor: 'rgba(18, 18, 18, 0.75)'
        }
    },
    icon:{
      fontSize: '50px',
      marginRight: '15px',
      color: BLACK_SKY
    },
    img: {
        width: 'auto',
        height: '100%',
    },
    linkTitle: {
        color: WHITE,
        textAlign: 'center',
        fontStyle: 'bold',
        fontSize: '25px'
    },
    noValid: {
        fontSize: '15px',
        color: WHITE,
        fontStyle: 'bold'
    },
    hoverNoValid: {
        backgroundColor: 'rgba(119, 119, 119, 0.75)',
        position: 'absolute',
        width: '100%',
        height: '100%',
        textAlign: 'center',
        top: 0
    },
}