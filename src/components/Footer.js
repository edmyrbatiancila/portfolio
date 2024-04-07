import React from 'react';


class Footer extends React.Component {
    render() {
        return (
          <footer className="align-items-center py-4 my-4 border-top">
            <ul className="nav col-md-12 justify-content-center list-unstyled d-flex">
              <li className="ms-3">
                <a
                  className="text-body-secondary"
                  href="https://www.linkedin.com/in/edmyr-batiancila/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="icon">
                    <i className="fa-brands fa-linkedin"></i>
                  </span>
                </a>
              </li>
              <li className="ms-3">
                <a
                  className="text-body-secondary"
                  href="https://github.com/edmyrbatiancila"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-square-github"></i>
                </a>
              </li>
              <li className="ms-3">
                <a
                  className="text-body-secondary"
                  href="https://www.youtube.com/@edmyrbatiancila5469"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </li>
            </ul>
          </footer>
        );
    }
}

export default Footer;