import { useI18n } from '../i18n/useI18n';

import './ImageSlot.css';

type ImageSlotProps = {
  /** Адрес фотографии. Если его нет, выводится заглушка с подписью. */
  src?: string;
  /** Описание фото на текущем языке */
  alt?: string;
  /** Подпись на заглушке; по умолчанию «Фото появится позже» */
  label?: string;
  /** Класс для пропорций и скруглений в конкретном месте */
  className?: string;
  /** Для первого экрана — без ленивой загрузки */
  priority?: boolean;
};

/**
 * Место под фотографию. Пропорции задаёт родитель через className,
 * по умолчанию 4:3; фото заполняет область без искажений.
 */
function ImageSlot({ src, alt = '', label, className = '', priority = false }: ImageSlotProps) {
  const { t } = useI18n();

  return (
    <div className={`image-slot ${className}`.trim()}>
      {src ? (
        <img
          className="image-slot__img"
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
        />
      ) : (
        <span className="image-slot__badge" aria-hidden="true">
          {label ?? t.imageSlot.placeholder}
        </span>
      )}
    </div>
  );
}

export default ImageSlot;
