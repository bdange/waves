import React from 'react';
import UserLayout from '../../../hoc/user';
import UpdateSiteNfo from './update_site_info';

const ManageSite = () => {
  return (
    <div>
      <UserLayout>
        <UpdateSiteNfo />
      </UserLayout>
    </div>
  );
};

export default ManageSite;
