import React from 'react';
import styled from 'styled-components';
const FooterList = styled.div`
  border: 1px solid black;
  height: 300px;
`;

//js & css 합치면 보기 쉬워용

const Footer = () => {
  return (
    <div >
      <FooterList>
        <div>
          <ul>
            <li>🏘️ 서울특별시 노원구 행복동</li>
            <li>📞 02) 333-4444</li>
          </ul>
        </div>
      </FooterList>
    </div>
  );
};

export default Footer;
