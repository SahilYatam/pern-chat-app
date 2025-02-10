import { Navigate } from "react-router-dom"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home"
import SignUp from "./pages/signup/SignUp"
import Login from "./pages/login/Login"
import { useAuthContext } from "./context/AuthContext"

function App() {
  const {authUser, isLoading} = useAuthContext();

  if(isLoading) return null;

  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
				<Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"}/> } />
				<Route path='/signup' element={!authUser ? <SignUp /> : <Navigate to={"/"}/> } />
				<Route path='/login' element={!authUser ? <Login /> : <Navigate to={"/"}/> } />
			</Routes>
    </div>
  )
}

export default App
