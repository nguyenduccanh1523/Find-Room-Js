import { Routes, Route } from "react-router-dom";
import { Home, Login } from "./containers/Public";
import { path } from "./ultils/constant";

function App() {
  return (
    <div className="h-screen w-screen bg-primary">
      <Routes>
        <Route path={path.home} element={<Home />}>
          <Route path={path.login} element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
