import React, {Component} from 'react';
// lib
import posed from 'react-pose';
import { SOOMTH_BLACK,
         PRIMARY_COLOR } from '../../config/Color'
// style 
import style from './style';
import Radium from 'radium';

const Box = posed.div({
    hidden : {  opacity : 0, 
                color : SOOMTH_BLACK},
    visible : { opacity : 1, 
                color : PRIMARY_COLOR,
                transition: {
                    opacity: { ease: 'easeOut', duration: 300 },
                    default: { ease: 'linear', duration: 500 }
                  }
            }
})

class MainLoad extends Component {

    state = { isVisible : true}

    componentDidMount(){
        setInterval(() => {
            this.setState({isVisible : !this.state.isVisible})
        }, 1500)
    }

    render(){
        const {isVisible} = this.state;
        return(
            <Box 
                style = {style.contentLoad} 
                pose = {isVisible ? 'visible' : 'hidden'}>
                <i  
                    style = {style.laod}
                    className="fas fa-code">
                </i>
            </Box>
        )
    }
    
}

export default Radium(MainLoad)