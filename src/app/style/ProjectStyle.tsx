import styled from "styled-components";

export const ProjectStyle = styled.div`
    width: 100%;height: 100%;
  .project_list{
    display: flex;justify-content: flex-start;align-items: flex-start;gap: 10px;flex-wrap: wrap;margin-top: 50px;overflow: auto;
    .project_item{
      flex: 0 0 calc(100% / 5 - 10px);box-sizing: border-box;box-shadow: 0 0 10px rgba(0,0,0,0.1);border-radius: 20px;overflow: hidden;
      .image_con{
        width: 100%;
        img{
            width: 100%;object-fit: scale-down;aspect-ratio: 16 / 9;
        }
      }
      .project_title{
        display: block; font-size: 1.2vw;padding: 20px;
      }
    }
  }
`;