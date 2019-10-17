import React, { Component } from 'react'
import { storage } from '../../firebase'
// import FileUploader from 'react-firebase-file-uploader'
import CustomUploadButton from 'react-firebase-file-uploader/lib/CustomUploadButton'
import ImageList from './ImageList'

export default class ImageUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: '',
            isUploading: false,
            progress: 0,
            imageURL: '',
            images: [],
            showImages: false
        }
    }

    handleUploadStart = () => this.setState({ isUploading: true, progress: 0});
    handleProgress = progress => this.setState({ progress });
    handleUploadError = error => {
        this.setState({ isUploading: false});
        console.error(error);
    };
    handleUploadSuccess = file => {
        this.setState({
            image: file,
            progress: 100,
            isUploading: false
        });

        storage
        .ref(this.props.setImgLoc)
        .child(file)
        .getDownloadURL()
        .then(url => this.setState({ imageURL: url},() => { 
            console.log("kuva",this.state);
            this.props.setState({imageURL: this.state.imageURL});
        }
        ));
    }

    getImages = () => {
        storage.ref(this.props.setImgLoc)
        .listAll()
        .then(result => {
            this.setState({images: []})
            const data = result.items.map(r => {
                r.getDownloadURL().then(url => this.setState({images: [...this.state.images, url], showImages: true}));
            });
            
            
            // this.setState({showImages: !this.state.showImages},() => console.log(this.state.images)
            // );
        });
    }

    selectImage = img => {
        this.props.setState({imageURL: img});
        this.setState({imageURL: img});
    }

    closeImages = () => {
        this.setState({showImages: false})
    }
            
    render() {
        const { images } = this.state;
        return (
            <div>
               {this.state.isUploading && <p>Edistyminen: {this.state.progress}</p>} 
               {this.state.imageURL ? <img src={this.state.imageURL} style={{maxWidth: "217px"}} />:
                this.props.currentImg ? <img src={this.props.currentImg} style={{maxWidth: "217px"}} /> : null
               }

               <br/><br/><CustomUploadButton
                accept="image/*"
                name="thumbnail"
                randomizeFilename
                storageRef={storage.ref(this.props.setImgLoc)} 
                onUploadStart={this.handleUploadStart}
                onUploadError={this.handleUploadError}
                onUploadSuccess={this.handleUploadSuccess}
                onProgress={this.handleProgress}
                style={{backgroundColor: '#0275d8', color: 'white', padding: 10, borderRadius: 4}}
                >Lisää Kuva</CustomUploadButton>
                <button style={{backgroundColor: '#0275d8', color: 'white', padding: 10, borderRadius: 4, border: 'none', outline: 'none', marginLeft: '1.5%'}} onClick={this.getImages.bind(this)}>{this.props.currentImg ? "Vaihda Kuva" : "Valitse Kuva"}</button>
                {this.state.showImages ? <ImageList images={this.state.images} selectImage={this.selectImage.bind(this)} close={this.closeImages.bind(this)} key={this.state.showImages} />: null} 
            </div>
        )
    }
}
