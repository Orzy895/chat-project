import './App.css'
import { Routes, Route, Navigate } from "react-router-dom"
import Home from './pages/home/Home.jsx'
import Login from './pages/login/Login.jsx'
import Signup from './pages/signup/Signup.jsx'
import Toaster from "react-hot-toast"
import { useAuthContext } from './context/AuthContext.jsx'

function App() {
  const { authUser } = useAuthContext();
  return (
    <>
      <div className='h-screen flex items-center justify-center'>
        <Toaster />
        <Routes>
          <Route path='/' element={authUser ?  <Home /> : <Navigate to="/login" />}></Route>
          <Route path='/login' element={authUser ? <Navigate to="/" /> : <Login />}></Route>
          <Route path='/signup' element={authUser ? <Navigate to="/" /> : <Signup />}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App;
