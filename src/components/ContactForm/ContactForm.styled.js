import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  display: flex;
  margin-bottom: 15px;
  flex-direction: column;
`;

export const Button = styled.button`
  display: block;
  margin-right: auto;
  border-radius: 4px;
  border: 1px solid;
  min-width: 150px;
  min-height: 35px;
  font-weight: 500;
  font-size: 15px;
  line-height: 1.9;
  cursor: pointer;
  letter-spacing: 0.06em;
  background-color: honeydew;
`;

export const Span = styled.span`
  margin-bottom: 8px;
  font-weight: 500;
`;

export const Input = styled.input`
  border-radius: 9px;
  min-height: 20px;
`;
