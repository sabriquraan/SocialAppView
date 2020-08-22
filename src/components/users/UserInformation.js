import React from "react";
import jsonPlaceHolder from "../../apis/jsonPlaceHolder";
class UserData extends React.Component {
  state = { user: {} };

  componentDidMount() {
    this.getUser(this.props.userId);
  }

  getUser = async (userId) => {
    const response = await jsonPlaceHolder.get(`/users/${userId}`);
    this.setState({ user: response.data });
  };

  render() {
    return <div>{this.state.user.name}</div>;
  }
}
export default UserData;
