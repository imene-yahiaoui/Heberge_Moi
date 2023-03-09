import"../../assets/sass/layout/_host.scss"

const Host = (props) => {
    return (
    <div className="info_utilisateur">
    <p className="info_utilisateur_name" >{props.name}</p>
      <img className="info_utilisateur_img"src={props.picture} alt=""></img>
     
    </div>
    )
};

export default Host;