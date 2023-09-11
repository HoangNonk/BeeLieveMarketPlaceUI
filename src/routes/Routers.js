import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from '../pages/Home';
import Market from '../pages/Market';
import Contact from '../pages/Contact';
import Create from '../pages/Create';
import EditProfile from '../pages/EditProfile';
import NftDetails from '../pages/NftDetails';
import SellProfile from '../pages/SellProfile';
import Wallet from '../pages/Wallet';

const Routers = () => {
 return (
  <Routes>
   <Route path='/' element={<Navigate to='/home' />} />
   <Route path='/home' element={<Home />} />
   <Route path='/market' element={<Market />} />
   <Route path='/create' element={<Create />} />
   <Route path='/contact' element={<Contact />} />
   <Route path='/edit-profile' element={<EditProfile />} />
   <Route path='/sell-profile' element={<SellProfile />} />
   <Route path='/wallet' element={<Wallet />} />
   <Route path='/market:id' element={<NftDetails />} />
  </Routes>
 );
};
export default Routers;
