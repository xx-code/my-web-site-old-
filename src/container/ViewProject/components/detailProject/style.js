import {BlACK} from "../../../../config/Color";

export default {
    titleContainer: {
        display: 'flex',
        alignItems: 'center'
    },
    icon: {
        width: '125px',
        height: '125px',
        '@media (max-width: 400px)': {
            height: '100px',
            width: '100px'
        }
    },
    title: {
        fontSize: '75px',
        fontStyle: 'bold',
        color: BlACK,
        '@media (max-width: 400px)': {
            fontSize: '60px'
        }
    },
    bar: {
        width: '45%',
        backgroundColor: BlACK,
        height: '7px'
    },
    detail: {
        marginLeft: '50px',
        fontSize: '20px',
        color: BlACK,
        marginTop: '25px',
        '@media (max-width: 400px)': {
            fontSize: '18px'
        }
    }
}