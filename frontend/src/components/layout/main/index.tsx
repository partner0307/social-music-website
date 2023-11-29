import React from "react";
import { GV } from "@/utils/style.util";
import styled from "styled-components";

export const Main = styled.main<{ slideOpened?: boolean }>`
    position: relative;
    min-height: 100%;
    transition: all ease-in .5s;
    width: 100%;
    background: ${GV('gray')};
`
