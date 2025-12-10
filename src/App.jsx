import './App.css'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import HobbiesPage from './pages/HobbiesPage'
import ContactsPage from './pages/ContactsPage'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/progetti" element={<ProjectsPage />} />
            <Route path="/hobbies" element={<HobbiesPage />} />
            <Route path="/contatti" element={<ContactsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
