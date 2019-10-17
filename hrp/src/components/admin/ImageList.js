import React, { Component } from 'react'

export default class ImageList extends Component {
    render() {
        return (
            <div className="image-list-bg">
                <div className="container">
                    <div className="row justify-content-center">
                    <button style={{backgroundColor: '#0275d8',  color: 'white', padding: 10, borderRadius: 4, border: 'none', outline: 'none', margin: '2% 0 2% 0'}} onClick={this.props.close.bind(this)}>Sulje valikko</button>
                    </div>
                    <div className="row justify-content-center">
                        { this.props.images.map((img, i) => (
                                    <figure className="mb-4 col-xs-5 col-sm-5 col-md-3">
                                        <img src={img} className="img-fluid img-thumbnail" onClick={(e) => {
                                            this.props.selectImage(e.target.src);
                                            this.props.close();
                                            }} />
                                    </figure>
                        ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}
