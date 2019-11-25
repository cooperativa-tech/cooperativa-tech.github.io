import React, { useState, useEffect, useRef } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Sky from "../components/Sky"
import GalleryItem from "../components/GalleryItem"

import Ship from "../components/Ship"

import imgJorge from "../images/jorge.png"
import logo from "../images/logo.svg"

let moveTimer
let lightsTimer

const galleryItems = [
  {
    key: 1,
    label: "Jorge GPS",
    href: "/jorge_gps",
    color: "#E18AB3",
    img: imgJorge,
  },
  {
    key: 2,
    label: "Sound Machine",
    href: "/soundmachine/",
    color: "#48b9ce",
    img: imgJorge,
  },
]

const IndexPage = () => {
  const galleryRef = useRef(null)
  const [state, setState] = useState({
    shipReady: null,
    shipActive: false,
    shipLightsOn: false,
    shipLeftPosition: 0,
    currentEl: null,
    currentIndex: null,
  })

  useEffect(() => {
    if (!galleryRef.current) return
    setState(current => ({ ...current, shipReady: false }))

    setTimeout(() => {
      setState(current => ({ ...current, shipReady: true }))
    }, 500)
  }, [])

  useEffect(() => {
    if (!state.currentEl) return

    clearTimeout(moveTimer)
    clearTimeout(lightsTimer)

    const rect = state.currentEl.getBoundingClientRect()

    setState(current => ({
      ...current,
      shipActive: true,
      shipLightsOn: false,
      shipLeftPosition: rect.left,
    }))
  }, [state.currentEl])

  useEffect(() => {
    clearTimeout(lightsTimer)

    if (!state.shipActive) return

    lightsTimer = setTimeout(() => {
      setState(current => ({ ...current, shipLightsOn: true }))
    }, 2100)
  }, [state.shipLeftPosition, state.shipActive])

  useEffect(() => {
    if (state.currentEl) return

    moveTimer = setTimeout(() => {
      setState(current => ({
        ...current,
        shipActive: false,
        shipLightsOn: false,
        shipLeftPosition: 0,
      }))
    }, 5000)
  }, [state.currentEl])

  return (
    <Layout>
      <SEO title="Home" />
      <Sky />
      <Ship
        {...state}
        style={{
          top: galleryRef.current ? galleryRef.current.offsetTop - 50 : null,
          transition: state.shipReady ? "all 2s ease-in-out 0.1s" : "",
          transform:
            state.shipActive && state.shipReady
              ? `translateX(${state.shipLeftPosition + 220}px)`
              : "",
        }}
      />
      <div className="centered">
        <div className="hero">
          <img className="hero-img" src={logo} alt="Coopeartiva's logo" />
          <h1 className="hero-title">Cooperativa.tech</h1>
        </div>
        <p className="lead">
          We’re a group of tech professionals who gather to build cool, exciting
          stuff.
        </p>
        <p className="lead">
          <button className="link" onClick={() => alert("QUERES FAZ TU!")}>
            Perhaps you have an awesome idea to share?
          </button>
        </p>
        <ul ref={galleryRef} className="gallery">
          {galleryItems.map(item => (
            <GalleryItem
              onMouseEnter={e =>
                setState({
                  ...state,
                  currentIndex: item.key,
                  currentEl: e.target,
                })
              }
              onMouseLeave={() => setState({ ...state, currentEl: null })}
              {...item}
              imgVisible={state.shipLightsOn && state.currentIndex === item.key}
            ></GalleryItem>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export default IndexPage
