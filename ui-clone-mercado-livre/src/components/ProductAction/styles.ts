import styled from 'styled-components';

import { HiOutlineHeart, HiOutlineShieldCheck } from 'react-icons/hi';
import { FiTruck } from 'react-icons/fi';
import { VscLocation } from 'react-icons/vsc'
import { BsArrowReturnLeft } from 'react-icons/bs';
import { AiOutlineTrophy } from 'react-icons/ai';
import { RiMedal2Line } from 'react-icons/ri';

export const Container = styled.div`
  padding: 32px;
  display: flex;
  flex-direction: column;
`;

export const Condition = styled.div`
  font-size: 14px;
  color: var(--color-gray);
  margin-bottom: 16px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;

  > h1 {
    width: 100%;
    font-size: 26px;
    font-weight: 600;
  }
`;

export const HeartIcon = styled(HiOutlineHeart)`
  width: 28px;
  height: 28px;
  color: var(--color-blue);
  flex-shrink: 0;

  margin-left: 16px;
  cursor: pointer;
`;

export const DispatchTag = styled.div`
  margin-top: 12px;
  background: var(--color-blue);
  color: var(--color-white);
  padding: 6px 10px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  width: fit-content;
`;

export const PriceCard = styled.div`
  margin-top: 18px;
  display: flex;
  flex-direction: column;

  > a {
    margin-top: 6px;
    text-decoration: none;
    color: var(--color-blue);
    font-size: 13px;
    font-weight: normal;
  }
`;

export const PriceRow = styled.div`
  display: flex;
  align-items: flex-start;
  font-size: 44px;
  font-weight: 300;

  .fraction {
    margin-left: 8.8px;
  }

  .cents {
    font-size: 20px;
    padding-top: 3px;
    margin-left: 1px;
  }
`;

export const InstallmentsInfo = styled.div`
  font-size: 16px;

  > span {
    color: var(--color-green);
  }
`;

export const SellerInfo = styled.div`
  margin-top: 24px;
  font-size: 15px;

  > span {
    a {
      text-decoration: none;
      color: var(--color-blue);
      font-weight: 600;
    }
  }
`;

export const SellsInfo= styled.div`
  margin-top: 6px;
  font-size: 15px;
`;

export const StockStatus = styled.div`
  margin-top: 24px;
  font-size: 16px;
  font-weight: 600;
`;

export const MethodCard = styled.div`
  margin-top: 18px;
  display: flex;

  > div {
    margin-left: 8px;
    display: flex;
    flex-direction: column;

    .title {
      color: var(--color-green);
      font-size: 16px;
    }

    .details {
      margin-top: 5px;
      color: var(--color-gray);
      font-size: 14px;
    }

    .more {
      margin-top: 5px;
      color: var(--color-blue);
      text-decoration: none;
      font-size: 14px;
      font-weight: 600;
    }
  }
`;

export const LocationIcon = styled(VscLocation)`
  width: 18px;
  height: 18px;
`;

export const CheckIcon = styled(FiTruck)`
  width: 24px;
  height: 24px;
  color: var(--color-green);
`;

export const Actions = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
`;

type ButtonProps = { solid?: boolean };

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 15px;
  border-radius: 4px;
  padding: 15px 10px;
  margin-top: 10px;

  color: ${(props) => props.solid ? "var(--color-white)" : "var(--color-blue)"};
  background: ${(props) => (props.solid ? "var(--color-blue)" : "var(--color-button)")};
  /* border: ${(props) => (props.solid ? "none" : "1px solid var(--color-blue)")}; */

  &:hover {
    background: ${(props) => (props.solid ? "var(--color-button-blue)" : "var(--color-button-white)")};

    transition: .50s ease-out, background-color .2s ease-out;
  }

  cursor: pointer;
`;

export const Benefits = styled.ul`
  margin-top: 16px;
  list-style: none;
  display: flex;
  flex-direction: column;

  > li {
    display: flex;
    padding: 10px 0;

    p {
      margin-left: 10px;
      color: var(--color-gray);
      font-size: 15px;

      span {
        color: var(--color-blue);
      }
    }
  }
`;

export const ReturnIcon = styled(BsArrowReturnLeft)`
  width: 20px;
  height: 20px;
  color: var(--color-gray);
  flex-shrink: 0;
`;

export const ShieldIcon = styled(HiOutlineShieldCheck)`
  width: 20px;
  height: 20px;
  color: var(--color-gray);
  flex-shrink: 0;
`;

export const TrophyIcon = styled(AiOutlineTrophy)`
  width: 20px;
  height: 20px;
  color: var(--color-gray);
  flex-shrink: 0;
`;

export const MedalIcon = styled(RiMedal2Line)`
  width: 20px;
  height: 20px;
  color: var(--color-gray);
  flex-shrink: 0;
`;
