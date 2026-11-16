import type { ImageSource } from '../data/showcase';

import './ImageSlot.css';

type ImageSlotProps = {
  /** Фотография. Если её нет, выводится иллюстрация-заглушка. */
  image?: ImageSource;
  /** Подпись на заглушке */
  label?: string;
  /** Класс для пропорций и скруглений в конкретном месте */
  className?: string;
  /** Для первого экрана — без ленивой загрузки */
  priority?: boolean;
};

/**
 * Место под фотографию. Пропорции задаёт родитель через className,
 * по умолчанию 4:3; фото и заглушка заполняют область одинаково.
 */
function ImageSlot({
  image,
  label = 'Фото появится позже',
  className = '',
  priority = false,
}: ImageSlotProps) {
  return (
    <div className={`image-slot ${className}`.trim()}>
      {image ? (
        <img
          className="image-slot__img"
          src={image.src}
          alt={image.alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
        />
      ) : (
        <>
          {/* Метка заглушки — визуальная; иллюстрация декоративная */}
          <span className="image-slot__badge" aria-hidden="true">
            {label}
          </span>
        </>
      )}
    </div>
  );
}

export default ImageSlot;
