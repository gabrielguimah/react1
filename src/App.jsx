import React from 'react'

import './App.css'

import First from './components/exercises/first'
import Second from './components/exercises/second'
import Third from './components/exercises/third'
import Fourth from './components/exercises/fourth'
import Fifth from './components/exercises/fifth'
import Sixth from './components/exercises/sixth'
import Card from './components/layout/card'

export default (props) => (
    <div className = "App">
        <Card footerTitle="Exercise #1">
            <First />
        </Card>

        <Card footerTitle="Exercise #2">
            <Second title="Subtitle" />
        </Card>

        <Card footerTitle="Exercise #3">
            <Third>
                <ul>
                    <li>Ana Lua</li>
                    <li>Helena</li>
                    <li>Lara</li>
                    <li>Maria Clara</li>
                    <li>Mariana</li>
                    <li>Marina</li>
                </ul>
            </Third>
        </Card>

        <Card footerTitle="Exercise #4">
            <Fourth />
        </Card>

        <Card footerTitle="Exercise #5">
            <Fifth number = {2}/>
        </Card>

        <Card footerTitle="Exercise #6">
            <Sixth number = {2}/>
        </Card>
    </div>
)