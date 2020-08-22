import React from "react";
import AlbumItem from "./AlbumItem";
import jsonPlaceHolder from "../../apis/jsonPlaceHolder";

class AlbumList extends React.Component {
  state = { albums: [] };

  getAlbums = async () => {
    const response = await jsonPlaceHolder.get("/albums");
    this.setState({ albums: response.data });
  };

  componentDidMount() {
    this.getAlbums();
  }

  render() {
    const albumList = this.state.albums.map((album) => {
      return <AlbumItem key={album.id} album={album} />;
    });
    return <div className="ui three stackable cards">{albumList}</div>;
  }
}
export default AlbumList;
