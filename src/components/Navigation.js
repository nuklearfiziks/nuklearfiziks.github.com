/**
 * @file
 * Nav bar
 */

import React from 'react'

const sections = [
  {
    text: 'Photos',
  },
  {
    text: 'Blog',
  },
]

const Navivgation = () => (
  <nav>
    <ul>
      {sections.map(link => {
        return (
          <li>
            <a href="">{link.text}</a>
          </li>
        )
      })}
    </ul>
  </nav>
)
