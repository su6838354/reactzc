import gjxl from '../../images/quyou/trip/gjxl.png'
import bustime1 from '../../images/quyou/trip/1@3x.png'
import bustime2 from '../../images/quyou/trip/2@3x.png'
import bustime3 from '../../images/quyou/trip/3@3x.png'
import bustime4 from '../../images/quyou/trip/4@3x.png'

export default class Index extends Quyou{
	renderContent(){
        // document.title='公交时刻表'
        return (
            <div className="trip-busline">
                <img className="gjxl" src={gjxl} />
                {/* <div className="line-table"></div>  */}
                <img className="bustime" src={bustime1} />
                <img className="bustime" src={bustime2} style={{top:'-1px'}} />
                <img className="bustime" src={bustime3} style={{top:'-2px'}} />
                <img className="bustime" src={bustime4} style={{top:'-3px'}} />
            </div>
        )
    }
}