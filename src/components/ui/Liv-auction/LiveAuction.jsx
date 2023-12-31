import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import NftCard from '../Nft-card/NftCard';
import { NFT__DATA } from '../../../assets/data/data.js';

import './live-auction.css';

const LiveAuction = () => {
 return (
  <section>
   <Container>
    <Row>
     <Col lg="12" className="mb-4">
      <div className="live_auction_top d-flex align-items-center justify-content-between">
       <h3>Live Auction</h3>
       <span>
        <Link to="/market">Explore more</Link>
       </span>
      </div>
     </Col>

     {/*Hien thi 8 sp dau tien trong  */}
     {NFT__DATA.map((item) => (
      <Col lg="3" md="4" sm="6" className="mb-4">
       <NftCard key={item.id} item={item} />
      </Col>
     ))}
    </Row>
   </Container>
  </section>
 );
};

export default LiveAuction;
