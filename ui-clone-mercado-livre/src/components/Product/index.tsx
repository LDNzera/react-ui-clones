import React from "react";

import {
  Container,
  Row,
  Panel,
  Column,
  Gallery,
  Section,
  Description,
} from "./styles";

import SellerInfo from "../SellerInfo";
import ShippingInfo from "../ShippingInfo";
import ProductAction from "../ProductAction";

import tshirtImage from "../../assets/tshirt.png";

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img alt="T-Shirt" src={tshirtImage} />
          </Gallery>

          <Info />
        </Column>

        <Column>
          {/* <ShippingInfo /> */}
          <ProductAction />
          <SellerInfo />

          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="tittle">Compra garantida com o Lorem Ipsum.</p>
        <p className="description">
          Receba o produto que você está esperando, ou devolvemos seu dinheiro
        </p>
      </span>
      <span>
        <p className="tittle">Garantia do Vendedor</p>
        <p className="description">Sem garantia</p>
      </span>
    </div>

    <a href="#">Saiba mais sobre garantia</a>
  </Section>
);

const Info = () => (
  <Description>
    <h2>Descrição</h2>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nibh metus,
      bibendum nec libero ac, lacinia varius lacus. Proin justo dui, pretium nec
      orci ac, efficitur suscipit enim. Nam vitae dolor vulputate, mollis felis
      nec, pretium quam. Donec eget fringilla dui, vel ultrices nisi. Interdum
      et malesuada fames ac ante ipsum primis in faucibus. Duis eget ex posuere,
      facilisis lorem id, consequat purus. Quisque leo nulla, accumsan eu luctus
      in, porta congue ligula. Vestibulum non aliquam lectus, ac sodales magna.
      Nunc viverra enim eget commodo volutpat. Curabitur quam nibh, porttitor
      sed diam ut, dictum pellentesque velit. Donec ut libero eu erat vehicula
      efficitur. In hac habitasse platea dictumst. Ut nec ornare libero, at
      tincidunt lorem. Proin a mi in turpis consequat viverra. Sed et neque
      eleifend, ornare libero et, gravida enim.
      <br />
      <br />
      Itens incluso: <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      <br />
      Nam at nibh in libero feugiat porta. Nunc ut eros molestie, vestibulum
      justo vitae, porta nibh. Suspendisse molestie consectetur pulvinar. Ut
      quis semper dolor. Quisque et velit justo. Nam aliquet, lorem et auctor
      mollis, risus risus sodales massa, in tempor urna nisi non mi. Nullam
      vehicula velit ac dignissim commodo. Pellentesque odio magna, finibus id
      tempor nec, mollis sed elit. Interdum et malesuada fames ac ante ipsum
      primis in faucibus. Vestibulum luctus molestie justo sit amet semper.
      Etiam interdum, lorem accumsan tincidunt lacinia, sem elit tincidunt mi,
      quis tincidunt urna metus at lorem. Aenean efficitur ullamcorper orci, vel
      tincidunt lorem dapibus id. Phasellus dictum nibh leo, a porta odio
      posuere vitae. Morbi ornare, neque id vulputate venenatis, augue risus
      sollicitudin urna, quis cursus magna eros ac felis. Donec tempor enim
      quam, et tincidunt lorem blandit eu. Maecenas ultrices scelerisque
      consequat. Praesent vulputate euismod libero, ac venenatis enim porta id.
      Phasellus feugiat molestie nunc, sit amet pretium ipsum bibendum ut.
      Quisque nec laoreet ante, et malesuada velit. Aliquam dictum velit
      molestie pharetra auctor.
    </p>
  </Description>
);

export default Product;
