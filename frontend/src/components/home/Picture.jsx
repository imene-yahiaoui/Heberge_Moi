
import "../../assets/sass/layout/_picture.scss";



const Picture =(props) =>{
    
    return(
      
 <div className="home">
   <img className="home-img" src={props.img} alt ="natur"></img>
   <div className="home-p" >
    <p className="home-text"> {props.text}</p>
    <p className="home-paragraphe"> {props.paragraphe}</p>
    </div>
 </div>

    )

}

export default Picture 