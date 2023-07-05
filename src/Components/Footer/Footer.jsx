import cn from "classnames";
import { Container } from "../Layout/Container/Container";
import s from "./Footer.module.scss";
import { NavLink } from "react-router-dom";

export const Footer = ({ list }) => {
  return (
    <footer>
      <Container>
        <div className={s.container}>
          {/* ==================================CATEGORY============================= */}
          <div className={s.category}>
            <h2 className={cn(s.title, s.categoryTitle)}>Katalog</h2>

            <ul className={s.categoryList}>
              {list.map((item) => (
                <li key={item.link} className={s.categoryItem}>
                  <h3 className={s.categorySubtitle}>
                    <NavLink to={item.link} className={s.link}>
                      {item.title}
                    </NavLink>
                  </h3>

                  <ul className={s.categorySublist}>
                    {item.categories.map((category) => (
                      <li key={category.link}>
                        <NavLink
                          to={`${item.link}/${category.link}`}
                          className={s.link}
                        >
                          {category.title}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>

          {/* ==================================SOCIAL============================= */}
          <div className={s.social}>
            <h2 className={cn(s.title, s.socialTitle)}>Kontakt</h2>

            <p className={s.socialSubtitle}>Kontakt und Filialadressen</p>

            <ul className={s.socialList}>
              <li>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className={cn(s.socialLink, s.socialLinkFB)}
                    src="../../../src/assets/facebook.svg"
                  ></img>
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className={cn(s.socialLink, s.socialLinkInsta)}
                    src="../../../src/assets/instagram.svg"
                  ></img>
                </a>
              </li>

              <li>
                <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                  <img
                    className={cn(s.socialLink, s.socialLinkTwt)}
                    src="../../../src/assets/twitter.svg"
                  ></img>
                </a>
              </li>
            </ul>
          </div>

          {/* ==================================CONTACTS============================= */}
          <div className={s.contacts}>
            <a className={s.link} href="mailto: inspired@gmail.com">
              Inspired@gmail.com
            </a>
            <a className={cn(s.link, s.socialPhone)} href="tel:+49151222111333">
              +49 151 222 111 333
            </a>
          </div>

          {/* ==================================COPYRIGHT============================= */}
          <div className={s.copyright}>
            <p>&copy; INSPIRED, 2023</p>
          </div>

          {/* ==================================DEVELOPMENT============================= */}
          <div className={s.development}>
            <ul className={s.developmentList}>
              <li>
                Designer:
                <a
                  className={s.link}
                  href="https://t.me/Mrshmallowww"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  Anastasia Ilina
                </a>
              </li>
              <li>
                Developer:
                <a
                  className={s.link}
                  href="https://t.me/konstantine_sa"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  Konstantin Savchenko
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
};
