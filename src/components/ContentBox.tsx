import React from "react";

import "../styles/ContentBox.css";

interface ContentBoxProps {
  title: string;
  text: string;
  buttonText: string;
}

export const ContentBox = ({ title, text, buttonText }: ContentBoxProps) => {
  return (
    <section className="box box-a bg-secondary text-center py-md">
      <div className="box-inner">
        <ContentText title={title} text={text} buttonText={buttonText} />
      </div>
    </section>
  );
};

interface ImageContextBoxProps extends ContentBoxProps {
  src: string;
  reverse?: boolean;
}

export const ImageContentBox = ({
  title,
  text,
  src,
  buttonText,
  reverse = false
}: ImageContextBoxProps) => {
  return (
    <section
      className={`box bg-primary grid-col-2 ${reverse ? "grid-reverse" : ""}`}>
      <img src={src} alt="" />
      <ContentText title={title} text={text} buttonText={buttonText} />
    </section>
  );
};

interface ContentTextProps {
  title: string;
  text: string;
  buttonText: string;
}

export const ContentText = ({ title, text, buttonText }: ContentTextProps) => {
  return (
    <div className="box-text text-center">
      <h2 className="text-xl">{title}</h2>
      <p className="text-md">{text}</p>
      <button className="btn btn-light-outline">{buttonText}</button>
    </div>
  );
};
