import React from "react";
import {
  Button,
  ContactFormDiv,
  ContactFormH4,
  ContactFormMainDiv,
  ContactFormSpan,
  EnvelopeIconsStyle,
  Form,
  FormDiv,
  FormInput,
  FormInputLeft,
  FormInputTextArea,
  HeroIconsDiv,
  HeroIconsP,
  IconsSpacingDiv,
  MapIconsStyle,
  PhoneIconsStyle,
  WritingH3,
} from "../styles/ContactForm";
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from "../typings";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = { pageInfo: PageInfo };

const ContactForm = ({ pageInfo }: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:andrei.sv97@yahoo.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}, ${formData.message} (${formData.email})`;
  };

  return (
    <ContactFormMainDiv>
      <WritingH3>Contact</WritingH3>

      <ContactFormDiv>
        <ContactFormH4>
          I want a job!!
          <ContactFormSpan>Lets talk</ContactFormSpan>
        </ContactFormH4>

        <IconsSpacingDiv>
          <HeroIconsDiv>
            <PhoneIconsStyle />
            <HeroIconsP>{pageInfo?.phoneNumber}</HeroIconsP>
          </HeroIconsDiv>
          <HeroIconsDiv>
            <MapIconsStyle />
            <HeroIconsP>Random Street</HeroIconsP>
          </HeroIconsDiv>
          <HeroIconsDiv>
            <EnvelopeIconsStyle />
            <HeroIconsP>123456</HeroIconsP>
          </HeroIconsDiv>
        </IconsSpacingDiv>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormDiv>
            <FormInput {...register("name")} placeholder="Name" type="text" />{" "}
            <FormInputLeft
              {...register("email")}
              placeholder="Email"
              type="email"
            />
          </FormDiv>

          <FormInput
            {...register("subject")}
            placeholder="Subject"
            type="text"
          />

          <FormInputTextArea {...register("message")} placeholder="Message" />
          <Button type="submit"> Submit </Button>
        </Form>
      </ContactFormDiv>
    </ContactFormMainDiv>
  );
};

export default ContactForm;
