"use strict";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreativeCommons,
  faCreativeCommonsBy
} from "@fortawesome/free-brands-svg-icons";
import { Container } from "react-bootstrap";

export default () => (
  <Container as="footer" fluid className="text-center mt-auto mb-3">
    <a
      rel="license"
      href="http://creativecommons.org/licenses/by/4.0/"
      title="Creative Commons Attribution 4.0 International License"
      className="text-reset text-decoration-none"
    >
      <FontAwesomeIcon icon={faCreativeCommons} />
      &#x0200A;
      <FontAwesomeIcon icon={faCreativeCommonsBy} />
    </a>{" "}
    {new Date().getFullYear()}{" "}
    <a
      {...{"xmlns:cc": "http://creativecommons.org/ns#"}}
      href="http://tymick.me"
      property="cc:attributionName"
      rel="cc:attributionURL"
      className="text-reset text-decoration-none"
    >
      Tyler&nbsp;Westin&nbsp;Mick
    </a>
  </Container>
);