import React from "react";
import { motion } from "framer-motion";
import {
  EmailIconsStyle,
  EmailText,
  IconsStyle,
  SocialMediaIcons,
  StickyHeader,
} from "../styles/Header";
import Link from "next/link";
import { Social } from "../typings";
import { SocialIcon } from "react-social-icons";

type Props = {
  socials: Social[];
};

const Header = ({ socials }: Props) => {
  return (
    <StickyHeader>
      <IconsStyle
        as={motion.div}
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.5 }}
      >
        {/* Social Icons */}
        {socials.map((social) => (
          <SocialMediaIcons
            key={social._id}
            url={social.url}
            fgColor="gray"
            bgColor="transparent"
            style={{ height: 40, width: 40 }}
          />
        ))}
      </IconsStyle>

      {/* Get in touch icon */}
      <Link href={"#contact"}>
        <IconsStyle
          as={motion.div}
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 1.5 }}
        >
          <EmailIconsStyle>
            <SocialIcon
              network="email"
              fgColor="gray"
              bgColor="transparent"
              style={{ height: 40, width: 40 }}
            />
            <EmailText> Get In Touch</EmailText>
          </EmailIconsStyle>
        </IconsStyle>
      </Link>
    </StickyHeader>
  );
};

export default Header;
