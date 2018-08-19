import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'
import { Icon } from 'react-icons-kit'
import { twitter } from 'react-icons-kit/icomoon/twitter'
import { instagram } from 'react-icons-kit/icomoon/instagram'
import { mastodon } from './mastodon-icon'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

const items = [
  {
    url: 'https://twitter.com/nuklearfiziks',
    icon: twitter,
    title: 'Twitter: @nuklearfiziks',
    text: '@nuklearfiziks',
  },
  {
    url: 'https://mastodon.social/@nuklearfiziks',
    icon: mastodon,
    title: 'Mastodon: @nuklearfiziks',
    text: '@nuklearfiziks\n@mastodon.social',
  },
  {
    url: 'https://instagram.com/nuklearfiziks',
    icon: instagram,
    title: 'Instagram: @nuklearfiziks',
    text: '@nuklearfiziks',
  },
  {
    url: 'https://instagram.com/nuklearphotos',
    icon: instagram,
    title: 'Instagram: @nuklearphotos',
    text: '@nuklearphotos',
  },
]

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Andi N. Fiziks`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(4),
            height: rhythm(4),
            borderRadius: '50%',
          }}
        />
        <ul
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            marginBottom: 0,
          }}
        >
          {items.map(item => (
            <li
              key={item.title}
              style={{
                listStyleType: 'none',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
              }}
            >
              <a
                href={item.url}
                style={{ textDecoration: 'none', boxShadow: 'none' }}
              >
                <Icon icon={item.icon} title={item.title} size={48} />
                <div
                  style={{ fontSize: rhythm(1 / 3), lineHeight: rhythm(1 / 2) }}
                >
                  {item.text}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Bio
