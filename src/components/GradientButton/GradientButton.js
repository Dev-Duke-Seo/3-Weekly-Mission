import styled from "styled-components";

const StyledButton = styled.button`
  background: var(--button-gradation);
  border-radius: 8px;
  line-height: 1;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  font-size: 1.8rem;
  font-weight: 600;
`;

const GradientButton = ({ children, padding, minWidth = "undefined" }) => {
  return (
    <>
      <StyledButton
        style={{
          padding: `${padding}`,
          minWidth: `${minWidth}`,
        }}
      >
        {children}
      </StyledButton>
    </>
  );
};

export default GradientButton;
