import { Container } from "../Layout/Container/Container";
import s from "./Footer.module.scss";
import cn from "classnames";
import logoFb from "../../assets/facebook.svg";
import logoInsta from "../../assets/instagram.svg";
import logoTwt from "../../assets/twitter.svg";

export const Footer = () => {
  return (
    <Container className={s.container}>
      <div className={s.category}>
        <p className={cn(s.title, s.categoryTitle)}>Katalog</p>
        <ul className={s.categoryList}>
          <ul className={cn(s.categorySublist)}>
            <p className={s.categorySubtitle}>Frauen</p>
            <li>BHs</li>
            <li>Unterhosen</li>
            <li>Socken</li>
            <li>Bademäntel</li>
            <li>Thermowäsche</li>
            <li>Pyjamas</li>
          </ul>

          <ul className={cn(s.categorySublist)}>
            <p className={s.categorySubtitle}>Männer</p>
            <li>Unterhosen</li>
            <li>Socken</li>
            <li>Bademäntel</li>
            <li>Thermowäsche</li>
          </ul>
        </ul>
      </div>

      <div className={s.social}>
        <p className={cn(s.title, s.socialTitle)}>Kontakt</p>
        <p className={s.socialSubtitle}>Kontakt und Filialadressen</p>
        <ul className={s.socialList}>
          <a className={s.socialLinkFB}>
            <img
              className={cn(s.socialLink, s.socialLinkFB)}
              src={logoFb}
              alt="Logo des Facebook"
            ></img>
          </a>
          <a className={s.socialLinkInsta}>
            <img
              className={cn(s.socialLink, s.socialLinkInsta)}
              src={logoInsta}
              alt="Logo des Facebook"
            ></img>
          </a>
          <a className={s.socialLinkTwt}>
            <img
              className={cn(s.socialLink, s.socialLinkTwt)}
              src={logoTwt}
              alt="Logo des Facebook"
            ></img>
          </a>
        </ul>
      </div>

      <div className={s.contacts}>
        <a href="mailto: Inspired@gmail.com">Inspired@gmail.com</a>
        <a href="tel:+49151222111333">+49 151 222 111 333</a>
      </div>

      <div className={s.copyright}>
        <p>© INSPIRED, 2023</p>
      </div>

      <div className={s.development}>
        <div className={s.developmentList}>
          <a>Designer: Anastasia Ilina</a>
          <a>Developer: Konstantin Savchenko</a>
        </div>
      </div>
    </Container>
  );
};
