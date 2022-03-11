import styles from './index.module.less';
import {RouterConfig} from '@/routes'
import {useNavigate} from 'react-router'
import {useLogic} from './hooks'
const Home = () => {
  const chapters = useLogic(RouterConfig)
  const nav = useNavigate()
  const handlePush = (pathname:string) => {
    nav(pathname)
  }
  return <div className={styles.Home}>
   <div className={styles.routes}>
     <div className={styles.title}>React Hooks学习</div>
   {
      chapters.map(({title,pathname}) => {
        return (
          <div className={styles.item} onClick={() =>handlePush(pathname)} key={pathname}>
            {title}
          </div>
        )
      })
    }
   </div>
  </div>;
};

export default Home;
