import "./App.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { queryClient } from "./util/http";
import Homepage from "./components/Homepage";
import AuthOptions from "./components/Auth/AuthOptions";
import Login from "./components/Auth/Login";
import Registration from "./components/Auth/Registration";
import TermsAndConditions from "./components/TermsConditions";
import ContactUs from "./components/ContactUs";
import ItemDetail from "./components/ItemDetail";
import CreateProfile from "./components/Auth/Profile";
import UserProfile from "./components/Auth/UserProfile";
import store from "./store/reduxStore";
import PropertyForm from "./components/Auth/PropertyRegForm";
import CustomerDetail from "./components/CustomerDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/Homepage" />,
  },
  {
    path: "/Homepage",
    element: <Homepage />,
    children: [
      {
        path: "/Homepage/authentication",
        element: <AuthOptions />,
      },
      {
        path: "/Homepage/authentication/login",
        element: <Login />,
      },
      {
        path: "/Homepage/authentication/login/userprofile",
        element: <UserProfile />,
      },
      {
        path: "/Homepage/authentication/login/userprofile/addproperty",
        element: <PropertyForm />,
      },
      {
        path: "/Homepage/authentication/registration",
        element: <Registration />,
      },
      {
        path: "/Homepage/authentication/registration/createProfile/:id",
        element: <CreateProfile />,
      },
      {
        path: "/Homepage/terms&conditions",
        element: <TermsAndConditions />,
      },
      {
        path: "/Homepage/contactUs",
        element: <ContactUs />,
      },
      {
        path: "/Homepage/item/:id",
        element: <ItemDetail />,
      },
      {
        path: "/Homepage/item/:id/bookingRequest",
        element: <CustomerDetail />,
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
