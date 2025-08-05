'use client';
import styled from "styled-components";

export const ProjectDetailStyle = styled.div`
    width: 100%;height: 100%;position: fixed;top:0;left:50%;background: #fff;overflow: auto;transform: translateX(-50%);
  max-width: 1920px;margin: 0 auto;display: flex;flex-direction: column;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`;
export const ProjectDetailClientStyle = styled.div`
  padding: 20px;overflow:hidden;overflow-y: auto;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
  .project_detail_header{
    width: 100%;display: flex;justify-content: space-between;align-items: center;padding: 20px 0;position: sticky;top:0;z-index: 100;background: #fff;
    .project_detail_back_button{
      flex: 0 0 150px;padding: 10px 20px;border: none;border-radius: 5px;cursor: pointer;display: flex;align-items: center;justify-content: center;box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);background: transparent;
    }
    .project_name{
      flex: 0 0 calc(100% - 150px);font-size: 60px;font-weight: bold;color: #333;text-align: center;align-items: center;height: 100%;
    }
  }
  .project_content{
    max-width: 1200px;margin: 0 auto;
    .sub_title{
      font-size: 34px;margin-bottom: 20px;
    }
    .data{
      margin-top: 100px;
      p{
        font-size: 20px;
      }
      .project_detaion_image_swiper{
        width: 100%;text-align: center;
        .project_detaion_image_swiper_slide{
          border-radius: 20px;overflow: hidden;box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);background: #fff;
        }
      }
      &.summary{
        .summary_list{
          margin-top: 30px;padding-left: 20px;
          .summary_list_item{
            list-style: disc;font-size: 20px;
            &:not(:last-child){
              margin-bottom: 10px;
            }
          }
        }
      }
      &.description{
        p{
          line-height: 25px;text-wrap: pretty;
        }
      }
      &.technology{
        .technology_list{
          display: flex;flex-wrap: wrap;gap: 10px;margin-top: 20px;
          .technology_item{
            background: #f0f0f0;padding: 10px 15px;border-radius: 5px;font-size: 18px;
          }
        }
      }
    }
    .text_content_wrap{
      padding: 0 50px;
    }
  }
`;