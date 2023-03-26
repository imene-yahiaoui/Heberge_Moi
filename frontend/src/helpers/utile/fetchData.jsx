 
import { useDispatch } from "react-redux";
import { body } from "../features/userSlice";
 
const FetchData = () => {
    const dispatch = useDispatch();
    const fetchData = async () => {
        try {
          const requete = await fetch(" http://localhost:3000/api/accommodate", {
            method: "GET",
          });
          if (requete.ok) {
            const response = await requete.json();
  
            dispatch(
              body({
                response,
              })
            );
            console.log(response);
          }
        } catch (e) {
          console.log(e, "error");
        }
      };
      fetchData();
};
export default FetchData;