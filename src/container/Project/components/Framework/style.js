import { WHITE,
         PRIMARY_COLOR} from '../../../../config/Color';

export default {
    frameWork : {
        width: '33%'
    },
    frameContent : {
        padding: '10px',
        position: 'relative',
        backgroundColor: WHITE,
        overflow: 'hidden',
        boxShadow: 'rgba(58,78,95,0.2) 0 10px 16px, rgba(58,78,95,0.05) 0 -5px 16px',
        borderRadius: '10px',
        marginBottom: '30px',
    },
    aboutInfo : {
        visibility: 'hidden',
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        height: '100%',
        width: '100%',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        padding: '10px'
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