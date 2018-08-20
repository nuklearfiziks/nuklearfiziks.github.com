import React from 'react';

// Import typefaces
import 'typeface-montserrat';
import 'typeface-merriweather';
import { Icon } from 'react-icons-kit';
import { twitter } from 'react-icons-kit/icomoon/twitter';
import { instagram } from 'react-icons-kit/icomoon/instagram';
import mastodon from './mastodon-icon';
import styles from './Bio.module.css';
import profilePic from './profile-pic.jpg';
import { rhythm } from '../utils/typography';

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
    title: 'Instagram: @nuklearfiziks (personal photos)',
    text: '@nuklearfiziks',
  },
  {
    url: 'https://instagram.com/nuklearphotos',
    icon: instagram,
    title: 'Instagram: @nuklearphotos (pro photo work)',
    text: '@nuklearphotos',
  },
];

const Bio = () => (
  <div
    className={styles.bio}
    styles={{
      marginBottom: rhythm(2.5),
    }}
  >
    <img
      className={styles.pic}
      src={profilePic}
      alt="Andi N. Fiziks"
      style={{
        marginRight: rhythm(1 / 2),
        marginBottom: 0,
        width: rhythm(6),
        height: rhythm(6),
      }}
    />
    <ul className={styles.list__container}>
      {items.map(item => (
        <li key={item.title} className={styles.list__item}>
          <a href={item.url} className={styles.list__link}>
            <Icon icon={item.icon} title={item.title} size={48} />
            <div className={styles.item__text}>{item.text}</div>
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default Bio;
