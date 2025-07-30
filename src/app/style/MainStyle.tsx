'use client'
import styled from "styled-components";

export const MainStyle = styled.div`
    background: #fff;padding: 250px 20px 20px 20px;width: 100vw;height: calc(100vh - 150px); min-height: 100vh;
  .inner{
    text-align: left;padding: 20px;width: 100%;height: 100%;background: #fff;max-width: 1920px;margin: 0 auto;overflow: auto;
    .sect_title{
      font-size: clamp(24px,3vw,100px);color: #1a1a1a;
    }
  }
`;