import React from 'react'

const SocialLinks = ({ href, icon, itemClass }) => {
    return (
        <li >
            <a href={href} rel="noopener noreferrer" target="_blank" className={itemClass}
            ><i className={icon}></i
            ></a>
        </li >
    )
}

export default SocialLinks