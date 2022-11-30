import React from 'react';
import Door from "../../img/door.png"
import Window from "../../img/window.png"
import Light from "../../img/light.png"
import Entry from "../../img/entry.png"


const icons = {
    "Doors": Door,
    "Windows": Window,
    "Light": Light,
    "Entries": Entry
}

export default function Icons(props){
    const IconSelected = icons[props.icon];
    return <img src={IconSelected} alt=""/>
}