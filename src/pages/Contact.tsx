import { Helmet } from 'react-helmet-async'
import GridSection from '../components/GridSection'

export default function Contact() {
  return (
    <>
      <Helmet><title>CONTACT — Rad</title></Helmet>
      <GridSection id="contact" title="CONTACT" titleSrc="/contact-0.png">
      <a
        href="mailto:radski07@gmail.com"
        className="hover:outline hover:outline-2 hover:outline-black px-1 transition-all duration-150"
      >
        GMAIL ME : radski07@gmail.com
      </a>
      <br />
      <a
        href="https://instagram.com/rad06__"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:outline hover:outline-2 hover:outline-black px-1 transition-all duration-150"
      >
        THE GRAM : @rad06__
      </a>
      <br />
      CONTACT ME AND TALK ABOUT IT ...
    </GridSection>
    </>
  )
}