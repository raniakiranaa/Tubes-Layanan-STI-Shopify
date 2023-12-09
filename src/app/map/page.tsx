import React from 'react';
import Image from 'next/image';
import map from '../../../public/maps.svg'
import Navbar from '../../components/navigation/nav';
import Sidebar from '../../components/Sidebar/sidebar'
import Shopify from '../../../public/shopify icon map.svg'

const Map = () => {
  return (
    <div>
        <Image src={map} alt="map" layout="fill" objectFit="cover" />
        <Sidebar currentPage="maps" />
    </div>
  );
};

export default Map;
