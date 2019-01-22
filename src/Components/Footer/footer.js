import React, {Component} from 'react';
import '../../Css/footer.css';

export default class Footer extends Component{
    render(){
        return(
            <footer>
                <div className = "subTitle-footer">
                    <h4>Auguste TIEMELE</h4>
                    <div className = "social-link">
                            <ul>
                                <li>
                                    <a 
                                        href = "https://www.instagram.com/roinujetsugua_sama/" 
                                        rel="noopener noreferrer"  
                                        target = "_blank">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        href = "https://www.pinterest.fr/akaaugustejunior/" 
                                        rel="noopener noreferrer"  
                                        target = "_blank">
                                        <i className="fab fa-pinterest"></i>
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        href = "https://www.linkedin.com/in/junior-tiemle-324701160/" 
                                        rel="noopener noreferrer"  
                                        target = "_blank">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                </div>
                <div className = "copy-right">
                    <p>Copy Right © By Auguste Junior 2018-19 | All Rights Reserved.</p>
                </div>
            </footer>
        )
    }
}