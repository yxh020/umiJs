import styles from './index.less';
import { DatePicker } from 'antd';
export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <DatePicker />
      {/* <img style={{width:'100rpx'}} src="https://udsshop.oss-cn-hangzhou.aliyuncs.com/show/jacket/male/lyq110.png" /> */}
    </div>
  );
}
