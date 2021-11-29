import React from 'react';

import { SyncLoader } from 'react-spinners';

const Spinner = ({ loading = true }) => {
  return (
    <div className="flex justify-center">
      <SyncLoader loading={loading} size={15} color="#2B6CB0FF" />
    </div>
  );
};

export default Spinner;
