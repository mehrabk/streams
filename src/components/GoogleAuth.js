import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

// with this senario we just can login and logout in this component and actions cant do this sign in and signout
// we can create alternative senario that actions deal with gapi and handle the signin and signout and use this action all over the app
class GoogleAuth extends React.Component {
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
          // (1) inja miaiem (auth.isSignedIn) dakhele redux ro init mikonim
          this.onAuthChange(this.auth.isSignedIn.get());
          // listen is cb function for listen to change login state is useful for update component state (isSignedIn) after signin or signout
          // without this listen cb we must after login or logout refresh page for update the isSignedIn state
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  // for callback functions we use arrow function for bind directly to class or we can regular function statement with bind manualy in constructor
  // listen function pass isSignedIn property that is Boolean
  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) return null;
    else if (this.props.isSignedIn)
      return (
        <button onClick={this.onSignOutClick} className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    else
      return (
        <button onClick={this.onSignInClick} className="ui red google button">
          <i className="google icon" />
          Sign In with Google
        </button>
      );
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
