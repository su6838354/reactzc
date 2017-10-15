import React from 'react'
import { Quyou } from './Quyou'
import '../../styles/quyou/seasonhot.scss'
import banner from '../../images/quyou/banner/seasonhot.png'
class SeasonHot extends Quyou{
	render(){
        document.title='当季推荐'
		return (
			<div className="season-hot"> 
                <img className="banner" src={banner} />
                <div className="list">
                    <div className="item">
                        <div className="icon cover"></div>
                        <div className="box">
                            <div className="name">崇明樱桃</div>
                            <div className="shop">【天天果园】</div>
                            <div className="address">城桥镇南门路37弄18号</div>
                        </div>
                        <div className="good">
                            <i className="icon"></i>
                            <div>587</div>
                        </div>
                    </div>
                    <div className="clearboth thinner-border"></div>
                    <div className="item">
                        <div className="icon cover"></div>
                        <div className="box">
                            <div className="name">崇明樱桃</div>
                            <div className="shop">【天天果园】</div>
                            <div className="address">城桥镇南门路37弄18号</div>
                        </div>
                        <div className="good">
                            <i className="icon"></i>
                            <div>587</div>
                        </div>
                    </div>
                    <div className="clearboth thinner-border"></div>
                </div>
            </div>
		)
	}
}
export default SeasonHot