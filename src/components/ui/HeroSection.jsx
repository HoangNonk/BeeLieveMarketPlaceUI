import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import './hero-section.css';

const HeroSection = () => {
 return (
  <section className="hero__section">
   <Container>
    <Row>
     <Col lg="6" md="6">
      <div className="hero_content">
       <h2>
        Chơi game, tìm hiểu lịch sử và địa lý, cùng cơ hội{' '}
        <span>kiếm tiền </span> qua NFTs.
       </h2>
       <p>
        Chơi game hấp dẫn chúng tôi cung cấp một loạt các trò chơi thú vị, từ
        câu đố đến trò chơi chiến thuật, giúp bạn giảm căng thẳng và thư giãn
        sau một ngày dài. Tìm hiểu lịch sử và địa lý trong mỗi trò chơi, bạn sẽ
        có cơ hội khám phá thế giới và tìm hiểu về lịch sử và địa lý của các
        quốc gia khác nhau. Đây không chỉ là giải trí, mà còn là cơ hội để bạn
        mở rộng kiến thức của mình.
       </p>
      </div>
     </Col>

     <Col lg="6" md="6">
      <div className="hero_img">
       <img
        src="https://github.com/philong-inco/beelieve/blob/main/HANOI30/L%C4%83ng%20b%C3%A1c/langbac.png?raw=true"
        alt=""
        className="w-100"
       />
      </div>
     </Col>
    </Row>
   </Container>
  </section>
 );
};

export default HeroSection;
