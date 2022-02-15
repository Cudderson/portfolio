import styles from './HeaderBrand.module.css';

const HeaderBrand = ({ avatar }) => {
  return (
    <div className={styles['header-brand']}>
      <img src={avatar} alt="my_avatar" />
      <span>Cody Weller</span>
    </div>
  )
}

export default HeaderBrand;