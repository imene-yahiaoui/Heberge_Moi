import"../../assets/sass/layout/_host.scss"
import { VscLocation } from "react-icons/vsc";

const Host = (props) => {
    return (
      <div>
    <div className="info_utilisateur">
    <p className="info_utilisateur_name" >{props.name}</p>
    </div>

    <div className="info_utilisateur">
    <VscLocation/>
    <p className="info_titre_localitation">{props.location}</p>
     
    </div>
    </div>
    )
};

export default Host;