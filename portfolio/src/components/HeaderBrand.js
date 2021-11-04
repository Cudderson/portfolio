import styles from './HeaderBrand.module.css';

import { useState, useEffect } from 'react';

const HeaderBrand = () => {

  console.log("called");

  const [avatar, setAvatar] = useState(null);

  // using a placeholder image until ready for final image
  let url = `https://picsum.photos/50`;

  const getAvatar = async () => {
    const res = await fetch(url);
    const image = res.url;
    setAvatar(image);
  }

  useEffect(() => {
    getAvatar();
  }, []);

  return (
    // might need to make inline
    <div className={styles['header-brand']}>
      <img src={avatar} />
      <span>Cody Weller</span>
    </div>
  )
}

export default HeaderBrand;