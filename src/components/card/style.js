import styled from "styled-components"

// styled Card

export const CardContainer = styled.div`
   display: flex;
   flex-direction: column;
   background-color: whitesmoke;
   color: #555;
   margin: 15px;
   border-radius: 40px 5px 5px 5px;
   width: 200px;
   box-shadow: 3px 3px 3px #B8BACF;
   img{
      border-radius: 40px 5px 40px 5px;
      height: 200px;
      object-fit: cover;
      object-position: center; 
   }
   h2{
      padding: 0 10px;
      margin: 5px;
      font-size: calc(15px + 1 * ((100vw - 600px) / 600));
   }
   p{
      padding: 0 10px;
      margin: 5px;
      font-size: calc(13px + 1 * ((100vw - 600px) / 600));
   }
   button{
      cursor: pointer;
      align-self: center;
      margin: 5px;
      border: none;
      background-color: #D2D5DD;
      color: #555;
      padding: 5px;
   }
   button:hover{
      background-color: #999AC6;
      color: white;
   }
`