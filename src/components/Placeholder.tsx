import './Placeholder.css';

type PlaceholderProps = {
  /** Видимая подпись: объясняет, что появится на месте заглушки */
  label: string;
  /**
   * image — область под будущую фотографию с фиксированным соотношением сторон;
   * content — область под будущий контент раздела.
   */
  kind?: 'image' | 'content';
};

/**
 * Временная заглушка. Заменяется на <img> или содержимое раздела
 * на следующих этапах; подпись видна и читается скринридерами.
 */
function Placeholder({ label, kind = 'content' }: PlaceholderProps) {
  return (
    <div className={`placeholder placeholder--${kind}`}>
      <p className="placeholder__label">{label}</p>
    </div>
  );
}

export default Placeholder;
