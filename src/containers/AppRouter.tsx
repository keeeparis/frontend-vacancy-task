import React from 'react'
import {
    HashRouter as Router,
    Routes,
    Route,
} from 'react-router-dom'

import LazyMinLoadTime from './LazyMinLoadTime'
import Suspense from './Suspense'
import Layout from './Layout'

const App = LazyMinLoadTime(() => import('../pages/App'))
const Search = LazyMinLoadTime(() => import('../pages/Search'))
const Token = LazyMinLoadTime(() => import('../pages/Token'))

const AppRouter = () => (
    <Router basename="/">
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route
                    index
                    element={<Suspense component={<App />} />}
                />
                <Route
                    path="search"
                    element={<Suspense component={<Search />} />}
                />
                <Route
                    path=":id"
                    element={<Suspense component={<Token />} />}
                />
            </Route>
        </Routes>
    </Router>
)

export default AppRouter
