import styled from "styled-components";

export const PublishingStyle = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  .publishing_list{
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: clamp(10px, 2vh, 20px);
    margin-top: clamp(20px, 4vh, 50px);
    width: 100%;
    flex: 1;

    .publishing_item{
      flex: 0 0 calc(100% / 3 - clamp(10px, 2vh, 20px));
      box-sizing: border-box;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
      border-radius: clamp(10px, 2vh, 20px);
      overflow: hidden;
      height: clamp(200px, 30vh, 350px);
      &:nth-child(n + 4){
        margin-top: clamp(10px, 2vh, 20px);
      }

      .image_con{
        width: 100%;
        height: 70%;

        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .publishing_title{
        display: block;
        font-size: clamp(0.8rem, 1.2vw, 1.2rem);
        padding: clamp(10px, 2vh, 20px);
        height: 30%;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
  }
  
  @media (max-height: 600px) {
    .publishing_list {
      .publishing_item {
        flex: 0 0 calc(50% - clamp(10px, 2vh, 20px));
        height: clamp(150px, 25vh, 250px);

        &:nth-child(n + 3){
          margin-top: clamp(10px, 2vh, 20px);
        }
        &:nth-child(n + 4){
          margin-top: 0;
        }
      }
    }
  }
  
  @media (max-height: 400px) {
    .publishing_list {
      flex-direction: row;
      overflow-x: auto;
      overflow-y: hidden;

      .publishing_item {
        flex: 0 0 calc(100% / 3 - clamp(5px, 1vh, 10px));
        height: clamp(120px, 20vh, 180px);
        margin-top: 0 !important;
      }
    }
  }
`;