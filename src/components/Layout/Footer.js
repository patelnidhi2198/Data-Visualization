import styled from 'styled-components';

const Wrapper = styled.footer`
  padding: 1rem 0;
  text-align: center;
`;

function Footer() {
  return (
    <Wrapper>
      <p>2022 &copy; Nidhi Patel. All right reserved.</p>
    </Wrapper>
  );
}

export default Footer;
