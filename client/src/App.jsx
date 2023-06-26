import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./pages/protected-route.jsx";
import ErrorPage from "./pages/error-page.jsx";
import LandingPage from "./pages/landing-page.jsx";
import Register from "./pages/register.jsx";
import {
  AllJobs,
  AddJob,
  Profile,
  SharedLayout,
  Stats,
} from "./pages/dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }    
        >
          <Route index element={<Stats />} />
          <Route path="all-jobs" element={<AllJobs />} />
          <Route path="add-job" element={<AddJob />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
