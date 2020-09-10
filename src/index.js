import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {combineReducers,createStore} from 'redux'
import studentsReducer from './redux/reducers/students'
import teachersReducer from './redux/reducers/teachers'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './components/app'
import './public/index.css'

const store=createStore(combineReducers({
    students:studentsReducer,
    teachers:teachersReducer
}))

render(
<Provider store={store}>
    <App/>
</Provider>,
document.getElementById('app'))