import { ReactNode } from "react";

export interface ComponentProps {
  children: ReactNode
}

export interface MoviesProps {
  id: string;
  title: string;
  year: number;
  genre: string;
  
}

export interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}


interface PrimaryImage {
  url: string
}

interface TitleText {
  text: string
}

interface ReleaseYear {
  year: string
}

export interface MoviesProps {
  id: string
  primaryImage: PrimaryImage
  titleText: TitleText
  releaseYear: ReleaseYear
}