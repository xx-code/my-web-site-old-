import { WHITE, 
         PRIMARY_COLOR } from '../../config/Color';
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
            justifyContent: 'space-around',
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
        boxShadow: '0 2px 4px -1px rgba(0,0,0,0.06), 0 4px 5px 0 rgba(0,0,0,0.06), 0 1px 10px 0 rgba(0,0,0,0.08)',
        '@media screen and (max-width: 792px)': {
            
        }
    },
    headerNav:{
        display: 'flex',
        listStyleType: 'none',
        margin: 0,
        '@media screen and (max-width: 792px)': {
            flexDirection: 'column',
            backgroundColor: WHITE,
            padding: 0
        }
    },
    headerToggle : {
        color: WHITE,
        backgroundColor: PRIMARY_COLOR,
        padding: '10px',
        display: 'none',
        fontSize: '25px',
        '@media screen and (max-width: 792px)' : {
            display: 'block',
            padding: '0 10px 0 10px',
            margin: '10px 20px 10px 0'
        }
    }
}