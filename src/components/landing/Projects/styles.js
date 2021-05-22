

import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 2rem 0;
`;

export const Grid = styled.div`
  padding: .5rem;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 8fr;
  gap: 1.2rem 1.2rem;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

export const Item = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.11);
  &:hover {
     transform: scale(1.005);
   	 box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.3);
	   transition: box-shadow 2s, transform 2s;
     .thumb_img{
       opacity:1;
       transition:2s;
       
     }
  }



  h4 {
    color: ${({ theme }) => (theme === 'light' ? '#212121' : '#fff')};
    margin-bottom:2px;
  }

  p {
    color: ${({ theme }) => (theme === 'light' ? '#707070' : '#c7c7c7')};
    margin-bottom:10px;
  }
`;

export const Content = styled.div`
  padding: 1rem 0;
`;
export const Thumb = styled.div`
 div{
   width: 100%;
   height: 200px;
 }
.thumb_img{
   width:100%;
   height:100%;
   object-fit:cover;
   opacity: .7;
  overflow:hidden;
  object-fit : fill;
 }
`;

export const Tech = styled.div`
  display:flex;
  align-items : center;
  flex-wrap : wrap;

`;
export const TechBtn = styled.div`
width : 70px;
height :100%;
padding : 0px 5px;



`;







// export const Stats = styled.div`
//   display: flex;
//   align-items: center;

//   div {
//     display: flex;
//     &:first-child {
//       margin-right: 0.5rem;
//     }

//     img {
//       margin: 0;
//     }

//     svg path {
//       fill: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
//     }

//     span {
//       color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
//       margin-left: 0.5rem;
//     }
//   }
// `;
