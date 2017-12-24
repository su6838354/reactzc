
import banner from '../../images/quyou/banner/seasonhot.png'
const initStateResponse = {
	data: {
        "count": 0,
        "data": [],
    }
}
const API_PAGE = APIS.API_EAT_SEASON_LIST
const FETCH_PAGE = TYPES.FETCH_EAT_SEASON_LIST
export default class Index extends Quyou{
    state={
        [FETCH_PAGE]:{
            response: initStateResponse
        }
    }
	renderContent(){
        // document.title='当季推荐'
        const me = this
        const { fetching, response = initStateResponse } = me.state[FETCH_PAGE]
        return (
			<div className="season-hot">
                <img className="banner" src={banner} />
                {
                    fetching ? <Spin /> : <List response={response} me={me} />
                }
            </div>
        )
    }
    componentDidMount(){
        const me = this
        me.requestList(me,FETCH_PAGE,API_PAGE)
    }
}
const List = (props) => {
    const { response, me } = props
    const { 
        count = 0,
        data = [],
    } = response.data
    const { pathname } = _location
    return (
        <div> 
            <div className="list">
                {
                    data.map((d = { imgs: [] },i)=>(
                        <div key={i}>
                            <div className="item" onClick={me.openPage.bind(me,`/shophot/${d.id}`)}>
                                <div className="icon cover" style={{backgroundImage:`url(${d.imgs[0]})`}}></div>
                                <div className="box">
                                    <div className="name">{d.season_rec}</div>
                                    <div className="shop">【{d.name}】</div>
                                    <div className="address text-elip"><i className="icon"></i>{d.addr1+d.addr2+d.addr3+d.detail}</div>
                                </div>
                                <div className="good">
                                    <i className="icon"></i>
                                    <div>{d.like_count}</div>
                                </div>
                            </div>
                            {
                                i===data.length-1 ? null : <div className="clearboth thinner-border"></div>
                            }
                        </div>
                    ))
                }
            </div>
            {
                me.page >= Math.ceil(count/me.limit)-1 ?  <NoMoreData /> : <Spin.Spin2 />
            }
        </div>
    )
}