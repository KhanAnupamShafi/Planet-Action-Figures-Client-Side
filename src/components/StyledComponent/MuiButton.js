import { Button } from "@mui/material";
import { styled } from "@mui/system";

const MuiButton = styled(Button)`
  color: #d7dfef;
  text-align: center;
  width: 100%;
  position: relative;
  z-index: 1;
  min-width: 150px;
  height: 48px;
  line-height: 48px;
  font-weight: 600;
  border: none;
  letter-spacing: 1px;
  display: inline-block;
  padding: 0 15px;
  text-align: center;
  text-transform: uppercase;
  background-size: 200% auto;
  color: #d7dfef;
  box-shadow: 0 3px 20px rgb(0 0 0 / 10%);
  border-radius: 10px;
  background-image: linear-gradient(130deg, #eb3fa9, #395ff6 50%, #eb3fa9);
  transition: all 0.5s;
  &:hover {
    background-position: right center;
    color: #d7dfef;
    text-decoration: none;
  }
`;

export default MuiButton;
