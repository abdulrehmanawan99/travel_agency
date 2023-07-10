import NavHeader from "./NavHeader";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";


const ViewDetail = () => {
const params = useParams();
const showTravel = useSelector((state)=>state.travel.travelPlans)
console.log(showTravel);
const show = showTravel.find((travel) => travel.id === Number(params.travelId))

return(
    <>
    <NavHeader/>
      <div key={show.id}>
      <p>{show?.destinationTitle}</p>
      <p>{show?.destinationDescription}</p>
      <p>{show?.maxPersons}</p>
      <p>{show?.status}</p>
      <p>{show?.startDate}</p>
      <p>{show?.endDate}</p>
      <p>{show?.cost}</p>
      </div>
    </>
)
}

export default ViewDetail;