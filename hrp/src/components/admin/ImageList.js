import React, { Component } from 'react'

export default class ImageList extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    { this.props.images.map((img, i) => (
                                <figure className="col-md-4">
                                    <img src={img} className="img-fluid" onClick={(e) => {
                                        this.props.selectImage(e.target.src);
                                        this.props.close();
                                        }} />
                                </figure>
                    ))
                    }
                </div>
            </div>
        )
    }
}
