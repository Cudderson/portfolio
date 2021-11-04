import styles from './HeaderNav.module.css';

import { useEffect } from 'react';

const HeaderNav = () => {

  return (
    <div className={styles['header-nav']}>
      <ul>
        <li>01 Home</li>
        <li>02 Writing</li>
        <li>03 Notes</li>
        <li>04 About</li>
      </ul>
    </div>
  )
}

export default HeaderNav;