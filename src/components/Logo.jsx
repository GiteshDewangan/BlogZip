import React from 'react';

function Logo({ width = '100px', imageUrl }) {
  return (
    <div>
      <img src={imageUrl} alt="" style={{ width }} />
    </div>
  );
}

export default Logo;
