'use client'
import styled from "styled-components";

export const HeaderStyle  = styled.header`
  position: fixed;top: 0;left: 50%;transform: translateX(-50%); width: 100%;height: 150px;box-sizing: border-box;display: flex;justify-content: flex-start;align-items: center;
  padding: 20px 50px;max-width: 1920px;margin: 0 auto;
  .header_title {
    color: #1a1a1a; font-size: clamp(24px, 8vw, 150px);margin-right: 100px;
  }

  .header__menu {
    display: flex;justify-content: flex-start;align-items: center;gap: 20px;

    .header_item {
      font-size: 1.5vw;cursor: pointer;color: #1a1a1a;
      &.selected {
        color: #508ff3;
      }
    }
  }
`;