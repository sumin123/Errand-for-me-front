import styled from "styled-components";
import BulletImage from "../../images/bullet.svg";
import MapImage from "../../images/map.svg";
import AskImage from "../../images/ask.svg";
import { useHistory } from 'react-router-dom';

const ButtonsContainer = styled.div`
  margin: auto;
`

const HotBulletin = styled.div`
  padding: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
`;

const HotBulletinContainer = styled.div`
  width: 80vw;
  margin: auto;
  border-radius: 20px;
  border: solid 1px;
`

const HotBulletinHeader = styled.div`
  margin: 10px;
  font-size: 20px;
  font-weight: bold;
`

const HotBulletinContent = styled.div`
  margin: 10px;
`

const StyledMenu = styled.img`
  width: 36px;
  height: 36px;
  margin: 20px;
  cursor: pointer;
`;

const weekArr = ["곽진현 머함", "한달만에 가능?", "대충해야 됨ㅋㅋ", "spring 어렵누", "할거 너무 많누", "SAT", "SUN", "MON", "TUE", "WED", "THU"];

const HotBullet = () => {
  const history = useHistory();

  const RoutePage = (url) => {
    history.push('/' + url);
  };

  return (
    <HotBulletin className='hotBulletins'>
      <ButtonsContainer>
        <StyledMenu src={BulletImage} onClick={() => {RoutePage('bulletin')}}></StyledMenu>
        <StyledMenu src={AskImage} onClick={() => {RoutePage('quest')}}></StyledMenu>
        <StyledMenu src={MapImage} onClick={() => {RoutePage('map')}}></StyledMenu>
      </ButtonsContainer>
      <HotBulletinContainer>
        <HotBulletinHeader>Hot 게시판!!</HotBulletinHeader>
        {
          weekArr.map((val, idx) => {
            return <HotBulletinContent key={idx}> {val} </HotBulletinContent>
          })
        }
      </HotBulletinContainer>
    </HotBulletin>
  );
}

export default HotBullet;