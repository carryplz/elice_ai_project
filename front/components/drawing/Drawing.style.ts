import { styled } from "styletron-react";

export const DrawingContainer = styled("div", {
  width: "100%",
  height: "90%",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  textAlign: "center",
  boxSizing: "border-box",
});

export const Question = styled("h1", {
  fontSize: "3rem",
  margin: "1rem 0",
});

export const Canvas = styled("canvas", {
  backgroundColor: "#fff",
  width: "90%",
  height: "75%",
});

export const BtnContainer = styled("div", {
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const SubmitBtn = styled("button", {
  border: 0,
  backgroundColor: "#fe8c55",
  fontSize: "1.5rem",
  color: "#fff",
  width: "30%",
  padding: "1rem 0",
  cursor: "pointer",
});