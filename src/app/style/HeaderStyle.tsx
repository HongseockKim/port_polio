'use client'
import styled from "styled-components";

export const HeaderStyle  = styled.header`
  position: fixed;top: 0;left: 0;width: 100%;height: 150px;box-sizing: border-box;display: flex;justify-content: flex-start;align-items: center;
  padding: 20px 50px;

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