import type { ReactNode } from 'react';

import './PageSection.css';

type PageSectionProps = {
  id: string;
  title: string;
  /** Короткая подпись под заголовком */
  lead?: string;
  /** muted — бежевый фон, чтобы чередовать соседние секции */
  tone?: 'default' | 'muted';
  children?: ReactNode;
};

function PageSection({ id, title, lead, tone = 'default', children }: PageSectionProps) {
  const titleId = `${id}-title`;

  return (
    <section id={id} className={`page-section page-section--${tone}`} aria-labelledby={titleId}>
      <div className="container">
        <header className="page-section__header">
          <h2 id={titleId}>{title}</h2>
          {lead && <p className="page-section__lead">{lead}</p>}
        </header>
        {children}
      </div>
    </section>
  );
}

export default PageSection;
