import React from 'react'
import { Quyou } from './Quyou'
export default class CurrentRoutes extends Quyou{
	render(){
        document.title='趣游崇明'
		return (
            <div style={{padding:5}}>
                { Object.keys(pageMapRoute).map(d=>(<div  key={d}><a href={"#/"+d} >{d}</a></div>)) }
            </div>
        )
	}
} 