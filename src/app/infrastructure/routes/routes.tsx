import { Route, Routes as Router } from 'react-router-dom'
import HomePage from '@/app/presentation/pages/home/home'
import { Routes } from '@/app/presentation/protocols'

const AppRoutes = () => {
  return (
    <Router>
      <Route path={Routes.home} element={<HomePage />} />
      <Route path={Routes.notFound} element={<HomePage />} />
    </Router>
  )
}

export default AppRoutes
