import { lazy, Suspense } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'

import Layout from './Layout'
import Main from '../pages/Main'

const App = lazy(() => import('../pages/App'))
const Search = lazy(() => import('../pages/Search'))
const Token = lazy(() => import('../pages/Token'))

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Router basename={'/frontend-vacancy-task'}>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<Main />} />
                        <Route path='tokens' element={<App />} />
                        <Route path='search' element={<Search />} />
                        <Route path=':id' element={<Token />} />
                    </Route>
                </Routes>
            </Router>
        </Suspense>
    )
}

export default AppRouter