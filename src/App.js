import "./styles.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useParams,
  useLocation
} from "react-router-dom";
import { useEffect } from "react";
export default function App() {
  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <Router basename="practice">
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "500px"
          }}
        >
          <NavLink to="/">Home</NavLink>
          <NavLink to="/hello">Hello</NavLink>
          <NavLink to="/bye">Bye</NavLink>
        </header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/hello" component={Hello} />
          <Route exact path="/bye" component={Bye} />
          <Route exact path="/post/:id" component={Post} />
          {/* Will Display if no matching Router */}
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

function Home() {
  return <h1>Home</h1>;
}

function Hello() {
  //To make sure Each component is shown from top
  useEffect(() => {
    window.scroll(0, 0);
  });
  return <h1>Hello!</h1>;
}

function Bye() {
  return <h1>Good Bye</h1>;
}

function NotFound() {
  return <h1>404 Not found</h1>;
}

function Post() {
  const { id } = useParams();
  const location = useLocation();
  console.log(location);
  const params = new URLSearchParams(location.search);
  console.log("params", params.toString());
  const first = params.get("first");
  const last = params.get("last");
  console.log(first, last);
  return (
    <div>
      ID is: <span>{id}</span>
    </div>
  );
}
