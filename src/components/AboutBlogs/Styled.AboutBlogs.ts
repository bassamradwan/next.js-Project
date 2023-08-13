import styled from "styled-components";

export const BlogContainer = styled.div`
  padding: 35px 10%;
`;

export const FilterNav = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
  border-bottom: 1px solid #e2e2e2;
  padding-bottom: 9px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }
`;

export const FilterItem = styled.li`
  margin: 0 10px;
  padding: 0;
  list-style: none;
  &:hover {
    cursor: pointer;
    color: #0d6efd;
  }

  @media (max-width: 768px) {
    margin: 5px;
  }
`;

export const FilterLink = styled.a<{ active: boolean }>`
  color: ${props => (props.active ? "#07C2AA" : "rgba(0, 0, 0, 0.60)")};
  font-size: 16px;
  position: relative;
  font-family: "Bahij", sans-serif;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  &:hover {
    cursor: pointer;
    color: #07c2aa;
  }
  &:after {
    content: "";
    position: absolute;
    bottom: -11px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${props => (props.active ? "#07C2AA" : "transparent")};
  }
`;
