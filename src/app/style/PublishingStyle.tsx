import styled from "styled-components";

export const PublishingStyle = styled.div`
  width: 100%;height: 100%;
  .publishing_list{
    display: flex;justify-content: flex-start;align-items: flex-start;flex-wrap: wrap;gap: 20px;margin-top: 50px;
    .publishing_item{
      flex: 0 0 calc(100% / 3 - 20px);box-sizing: border-box;box-shadow: 0 0 10px rgba(0,0,0,0.1);border-radius: 20px;overflow: hidden;
      &:nth-child(n + 4){ margin-top: 20px;}
      .image_con{
        width: 100%;
        img{
          width: 100%;object-fit: scale-down;
        }
      }
      .publishing_title{
        display: block; font-size: 1.2vw;padding: 20px;
      }
    }
  }
`;