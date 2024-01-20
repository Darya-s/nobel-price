import { useLocation, useParams } from 'react-router';
import useLaureate from './useLaureate';

function Laureate() {
  let { id } = useParams();
  const [person] = useLaureate(id);

  return (
    <>
      <h1> Laureate </h1>
      <h3>{person.fullName.en}</h3>
      <h3>{person.birth.date}</h3>
      <h3>{person.nobelPrizes[0].category.en}</h3>
      {/*console.log(person.fullName)*/}
    </>
  );
}

export default Laureate;
