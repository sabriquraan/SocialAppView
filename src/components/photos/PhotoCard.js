import React from "react";

class PhotoCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }
  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height === null ? 150 / 10 : height / 10);

    this.setState({ spans });
  };
  render(props) {
    const { title, url } = this.props.photo;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={title} src={url} />
      </div>
    );
  }
}

export default PhotoCard;
