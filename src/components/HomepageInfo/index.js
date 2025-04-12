import styles from './styles.module.css';
import wikidotImg from '@site/static/img/wikidot.png';

export default function HomepageInfo() {
  return (
    <section className={styles.introinfo}>
      <div className="container">
        <div className="text--center padding-horiz--md">
          <h1>Wikidot简介</h1>
          <p>Wikidot是免费和付费的维基托管服务商，允许任何人创建自己的维基网站，以供分享内容、与他人协作和创建公开社群。在该平台上托管了SCP基金会、The Backrooms等知名的亚文化内容创作社群，这些社群是Wikidot中文用户的主要来源之一。Wikidot的用户们在这样的平台上建立了丰富多彩的内容，并发掘了各种特性和代码。</p>
          <img src={wikidotImg} width="75%" style={{padding: "1em 0"}} alt="Wikidot" />
          <br />
          &#123;&nbsp;<i><a href="https://www.wikidot.com/features" class="link-instanted">点击此处了解更多有关Wikidot的信息</a></i>&nbsp;&#125;
        </div>
      </div>
    </section>
  );
}