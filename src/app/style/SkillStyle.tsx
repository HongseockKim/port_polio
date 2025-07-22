import styled from "styled-components";

export const SkillStyle = styled.div`
  width: 100%;height: 100%;
  .skill_list{
    width: 100%;display: flex;justify-content: flex-start;align-items: flex-start;gap: 20px;margin-top: 50px;flex-wrap: wrap;
    .skill_list_items{
      font-size: 1.5vw;flex: 0 0 calc(100% / 3 - 20px);box-sizing: border-box;
      &:nth-child( n + 4){
        margin-top: 20px;
      }
      .skill_icon{
        margin-right: 20px;
      }
      .skill_sub_list{
        margin-top: 20px;
        .skill_sub_item{
          font-size: 1.2vw;margin-top: 10px;
        }
      }
    }
  }
`;