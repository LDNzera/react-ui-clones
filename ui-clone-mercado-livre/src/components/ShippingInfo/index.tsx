import React from "react";

import {
  Container,
  Title,
  ShippingCard,
  ShippingIcon,
  ShippingLocationIcon,
  SellerInformations,
  SellerSells,
  StockInformation,
  QuantityInformation,
} from "./styles";

const ShippingInfo: React.FC = () => {
  return (
    <Container>
      <Title>Informações sobre o frete</Title>

      <ShippingCard>
        <ShippingIcon />

        <div>
          <p>
            Chegará grátis <strong>sexta-feira</strong>
          </p>
          <span>Benefício Mercado Points</span>

          <ShippingLocationIcon />
          <a href="#">Enviar para Campinas-13080793</a>
        </div>
      </ShippingCard>

      <SellerInformations>
        <p>
          Vendido por <a href="#">SeU PiOr PeSaDeLo</a>
        </p>
      </SellerInformations>

      <SellerSells>
        <span>561 vendas</span>
      </SellerSells>

      <StockInformation>
        <p>Estoque disponível</p>
      </StockInformation>

      <QuantityInformation>
        <p>
          Quantidade: <strong>247 unidade(s)</strong>
        </p>
      </QuantityInformation>
    </Container>
  );
};

export default ShippingInfo;
