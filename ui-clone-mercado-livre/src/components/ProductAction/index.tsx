import React from "react";

import {
  Container,
  Condition,
  Row,
  HeartIcon,
  DispatchTag,
  PriceCard,
  PriceRow,
  InstallmentsInfo,
  SellerInfo,
  SellsInfo,
  StockStatus,
  MethodCard,
  CheckIcon,
  LocationIcon,
  Actions,
  Button,
  Benefits,
  ReturnIcon,
  ShieldIcon,
  TrophyIcon,
  MedalIcon,
} from "./styles";

const ProductAction: React.FC = () => {
  return (
    <Container>
      <Condition>Novo | 5745 vendidos</Condition>

      <Row>
        <h1>Camiseta Branca</h1>
        <HeartIcon />
      </Row>

      <DispatchTag>Enviando normalmente</DispatchTag>

      <PriceCard>
        <PriceRow>
          <span className="symbol">R$</span>
          <span className="fraction">34</span>
          <span className="cents">99</span>
        </PriceRow>

        <InstallmentsInfo>
          em <span>3x de R$11,67</span> sem juros
        </InstallmentsInfo>

        <a href="#">Ver os meios de pagamento</a>
      </PriceCard>

      <SellerInfo>
        <span>
          Vendido por <a href="#">Pedro Galembeck</a>
        </span>
      </SellerInfo>

      <SellsInfo>666 vendas</SellsInfo>

      <StockStatus>Estoque disponível</StockStatus>

      <MethodCard>
        <CheckIcon />

        <div>
          <span className="title">
            Entrega grátis <strong>sexta-feira</strong>
          </span>
          <span className="details">Benefício Mercado Points</span>
          <a href="#" className="more">
            <LocationIcon />
            Entregar para São-Paulo 13070309
          </a>
        </div>
      </MethodCard>

      <Actions>
        <Button solid>Comprar agora</Button>
        <Button>Adicionar ao carrinho</Button>
      </Actions>

      <Benefits>
        <li>
          <ReturnIcon />
          <p>
            <span>Devolução grátis!</span> Você tem até 7 dias a partir da data
            de recebimento.
          </p>
        </li>
        <li>
          <ShieldIcon />
          <p>
            <span>Compra garantida</span>, receba o produto que está esperando
            ou devolvemos seu dinheiro.
          </p>
        </li>
        <li>
          <TrophyIcon />
          <p>
            <span>Mercado Pontos.</span> Você acumula 176 pontos com esta
            compra.
          </p>
        </li>
        <li>
          <MedalIcon />
          <p>6 meses de garantia de fábrica.</p>
        </li>
      </Benefits>
    </Container>
  );
};

export default ProductAction;
