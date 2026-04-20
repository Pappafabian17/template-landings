import { content } from '../../config/content'
import './Products.css'

export function Products() {
  const { products } = content

  return (
    <section className="products section section--alt" id="products">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">{products.title}</h2>
          <p className="section__subtitle">{products.subtitle}</p>
        </div>

        <div className="products__grid">
          {products.items.map((product, i) => (
            <article className="product-card" key={i}>
              <div className="product-card__image-wrap">
                {product.badge && (
                  <span className={`product-card__badge product-card__badge--${product.badgeType}`}>
                    {product.badge}
                  </span>
                )}
                {product.image
                  ? <img src={product.image} alt={product.imageAlt} className="product-card__image" />
                  : <div className="product-card__image-placeholder">🖼️</div>
                }
              </div>

              <div className="product-card__body">
                <h3 className="product-card__name">{product.name}</h3>
                <p className="product-card__desc">{product.description}</p>
                <div className="product-card__footer">
                  <div className="product-card__pricing">
                    <span className="product-card__price">{product.price}</span>
                    {product.originalPrice && (
                      <span className="product-card__original-price">{product.originalPrice}</span>
                    )}
                  </div>
                  <a
                    href={products.ctaHref}
                    className="btn btn--primary product-card__btn"
                  >
                    {products.ctaLabel}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
