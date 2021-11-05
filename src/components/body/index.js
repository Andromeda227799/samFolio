import React from 'react'

import "./body.css";

import About from './about'
import Projects from './projects'
import Skills from './skills'
import Social from './social'
import Work from './work'
export default function Body() {
    return (
        <div className="body">
            <section id="about">
                <About></About>
            </section>
            <section id="skills">
                <Skills></Skills>
            </section>
            <section id="projects">
                <Projects></Projects>
            </section>
            <section id="work">
                <Work></Work>
            </section>
            <section id="social">
                <Social></Social>
            </section>
        </div>
    )
}
