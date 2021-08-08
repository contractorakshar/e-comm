import Directory from '../../component/Directory/directory';

import styled from 'styled-components';
const HomepageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;
`;
const Homepage = ({ history }) => {
  return (
    <HomepageContainer className="homepage">
      <Directory />
    </HomepageContainer>
  );
};
export default Homepage;
