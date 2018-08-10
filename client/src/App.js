import React, { Component } from 'react';

// !!!! Shopify !!!! //
import { AppProvider, Avatar, Card, List, Page, ResourceList, TextStyle } from '@shopify/polaris';




//// !!!! This Will Be On Admin Page!!!! //
import Operator from "./pages/Operator";

// Shop APIs will need to take info from 
// /Operator and sent to Merchants Store//

// import Tours from "./pages/Tours";
// import Detail from "./pages/Detail";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



//// !!!! Not Going To Need For Shopify !!!!! ////
// import BookNow from "./pages/BookNow";
// import NoMatch from "./pages/NoMatch";
// import Home from "./pages/Home";
// import Navigation from "./components/Nav";
// import Footer from "./components/Footer";



// import SignUpPage from './components/SignUp';
// import SignInPage from './components/SignIn';
// import PasswordForgetPage from './components/PasswordForget';
// import * as routes from '../src/constants/routes';
// import { firebase } from './firebase';






class App extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     authUser: null,
  //   };
  // }

  // componentDidMount() {
  //   firebase.auth.onAuthStateChanged(authUser => {
  //     authUser
  //       ? this.setState({ authUser })
  //       : this.setState({ authUser: null });
  //   });
  // }

  render() {
    return (
      <AppProvider>
        <Page>
          <Card>
            <h1>
              !!! <br />
              Tour Booker - Operator Dashboard <br />
              !!!
              </h1>
          </Card>
          <Card>
            <ResourceList
              showHeader
              items={[
                {
                  id: 341,
                  tourName: "Ohio Brew Tour",
                  tourSlots: {
                    tourDays: {
                      Sunday: "Sunday",
                      Monday: "Monday",
                      Tuesday: "Tuesday",
                      Wednesday: "Wednesday",
                      Thursday: "Thursday",
                      Friday: "Friday",
                      Saturday: "Saturday",
                    },
                    tourTime: {
                      tenAM: "10AM",
                      ninePM: "9PM",
                    },
                  },
                  tourDate: "2/16/19",
                  tourTime: "3PM",
                  url: 'customers/341',
                  name: 'Mae Jemison',
                  location: 'Decatur, USA',
                  ticketsPurchased: 3,
                },
                {
                  id: 256,
                  tourName: "NY Cycling Tour",
                  tourDate: "11/11/18",
                  tourTime: "10 AM",
                  url: 'customers/256',
                  name: 'Ellen Ochoa',
                  location: 'Los Angeles, USA',
                  ticketsPurchased: 10,
                },
              ]}
              renderItem={(item) => {
                const {
                  id,
                  tourName,
                  tourDate,
                  tourTime,
                  url,
                  name,
                  location,
                  ticketsPurchased
                } = item;
                const media = <Avatar customer size="medium" name={name} />;

                return (
                  <ResourceList.Item id={id} url={url} media={media}>
                    <h3>
                      <TextStyle variation="strong">{name}</TextStyle>
                    </h3>
                    <div>{ticketsPurchased}</div>
                    <div>{location}</div>
                  </ResourceList.Item>
                );
              }}
            />
          </Card>
        </Page>
      </AppProvider>
      // <Router>
      //   <div>
      //   <Navigation authUser={this.state.authUser} />

      //   <Switch>

      //   {/* <Route exact path="/" component={Home} /> */}
      //   <Route exact path={routes.HOME} component={Home} />

      //   <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
      //   <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
      //   <Route exact path={routes.PASSWORD_FORGET} component={() => <PasswordForgetPage />} />

      //   <Route exact path="/operator" component={Operator} />
      //   <Route exact path="/operator/:id" component={Detail} />
      //   <Route exact path="/tours/:id" component={Detail} />
      //   <Route exact path="/tours" component={Tours} />
      //   <Route exact path="/tours/book-now/:id" component={BookNow} />
      //   <Route component={NoMatch} />

      //   </Switch>
      //   <Footer />
      //   </div>
      // </Router>
    );
  }
}

export default App