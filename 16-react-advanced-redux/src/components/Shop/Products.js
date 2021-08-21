import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_DATA=[
  {id:'p1',title:'My First Course Angular',description:'My First Course Angular',price:99.99},
  {id:'p2',title:'My Second Course React',description:'My Second Course React',price:69.99},
  {id:'p3',title:'My Third Course VueJs',description:'My Third Course VueJs',price:49.99},
]
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_DATA.map(item=>(
          <ProductItem
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          description={item.description}
        />
        ))}
        
      </ul>
    </section>
  );
};

export default Products;
