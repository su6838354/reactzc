import React, { Component } from 'react'
import { Provider } from 'react-redux'
import App from './App'
import configureStore from '../store'

const store=configureStore()
window.store=store
let unsubscribe=store.subscribe(()=>{ // 订阅状态
	console.log("订阅状态begin")
	console.log(store.getState())
	console.log("订阅状态end")
})
// unsubscribe() // 取消订阅

// 容器型组件
export default class Root extends Component{
	render(){
		return (
			<Provider store={store} >
				<App />
			</Provider>
		)
	}
}