import React from "react"
import Link from "gatsby-link"

import "./GalleryItem.css"

export default function GalleryItem(props) {
  return (
    <li className="gallery-item">
      <div
        className="gallery-item-border"
        style={{ backgroundColor: props.color, borderColor: props.color }}
      ></div>
      <Link
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
        className="gallery-item-content"
        to={props.href}
        style={{
          backgroundColor: props.color,
          backgroundImage: props.imgVisible ? `url(${props.img})` : "",
        }}
      >
        <div className="gallery-item-label">{props.label}</div>
      </Link>
    </li>
  )
}
