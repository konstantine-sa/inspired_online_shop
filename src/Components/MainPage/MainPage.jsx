import { useParams } from "react-router-dom";
import { Container } from "../Layout/Container/Container";

export const MainPage = ({ gender = "women" }) => {
  const { category } = useParams();

  return (
    <Container>
      <div>MainPage {gender}</div>
      {category && <p>Category: {category}</p>}
    </Container>
  );
};
