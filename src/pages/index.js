import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Watch from "../components/watch"
import Listen from "../components/listen"
import Read from "../components/read"
import Testimonials from "../components/testimonials"
import Footer from "../components/footer"
import texture from "../images/white-linen-paper-texture.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <div style={{ background: `url(${texture})`, backgroundSize: "cover" }}>
      <Watch />
      <Listen />
      <Read />
    </div>
    <Testimonials />
    <Footer />
  </Layout>
)

export default IndexPage
