import { WHITE,
         PRIMARY_COLOR} from '../../../../config/Color';

export default {
    frameWork : {
        margin: '0px 8px 0px 8px'
    },
    title: {
        textAlign: 'center'
    },
    linkFrame: {
        position: 'relative',
        maxWidth: '100%',
        height: 'auto',
        boxShadow: 'rgba(58, 78, 95, 0.2) 0px 10px 16px, rgba(58, 78, 95, 0.05) 0px -5px 16px',
        borderRadius: '10px',
        ':hover #frame': {
            visibility: 'visible'
        } 
    },
    frameImage: {
        borderRadius: '10px'
    },
    background: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        width: '100%',
        borderRadius: '10px',
        height: '100%',
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        visibility: 'hidden',
        borderWidth: '2px'
    },
    link: {
        fontSize: '16px',
        color: 'white',
        textDecoration: 'none'
    },
    aboutInfo : {
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        height: '20%',
        width: '100%',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        padding: '10px',
        
    },
    aboutInfoTitle : {
        margin: 0,
        padding: '0 0 10px',
        fontWeight: 600,
        color: WHITE
    },
    aboutInfoLabel : {
        fontWeight: 300,
        padding: '0 10px',
        fontSize: '14px',
        display: 'inline-block',
        float : 'right',
        color: WHITE,
        backgroundColor: PRIMARY_COLOR,
        textAlign: 'center',
        letterSpacing: '1px',
        borderRadius: '100px'
    },
    frameContentImg : {
        maxWidth: '100%'
    }
}