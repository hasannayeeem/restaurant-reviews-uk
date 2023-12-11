import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import RequireAuth from "./authentication/auth/RequireAuth";
import RequireAdmin from "./authentication/auth/RequireAdmin";
import Login from "./authentication/Login/Login";
import SignUp from "./authentication/Register/SignUp";
import Dashboard from "./pages/Dashboard/Dashboard";
import DashboardHome from "./pages/Dashboard/forAdmin/DashboardHome/DashboardHome";
import UserDetails from "./pages/Dashboard/forAdmin/Users/UserDetails";
import Users from "./pages/Dashboard/forAdmin/Users/Users";
import Home from "./pages/home/Home";
import Address from "./pages/Profile/Address/Address";
import Education from "./pages/Profile/Education/Education";
import MyProfile from "./pages/Profile/MyProfile/MyProfile";
import Profile from "./pages/Profile/Profile";
import Footer from "./shared/Footer/Footer";
import Navbar from "./shared/Header/Navbar";
import NotFound from "./shared/NotFound/NotFound";
import AddReview from "./pages/Dashboard/forUser/AddReview/AddReview";
import MyRestaurants from "./pages/Dashboard/forUser/MyRestaurants/MyRestaurants";
import RestaurantDetails from "./pages/Dashboard/forAdmin/ManageRestaurants/RestaurantDetails";
import ManageRestaurants from "./pages/Dashboard/forAdmin/ManageRestaurants/ManageRestaurants";
import AddRestaurant from "./pages/Dashboard/forAdmin/AddRestaurant/AddRestaurant";
import Restaurants from "./pages/Restaurant/Restaurants";

function App() {
  return (
    <div className="App bg-[#1B2640]">
      <Navbar />
      <Toaster></Toaster>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        >
          <Route index element={<MyProfile />}></Route>
          <Route path="address" element={<Address />}></Route>
          <Route path="education" element={<Education />}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
        <Route
            path="restaurants"
            element={
              <RequireAuth>
              <Restaurants />
              </RequireAuth>
            }
          ></Route>
        
        <Route
            path="restaurantDetails/:restaurantId"
            element={
              <RequireAuth>
                <RestaurantDetails />
              </RequireAuth>
            }
          ></Route>
        <Route
          path="/user/:userId"
          element={
            <RequireAdmin>
              <UserDetails />
            </RequireAdmin>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<DashboardHome />}></Route>
          <Route
            path="users"
            element={
              <RequireAdmin>
                <Users />
              </RequireAdmin>
            }
          ></Route>

          <Route
            path="addRestaurant"
            element={
              <RequireAdmin>
                <AddRestaurant />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageRestaurants"
            element={
              <RequireAdmin>
                <ManageRestaurants />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="myRestaurants"
            element={
              <RequireAuth>
                <MyRestaurants />
              </RequireAuth>
            }
          ></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
