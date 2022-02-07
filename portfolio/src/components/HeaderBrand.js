import styles from './HeaderBrand.module.css';

import { useState, useEffect } from 'react';

const HeaderBrand = () => {

  console.log("called");

  const [avatar, setAvatar] = useState(null);

  // using a placeholder image until ready for final image
  let avatar_url = `https://avatars.githubusercontent.com/u/74884805?s=96&v=4`;

  // need to address this method of adding state
  const getAvatar = () => {
    setAvatar(avatar_url);
  }

  useEffect(() => {
    getAvatar();
  }, []);

  return (
    // might need to make inline
    <div className={styles['header-brand']}>
      <img src={avatar} alt="my_avatar" />
      <span>Cody Weller</span>
    </div>
  )
}

export default HeaderBrand;