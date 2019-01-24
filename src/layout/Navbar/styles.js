import { WHITE } from '../../config/Color';
export default {
    header:{
        background: 'transparent',
        padding: '15px 0px 15px 0px',
        display: 'flex',
        justifyContent: 'space-around',
        zIndex: 6,
        position: 'fixed',
        width: '100%',
        '@media screen and (max-width: 792px)': {
            flexWrap: 'wrap',
            flexDirection: 'column',
            justifyContent: 'flexStart',
            paddingBottom: 0,
            paddingTop: 0
        }
    },
    headerScroll:{
        backgroundColor: WHITE,
        padding: '15px 0px 15px 0px',
        display: 'flex',
        justifyContent: 'space-around',
        zIndex: 6,
        position: 'fixed',
        width: '100%',
        boxShadow: '0 2px 4px -1px rgba(0,0,0,0.06), 0 4px 5px 0 rgba(0,0,0,0.06), 0 1px 10px 0 rgba(0,0,0,0.08)'
    },
    headerNav:{
        display: 'flex',
        listStyleType: 'none',
        margin: 0
    }
}