import React, { useContext, useEffect, useState } from "react";
import { Table, Tag, Modal } from "antd";
import { Link } from "react-router-dom";
import { useProduct } from "../../stores/products.store";
import styled from "styled-components";
import { AuthContext } from "../../contexts/auth-context";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  margin-bottom: 10px;
`;

const HeaderButton = styled(Button)`
  margin-right: 32px;
  margin-bottom: 0;
`;

const HeaderContainer = styled.header`
  height: 38px;
  width: 100vw;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 16px;
  background-color: #f2f2f2;
`;

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "EAN",
    dataIndex: "ean",
    key: "ean",
    sorter: (a, b) => a.ean - b.ean,
    sortDirections: ["descend", "ascend"],
  },
  {
    title: "UPC",
    dataIndex: "upc",
    key: "upc",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Categories",
    dataIndex: "categories",
    key: "categories",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
];


const Lista = () => {
  const { logout } = useContext(AuthContext);
  const { getProducts, products } = useProduct();

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  let data = [];
  if (products && Array.isArray(products.data)) {
    data = products.data.map((product) => ({
      key: product.id,
      name: product.name,
      description: product.description,
      ean: product.ean,
      upc: product.upc,
      price: product.price,
      categories: product.categories.join(", "),
      tags: product.tags,
    }));
  }

  return (
    <Container>
      <HeaderContainer>
        <HeaderButton onClick={showModal}>Explicação</HeaderButton>
        <Link to="/home">
          <HeaderButton>Voltar</HeaderButton>
        </Link>
        <HeaderButton onClick={logout}>Logout</HeaderButton>
      </HeaderContainer>
      <h1>Lista com ANTD DESIGN para Estracta</h1>
      <Table
        columns={columns}
        dataSource={data}
        scroll={{
          y: 240,
        }}
      />
      <Modal
        title="Explicação"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>
          Lista utilizando os recursos de table da biblioteca ANTD Design,
          buscando dados da API pública
          https://fakerapi.it/api/v1/products?_quantity=120 que retorna,
          seguindo estipulado, 120 itens. Header fixa por opção. Adição de
          função de ordenação/sorter na coluna EAN.
        </p>
      </Modal>
    </Container>
  );
};

export default Lista;
