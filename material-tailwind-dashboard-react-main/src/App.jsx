import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";

function App() {
  return (
    <Routes>
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/auth/*" element={<Auth />} />

      {/* Set SignIn as the default landing page */}
      <Route
        path="*"
        element={<Navigate to="/auth/sign-in" replace />}
      />
    </Routes>
  );
}

export default App;
