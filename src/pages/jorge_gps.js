import React from "react"
import { css, Global } from "@emotion/core"

import SEO from "../components/seo"

export default function JorgeGps() {
  return (
    <>
      <Global
        styles={css`
          html,
          body {
            font-family: "Squada One", cursive;
          }

          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          h1 {
            font-size: 60px;
            font-weight: normal;
            text-align: center;
          }

          .link {
            font-size: 30px;
          }
        `}
      />

      <link
        href="https://fonts.googleapis.com/css?family=Squada+One&display=swap"
        rel="stylesheet"
      />
      <SEO title="Jorge GPS" />
      <div
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          padding: 20px;
        `}
      >
        <h1>Jorge GPS</h1>
        <iframe
          class="video"
          src="https://player.vimeo.com/video/367240337"
          width="640"
          height="480"
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen
        ></iframe>

        <a
          class="link"
          href="https://www.waze.com/ul?acvp=87DB32EB-603F-458E-9DD3-C01918F5C229"
        >
          Get it on your phone
        </a>
      </div>
    </>
  )
}
