import { useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const BackBtnLink = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/Movies');

  return (
    <button>
      <AiOutlineArrowLeft style={{ fontSize: 15 }} />
      <Link to={backLinkLocationRef.current}>BACK</Link>
    </button>
  );
};

export default BackBtnLink;
