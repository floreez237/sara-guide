import React,{Component} from 'react';
import './split_style.scss';

class Split extends  Component {

    render(){
        return (
            <div className="container">
                <section className="screen left">
                    <h1>SARA Banking</h1>
                    <button>
                        <a href="#" className="button">Learn More</a>
                    </button>
                </section>

                <section className="screen right">
                    <h1>SARA Banking</h1>
                    <button>
                        <a href="#" className="button">Learn More</a>
                    </button>
                </section>
            </div>
        );
    }

}

export default Split;