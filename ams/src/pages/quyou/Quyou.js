import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Mask from '../../components/Mask/'
import CreateComment from '../../components/CreateComment/'
import Sign from '../../components/Sign/'
import Spin from '../../components/Spin/'
window.Mask=Mask
window.CreateComment=CreateComment
window.Sign=Sign
window.Spin=Spin

export class Quyou extends Component{ // 公共模板
	componentWillMount(){
        window.onscroll=null
        window.ontouchstart=null
        window.ontouchend=null
        delete window['touchstartY']
        delete window['touchendY']
        window._location=this.props.location
		window.scrollTo(0, 0)
    }
	openPage(url,e){ // 打开页面
		this.context.router.push(url)
	}
}
Quyou.contextTypes={
	router: PropTypes.object
}
window.Quyou=Quyou

export const PostList = (props) => {
    const { list, me, pathname } = props
    return (
        <div className="list">
            {
                list.map((d,i)=>(
                    <div key={i}>
                        <div className="item">
                            <div className="avatar-name">
                                <i className="icon"></i>
                                <span>吃货小分队</span>
                            </div>
                            <div className="content" onClick={me.openPage.bind(me,`${pathname}/${i+1}`)}>驴肉火烧简直是人间美味~~~</div>
                            <div className="icon cover" onClick={me.openPage.bind(me,`${pathname}/${i+1}`)}>
                                {
                                    ~pathname.indexOf('video') ? <i className="icon play" /> : null
                                }
                                
                            </div>
                            <div className="dos">
                                <div className={classnames({do:true,active:i%2})} onClick={me.doGood.bind(this)}>
                                    <i className="icon good"></i>
                                    <span>1088</span>
                                </div>
                                <div className="thin-border-verical"></div>
                                <div className="do" onClick={me.openPage.bind(me,`${pathname}/${i+1}`)}>
                                    <i className="icon comment"></i>
                                    <span>2058</span>
                                </div>
                            </div>
                        </div>
                        <div className="clearboth thinner-border"></div>
                    </div>
                ))
            }
        </div>
    )
}
export const PostDetail  = (props) => {
    const { isVideoPost = false, isImagePost = false } = props
    return (
        <div>
            {
                isVideoPost ? (<video src="//v.xiaohongshu.com/ljeahFnueWK2AxUEWbYskA94oKzW" controls="controls" playsInline="true" poster="http://ci.xiaohongshu.com/3156aeaf-745a-4770-942a-e660431dc5d5@r_640w_640h.jpg">您的浏览器不支持 video 标签。</video>) : null
            }
            <div className="toper">
                <div className="title">强烈推荐徐家汇的这家日料</div>
                <div className="heder">
                    <div className="follow"><span>+</span>关注</div>
                    <img src={"https://img.xiaohongshu.com/avatar/59cfbaecb46c5d515aa83eee.jpg@80w_80h_90q_1e_1c_1x.jpg"} />
                    <div className="nickname">人气小登登</div>
                    <div className="create">2017-09-29</div>
                </div>
                {
                    isImagePost ? (<div className="icon cover" style={{backgroundImage:'url(http://ac-tulkzvki.clouddn.com/5m7AK2sp4XT0ygsw0a3vgzWvVgdD5FDTgD4gKM2l.jpg)'}}></div>) : null
                }
                <div className="text">我也想有一个酱紫比男朋友还暖心的大金毛🌀感动到最后一个竟然笑了 太可爱🌀别人家的狗😂 我们家的四只泰迪我撞死了都跟他们没关系，有人喂饭就好了</div>
            </div>
        </div>
        
    )
}
export const CommentList = (props) => {
    const {
        total = 0,
        list = [],
    } = props
    return (
        <div className="comment-necker">
            <div className="comment-title">用户评论 ({total})</div>
            <div className="clearboth thinner-border"></div>
            <ul className="comment-list">
                {
                    list.map((d,i)=>(
                        <li key={i}>
                            <img src={"https://img.xiaohongshu.com/avatar/59cfbaecb46c5d515aa83eee.jpg@80w_80h_90q_1e_1c_1x.jpg"} />
                            <div className="create">3分钟前</div> 
                            <div className="nicktext">
                                <div className="nick">圣保罗爷爷</div>
                                <div className="text">火箭上升至西部第一</div>
                            </div>
                            <div className="clearboth thinner-border"></div>
                        </li>
                    ))
                }
            </ul>
            <div className="view-more">查看更多评论</div>
        </div>
    )
}
export const CommentFixed = (props) => {
    const { handleShowCreateComment, handleLike } = props
    return (
        <div className="fixed-footer">
            <div className="clearboth thinner-border"></div>
            <div className="text" onClick={handleShowCreateComment}>想搭讪，先评论</div>
            <div className="good-box" onClick={handleLike}>
                <i className="icon"></i>
                <span>261</span>
            </div>
        </div>
    )
}
export const Intro = (props) => {
    const { needCover = false } = props
    return (
        <div className="shop-header">
            <div className="header-box">
                <div className="thin-border-verical-box">
                    <div className="thin-border-verical"></div>
                </div>
                <a href="tel:15601963619" className="icon phone"></a>
                <div className="name"><i className="icon" />【乐凯普面包烘焙】</div>
                <div className="address"><i className="icon" />城桥镇南门路37弄18号</div>
                {
                    needCover ? (<div className="icon cover"></div>) : null
                }
            </div>
        </div>
    ) 
}
window.getScrollTop = () => { //获取滚动条当前的位置
	var scrollTop = 0; 
    if (document.documentElement && document.documentElement.scrollTop) { 
    	scrollTop = document.documentElement.scrollTop; 
    } 
    else if (document.body) { 
    	scrollTop = document.body.scrollTop; 
    } 
    return scrollTop; 
} 

window.getClientHeight = () => { //获取当前可是范围的高度
	var clientHeight = 0; 
    if (document.body.clientHeight && document.documentElement.clientHeight) { 
   		clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight); 
    } 
    else { 
    	clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight); 
    } 
    return clientHeight; 
}

window.getScrollHeight = () => { //获取文档完整的高度
	return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight); 
}