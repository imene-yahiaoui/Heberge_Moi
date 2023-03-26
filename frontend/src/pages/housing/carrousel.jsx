import "../../assets/sass/layout/_carrousel.scss";
import { FcFullTrash } from "react-icons/fc";
import { useSelector } from "react-redux";
import { selectUser, body } from "../../helpers/features/userSlice";
import { FcEditImage } from "react-icons/fc";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import FetchData from "../../helpers/utile/fetchData"
import { useDispatch } from "react-redux";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";
const Carrousel = ({ slides }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const user = useSelector(selectUser);
  let token = localStorage.getItem("token");
  const { id } = useParams();
  const porjectID = id;
  const navigate = useNavigate();
  console.log("le id cest ", id);
  const dispatch = useDispatch();

  function delet() {
    setShow(true);
  }
  function deletProjet(id) {
    const deletData = async () => {
      try {
        const requete = await fetch(
          " http://localhost:3000/api/accommodate/" + porjectID,
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (requete.ok) {
          navigate("/");

          const fetchData = async () => {
            try {
              const requete = await fetch(
                " http://localhost:3000/api/accommodate",
                {
                  method: "GET",
                }
              );
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
        }
      } catch (e) {
        console.log(e, "error");
      }
    };
    deletData();
  }
  function edit() {}

  return !user ? (
    <div className="carousel">
      <div
        className="carousel-img"
        style={{ backgroundImage: `url(${slides})` }}
      ></div>
    </div>
  ) : (
    <div className="carousel">
      <FcFullTrash onClick={delet} className="FcFullTrash" />
      <FcEditImage className="FcFullTrash" onClick={edit} />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Supprime</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Etes-vous certain de vouloir Supprimer ce logement ?{" "}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={deletProjet}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
      <div
        className="carousel-img"
        style={{ backgroundImage: `url(${slides})` }}
      ></div>
    </div>
  );
};

export default Carrousel;
