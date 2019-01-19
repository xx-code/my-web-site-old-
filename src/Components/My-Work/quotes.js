import React, { Component } from 'react';
import voltaire from '../../Images/voltaire.jpg';
import socrate from '../../Images/Socrate.jpg';
import martin from '../../Images/martin.jpg';
import '../../Css/my-work.css';

export default class Quotes extends Component{
    render(){
        return(
            <div id = "quote" className = "container-fluid"> 
                <div className = "container">
                    <div id = "carouselExampleControls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">

                            <div className="carousel-item active">
                                <div className = "img-quote">
                                    <img src = {voltaire} alt = "think"/>
                                </div>
                                <div className = "quote-text">
                                    <p>
                                        Le travail éloigne de nous trois grands maux : l'ennui, le vice et le besoin.
                                    </p>
                                    <h4>
                                        - Voltaire
                                    </h4>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className = "img-quote">
                                    <img src = {socrate} alt = "think"/>
                                </div>
                                <div className = "quote-text">
                                    <p>
                                        Il n'y a point de travail honteux.
                                    </p>
                                    <h4>
                                        - Socrate
                                    </h4>
                                </div>
                                
                            </div>

                            <div className="carousel-item">
                                <div className = "img-quote">
                                    <img src = {martin} alt = "think"/>
                                </div>
                                <div className = "quote-text">
                                    <p>
                                        Un homme devrait faire son travail si parfaitement que les vivants, les morts, et ceux encore à naître ne puissent faire mieux.
                                    </p>
                                    <h4>
                                        - Martin Luther King
                                    </h4>
                                </div>
                                
                            </div>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        )
    }
}