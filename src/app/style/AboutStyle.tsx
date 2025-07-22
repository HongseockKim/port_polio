'use client'
import styled from "styled-components";

export const AboutStyle = styled.div`
  width: 100%;height: 100%;
    .inner{
     .about_list{
       margin-top: 50px;
       .about_item{
         &:not(:last-child){
           margin-bottom: 50px;
         }
         span{
           font-size: 1.5vw;
           &.about_icon{
           margin-right: 20px;
           }
           &.about_text{
             margin-right: 10px;
           }
         }
       }
     } 
    }
`;