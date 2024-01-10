import { Route, Routes } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import SignInPage from "./pages/SignIn";
import CreateAccountPage from "./pages/CreateAccount";
import Layout from "./components/layout/Layout";
import { AuthProvider } from "./store/auth-context";
// import FirebaseDB from "./Firebase";

function App() {
  // FirebaseDB();

  return (
    <AuthProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<AllMeetupsPage />} />
          <Route path="/new-meetup" element={<NewMeetupPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/create-account" element={<CreateAccountPage />} />
        </Routes>
      </Layout>
    </AuthProvider>
  );
}

export default App;
