import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '开放文档库',
    Svg: require('@site/static/img/undraw_docs_book.svg').default,
    description: (
      <>
        我们的文档公开且便捷，可以让更多人减少学习使用Wikidot的成本，并使其专注到阅读和创作当中。
      </>
    ),
  },
  {
    title: '聚合式内容',
    Svg: require('@site/static/img/undraw_docs_diagram.svg').default,
    description: (
      <>
        我们的文档将官方文档和各站指导全部聚合起来，对其内容加以润色和删改，使得文档更通俗易懂。
      </>
    ),
  },
  {
    title: '人人可参与',
    Svg: require('@site/static/img/undraw_docs_collab.svg').default,
    description: (
      <>
        我们的文档都是由贡献者们创建和编辑的，组成了内容丰富的文档库，我们随时随地欢迎您参与其中。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
