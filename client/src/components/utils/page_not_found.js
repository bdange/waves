import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faExclamataionCircle from '@fortawesome/fontawesome-free-solid/faExclamationCircle';

const PageNotFound = () => {
  return (
    <div className='container'>
      <div className='not_found_container'>
        <FontAwesomeIcon icon={faExclamataionCircle} />
        <div>Oops !! Page not found !</div>
      </div>
    </div>
  );
};

export default PageNotFound;
