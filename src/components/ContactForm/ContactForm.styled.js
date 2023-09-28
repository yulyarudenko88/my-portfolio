import styled from '@emotion/styled';

export const Form = styled.form`
  width: 100%;
  /* text-align: center; */
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 12px;
`;

export const Input = styled.input`
  font-family: inherit;
  font-size: 14px;
  color: var(--primary-text-color);
  outline: none;
  border: none;
  padding: 8px;
  width: 100%;
  background-color: transparent;
  border: 2px solid rgb(128, 127, 127);
  transition: border-color var(--transition-duration) var(--timing-function);

  &::placeholder {
    font-size: 14px;
    transition: opacity var(--transition-duration) var(--timing-function);
  }

  &:hover,
  &:focus {
    border-color: var(--active-text-color);
  }

  &:focus::placeholder,
  &:hover::placeholder {
    opacity: 0;
  }

  &:-webkit-autofill {
    transition: background-color 6000s color 6000s;
  }
`;

export const Textarea = styled.textarea`
  font-family: inherit;
  font-size: 14px;
  color: var(--primary-text-color);
  height: 70px;
  resize: none;
  outline: none;
  border: none;
  padding: 8px;
  width: 100%;
  background-color: transparent;
  border: 2px solid rgb(128, 127, 127);
  transition: border-color var(--transition-duration) var(--timing-function);

  &::placeholder {
    font-size: 14px;
    transition: opacity var(--transition-duration) var(--timing-function);
  }

  &:hover,
  &:focus {
    border-color: var(--active-text-color);
  }

  &:focus::placeholder,
  &:hover::placeholder {
    opacity: 0;
  }

  &:-webkit-autofill {
    transition: background-color 6000s color 6000s;
  }
`;

export const ErrorMessage = styled.span`
  font-size: 10px;
  color: var(--error-color);
`;

export const BtnSubmit = styled.button`
  display: flex;
  width: 125px;
  padding: 12px 40px;
  margin: 0 auto;
  background-color: rgb(128, 127, 127);
  border: 2px solid rgb(128, 127, 127);
  color: var(--white-text-color);
  font-weight: var(--font-weight-semibold);
  font-family: inherit;
  font-size: 16px;

  cursor: pointer;
  text-decoration: none;
  transition: background-color var(--transition-duration) var(--timing-function),
    color var(--transition-duration) var(--timing-function);

  &:focus,
  &:hover {
    background-color: var(--white-text-color);
    color: rgb(128, 127, 127);
  }
`;
