import React from "react";
import {
  Button,
  ContactFormDiv,
  // ContactFormH4,
  ContactFormMainDiv,
  // ContactFormSpan,
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
  PageTitle,
  HeroIconsWrap,
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
      <PageTitle>Contact</PageTitle>

      <ContactFormDiv>
        {/* <ContactFormH4>
          I want a job!!
          <ContactFormSpan>Lets talk</ContactFormSpan>
        </ContactFormH4> */}

        <IconsSpacingDiv>
          <HeroIconsWrap>
            <HeroIconsDiv>
              <HeroIconsP>
                <PhoneIconsStyle />
                {pageInfo?.phoneNumber}
              </HeroIconsP>
            </HeroIconsDiv>
            <HeroIconsDiv>
              <MapIconsStyle />
              <HeroIconsP> Random Street</HeroIconsP>
            </HeroIconsDiv>
          </HeroIconsWrap>
          <HeroIconsDiv>
            <HeroIconsP>
              <EnvelopeIconsStyle /> andrei.sv97@yahoo.com
            </HeroIconsP>
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
