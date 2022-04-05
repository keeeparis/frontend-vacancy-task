import { lazy, Suspense } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'
import Layout from './Layout/Layout'

const App = lazy(() => import('../pages/App/App'))
const Search = lazy(() => import('../pages/Search/Search'))
const Token = lazy(() => import('../pages/Token/Token'))

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Router basename={'/'}>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<App />} />
                        <Route path='search' element={<Search />} />
                        <Route path=':id' element={<Token />} />
                    </Route>
                </Routes>
            </Router>
        </Suspense>
    )
}

export default AppRouter