import {BsFillBookmarkPlusFill} from 'react-icons/bs';
import "../App.css";
const Cards = (props)=>{
    return(
        <div className="main">
            <div className="left">
                <div className="upper">
                    <img src={props.avatar} alt="not found"/>
                    <span>{props.name}</span>
                </div>
                <div className="middle">
                    <h2>{props.topic}</h2>
                    <p>{props.des}</p>
                </div>
                <div className="lower">
                    <span>{props.date}</span>
                    <span>{props.read}</span>
                    <span className="border">{props.category}</span>
                    <span><BsFillBookmarkPlusFill className='icon'/></span>
                </div>
            </div>
            <div className="right">
                <img src={props.Image}alt="not found"/>
            </div>

        </div>
    )
}
export default Cards