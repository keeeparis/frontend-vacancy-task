import React, { lazy, Suspense } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom'

import Layout from './Layout'

const App = lazy(() => import('../pages/App'))
const Search = lazy(() => import('../pages/Search'))
const Token = lazy(() => import('../pages/Token'))

const AppRouter = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <Router basename="/frontend-vacancy-task">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<App />} />
                    <Route path="search" element={<Search />} />
                    <Route path=":id" element={<Token />} />
                </Route>
            </Routes>
        </Router>
    </Suspense>
)

export default AppRouter
