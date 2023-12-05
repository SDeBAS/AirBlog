import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";


import Home from "./pages/Home/Home";
import Layout from "./UI/Layout";
import HeadingBox from "./UI/HeadingBox";
import LoadingSpinner from "./UI/LoadingSpinner/LoadingSpinner";

const LogIn = React.lazy(() => import("./pages/LogIn/LogIn"))
const SignUp = React.lazy(() => import("./pages/SignUp/Signup"))
const SinglePage = React.lazy(() => import("./pages/SinglePage/SinglePage"))
const Write = React.lazy(() => import("./pages/Write/Write"))
const AboutUs = React.lazy(() => import("./pages/AboutUs/AboutUs"))
const Profile = React.lazy(() => import("./pages/Profile/Profile"))
const Blogs = React.lazy(() => import("./pages/Blogs/Blogs"))
const Edit = React.lazy(() => import("./pages/Edit/Edit"))


function App() {

  return (
    <Layout>
      <Suspense fallback={<LoadingSpinner />}>
        <Switch>

          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>

          <Route path="/signin" exact>
            <LogIn />
          </Route>

          <Route path="/signup" exact>
            <SignUp />
          </Route>

          <Route path="/home" exact>
            <HeadingBox />
            <Home />
          </Route>

          <Route path="/aboutus" exact>
            <AboutUs />
          </Route>

          <Route path="/home/post/:postId">
            <SinglePage />
          </Route>

          <Route path="/Write">
            <Write />
          </Route>

          <Route path="/Edit/:postId">
            <Edit />
          </Route>

          <Route path="/Profile">
            <Profile />
          </Route>

          <Route path="/Blogs">
            <Blogs />
          </Route>

        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
