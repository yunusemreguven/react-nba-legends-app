import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import { data } from "../helpers/data";
import PlayerCard from "./PlayerCard";
const ContainerCard = () => {
  const [search, setSearch] = useState("");
  console.log(data);
  const handleChange = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value); //? setter metodu asenkron olarak çalışır.
  };
  console.log(search);
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.trim().toLowerCase())
  );
  console.log(filteredData);
  return (
    <>
      <Form.Control
        type="search"
        placeholder="Search Players"
        className="mt-4"
        onChange={handleChange}
      />
      <Container className="p-3 rounded-4 card-container">
        <Row xs={2} md={4} lg={6} className="justify-content-center g-3">
          {filteredData.map((player, i) => (
            <PlayerCard key={i} {...player} />
          ))}
        </Row>
      </Container>
    </>
  );
};
export default ContainerCard;
