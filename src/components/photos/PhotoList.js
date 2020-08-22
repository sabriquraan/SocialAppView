import "./PhotoList.css";
import React from "react";
import PhotoCard from "./PhotoCard";
import jsonPlaceHolder from "../../apis/jsonPlaceHolder";

class PhotoList extends React.Component {
  state = { photos: [] };

  getPhotos = async () => {
    const albumId = this.props.albumId;
    const response = await jsonPlaceHolder.get(`albums/${albumId}/photos`);
    this.setState({ photos: response.data });
  };

  componentDidMount() {
    this.getPhotos();
  }

  render() {
    const photos = this.state.photos.map((photo) => {
      return <PhotoCard key={photo.id} photo={photo} />;
    });
    return <div className="photo-list">{photos}</div>;
  }
}

export default PhotoList;
