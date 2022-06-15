import { styled } from "styletron-react";

export const ResultsContainer = styled("div", (props) => ({
  boxSizing: "content-box",
}));

export const ImageContainer = styled("div", (props) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "300px",
  marginTop: "2rem",
}));

export const ThumbImage = styled("img", (props) => ({
  width: "100%",
  height: "100%",
  objectFit: "contain",
}));

export const WordContainer = styled("div", (props) => ({
  display: "grid",
  height: "100%",
}));

export const IconContainer = styled("div", (props) => ({
  display: "flex",
  flexDirection: "column",
  marginTop: "1.5rem",
  marginLeft: "2rem",
}));

export const EngWord = styled("p", (props) => ({
  gridColumnStart: 2,
  fontSize: "5rem",
  margin: 0,
}));

export const KorWord = styled("p", (props) => ({
  fontSize: "1.8rem",
  margin: 0,
  textAlign: "center",
  gridColumnStart: 2,
}));

export const TtsBtn = styled("div", (props) => ({
  fontSize: "2rem",
  cursor: "pointer",
}));

export const EditBtn = styled("div", (props) => ({
  fontSize: "2rem",
  cursor: "pointer",
}));

export const BtnContainer = styled("div", (props) => ({
  display: "flex",
  justifyContent: "space-evenly",
}));
export const Button = styled("button", (props) => ({
  width: "40%",
  height: "2.5rem",
  marginTop: "1rem",
  border: 0,
  backgroundColor: "#fe8c55",
  color: "white",
  fontSize: "1rem",
  fontWeight: "bold",
  cursor: "pointer",
}));
