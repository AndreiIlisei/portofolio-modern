import styled from "styled-components";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

export const ContactFormMainDiv = styled.div`
  height: 100vh;
  display: flex;
  position: relative;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;

  @media (min-width: 600px) {
    max-width: 1200px;
    margin: 0 auto 0 auto;
    padding: 0 40px 0 40px;
  }
`;

export const PageTitle = styled.h3`
  text-transform: uppercase;
  color: rgb(107 114 128);
  font-size: 20px;
  letter-spacing: 20px;
  margin-bottom: 20px;

  @media (min-width: 600px) {
    font-size: 40px;
    position: absolute;
    text-transform: uppercase;
    color: rgb(107 114 128);
    top: 96px;
  }
`;

export const ContactFormDiv = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 600px) {
    margin-top: 40px;
  }

  @media (min-width: 1500px) {
    margin-top: 0px;
  }
`;
// export const ContactFormH4 = styled.h4`
//   font-size: 20px;
//   font-weight: 300;
//   text-align: center;

//   @media (min-width: 600px) {
//     font-size: 25px;
//   }
// `;

// export const ContactFormSpan = styled.span`
//   text-decoration: underline;
//   text-decoration-color: yellow;
// `;

export const HeroIconsP = styled.p`
  font-size: 14px;

  @media (min-width: 600px) {
    font-size: 21px;
  }
`;

export const IconsSpacingDiv = styled.div`
  margin-top: 15px;

  @media (min-width: 600px) {
    margin-top: 40px;
  }

  @media (min-width: 1500px) {
    margin-top: 0px;
  }
`;

export const HeroIconsWrap = styled.div`
  display: flex;
  justify-content: space-between;

  @media (min-width: 600px) {
    flex-direction: column;
    margin-top: 40px;
  }

  @media (min-width: 1500px) {
    margin-top: 0px;
  }
`;
export const HeroIconsDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
`;

export const PhoneIconsStyle = styled(PhoneIcon)`
  height: 15px;
  width: 15px;
  color: yellow;
  vertical-align: middle;
  display: inline-block;
  margin-right: 1px;

  @media (min-width: 600px) {
    height: 24px;
    width: 24px;
  }
`;

export const MapIconsStyle = styled(MapPinIcon)`
  height: 15px;
  width: 15px;
  vertical-align: middle;
  display: inline-block;
  color: yellow;

  @media (min-width: 600px) {
    height: 24px;
    width: 24px;
  }
`;

export const EnvelopeIconsStyle = styled(EnvelopeIcon)`
  height: 15px;
  width: 15px;
  color: yellow;
  vertical-align: middle;
  display: inline-block;

  @media (min-width: 600px) {
    height: 24px;
    width: 24px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px auto 0 auto;
  width: fit-content;
}
`;

export const FormDiv = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 600px) {
    flex-direction: row;
  }
  
`;

export const FormInput = styled.input`
  margin-bottom: 8px;
  background-color: rgb(148, 163, 184, 0.1);
  border-radius: 2px;
  padding: 16px 50px 16px 24px;
  border-bottom-width: 2px;
  border-bottom-color: #242424;
  border-right-width: 0px;
  border-left-width: 0px;
  border-top-width: 0px;

  color: grey;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: grey;
  }
  :-ms-input-placeholder {
    color: grey;
  }

  &:hover {
    border-bottom-color: #8b7649e1;
  }
  :focus {
    border-bottom-color: #f7ac0ae1;
    color: f7ac0ae1;
  }
`;

export const FormInputLeft = styled(FormInput)`
  @media (min-width: 1000px) {
    margin-left: 5px;
  }
`;

export const FormInputTextArea = styled.textarea`
  resize: none;
  margin-bottom: 8px;
  background-color: rgb(148, 163, 184, 0.1);
  border-radius: 2px;
  padding: 16px 24px 16px 24px;
  border-bottom-width: 2px;
  border-bottom-color: #242424;
  border-right-width: 0px;
  border-left-width: 0px;
  border-top-width: 0px;
  color: grey;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  font-family: arial;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: grey;
  }
  :-ms-input-placeholder {
    color: grey;
  }
  &:hover {
    border-bottom-color: #8b7649e1;
  }
  :focus {
    border-bottom-color: #f7ac0ae1;
    color: f7ac0ae1;
  }
`;

export const Button = styled.button`
  background: #f7ab0a;
  border: none;
  padding: 10px 20px 10px 20px;
  letter-spacing: 4px;
  text-color: black;
  font-weight: 600;
  font-size: 20px;
  

  @media (min-width: 600px) {
    padding: 20px 40px 20px 40px;
    border-radius: 10px;
  }
`;
