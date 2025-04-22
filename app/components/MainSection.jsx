"use client";
import React, { useContext } from "react";
import { AnimeDataContext } from "../data/Data";
import HomePage1 from "./HomePage1";

export default function MainSection(props) {
  const { theme } = useContext(AnimeDataContext);
  const currentBg = theme[props.season].background;
  return (
    <div className={`w-full h-fit bg-gradient-to-b ${currentBg}`}>
      <HomePage1 season={props.season} />
    </div>
  );
}
