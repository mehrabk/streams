import React from "react";

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };
  componentDidMount() {
    window.gapi.load("auth2", () => {
      window.gapi.auth2
        .init({
          clientId:
            "958969568034-spmnldcb81ivv3p8i2smp6hnaghsu339.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          // listen is cb function for listen to change login state is useful for update component state (isSignedIn) after signin or signout
          // without this listen cb we must after login or logout refresh page for update the isSignedIn state
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  // for callback functions we use arrow function for bind directly to class or we can regular function statement with bind manualy in constructor
  // isLogin = Boolean
  onAuthChange = (isLogin) => {
    this.setState({ isSignedIn: isLogin });
  };

  renderAuthButton() {
    if (this.state.isSignedIn === null) return null;
    else if (this.state.isSignedIn)
      return (
        <button onClick={this.auth.signOut} className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    else
      return (
        <button onClick={this.auth.signIn} className="ui red google button">
          <i className="google icon" />
          Sign In with Google
        </button>
      );
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
