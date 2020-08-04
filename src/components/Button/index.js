import styled from 'styled-components';

export const Button = styled.button`
  border-radius: 4px;
  border: 1px solid var(--white);
  background-color: var(--black);
  color: var(--white);
  font-size: 16px;
  font-weight: bold;
  padding: 16px 24px;
  text-decoration: none;
  transition: opacity 0.3s;

  &:hover,
  &focus {
    opacity: 0.5;
  }

  @media (max-width: 800px) {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--black);
    border: 0;
    border-radius: 0;
    color: var(--white);
    outline: 0;
    text-align: center;
  }
`;

export default Button;
