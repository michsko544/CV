import React from 'react'
import SidebarTitle from './SidebarTitle.jsx'

const SidebarSection = (props) => {
    return (
        <div className="personal-info">
            <SidebarTitle title={props.title}/>
            {props.children}
        </div>
    )
}

export default SidebarSection
