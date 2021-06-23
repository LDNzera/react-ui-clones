import styled, { css } from 'styled-components';

import { FiTruck } from 'react-icons/fi';
import { VscLocation } from 'react-icons/vsc';

export const Container = styled.div`
  padding: 48px 32px;
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--color-border);
`;

export const Title = styled.div`
  font-size: 18px;
  margin-bottom: 20px;
  font-weight: 600;
`;

export const ShippingCard = styled.div`
  display: flex;
  align-items: center;
  padding: 7px 0;

  > div {
    margin-left: 8px;

    > p {
      font-size: 15.8px;
      color: var(--color-green)
    }

    > span {
      font-size: 14px;
      font-weight: 1;

      position: relative;

      left: 1.1px;
      top: 4px;
    }

    > a {
      color: var(--color-blue);
      font-size: 14px;
      font-weight: 500;
      text-decoration: none;

      position: relative !important;
      top: -2vh;
      left: 1.3vw;
    }
  }
`;

const iconCSS = css`
  width: 23px;
  height: 23px;
`;

export const ShippingIcon = styled(FiTruck)`
  color: var(--color-green);
  top: -3.3vh;
  position: relative !important;
  ${iconCSS}
`;

export const ShippingLocationIcon = styled(VscLocation)`
  display: flex;
  align-items: flex-start;
  margin-top: 7px;

  position: relative;
  left: -5px;

  width: 27px;
  height: 23px;

  color: var(--color-blue);

  /* ${iconCSS}; */
`;

export const SellerInformations = styled.a`
  border-top: 1px solid var(--color-border);
  padding: 25px 0;

  > p {
    font-size: 14px;
    font-weight: normal;

    > a {
      text-decoration: none;
      color: var(--color-blue);
      font-weight: 600;
    }
  }
`;

export const SellerSells = styled.div`
  position: relative;
  top: -18px;
  font-size: 14px;
`;

export const StockInformation = styled.div`
  border-top: 1px solid var(--color-border);
  padding: 25px 0;

  > p {
    font-size: 16px;
    font-weight: 600;
  }
`;

export const QuantityInformation = styled.div`
  font-size: 16px;
`;
