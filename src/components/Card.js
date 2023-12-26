import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CustomModal from "./CustomModal";
import { useState } from "react";

function CustomCard({ id,title, poster, description ,handleDelete}) {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => {
    setShow(true);
  };
  const handleClick = () => {
    handleDelete(id)
  };

  return (
    <>
      <Card style={{ width: "18rem" }} className="m-2">
        <Card.Img variant="top" src={poster} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>

          <Button variant="primary" onClick={handleShow}>
            Show description
          </Button>
          <Button variant="danger" className="m-1" onClick={handleClick}>
            delete
          </Button>
        </Card.Body>
      </Card>
      <CustomModal
        show={show}
        handleClose={handleClose}
        description={description}
      />
    </>
  );
}

export default CustomCard;
