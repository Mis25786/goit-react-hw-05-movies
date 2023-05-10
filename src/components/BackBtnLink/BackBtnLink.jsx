import { useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import css from './BackBtnLink.module.css';

const BackBtnLink = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/Movies');

  return (
    <button className={css['BtnBack']}>
      <AiOutlineArrowLeft style={{ fontSize: 15 }} />
      <Link to={backLinkLocationRef.current} className={css['BtnBackText']}>
        BACK
      </Link>
    </button>
  );
};

export default BackBtnLink;
