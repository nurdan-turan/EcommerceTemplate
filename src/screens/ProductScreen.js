import React from 'react';
import data from "../data";
import Product from "../components/Product";
import { Link, useNavigate, useParams } from 'react-router-dom';
import Rating from '../components/Rating';

export default function ProductScreen(props) {
  const params = useParams();
  const { id : productId } = params;
  const product = data.products.find(product => product._id === productId);
    return (
    <div>
        <div className="row top">
          <div className='col-2'>
            <Link to="/">Back</Link>
            <img className="large" src={product.image} alt={product.name} />
          </div>
          <div className="col-1">
              <ul>
                <li>
                  <h1>{product.name}</h1>
                </li>
                <li>
                  <Rating
                    rating={product.rating}
                    numReviews={product.numReviews}
                  />
                </li>
                <li>Price : ${product.price}</li>
                <li>
                  Description:
                  <p>{product.description}</p>
                </li>
              </ul>
            </div>  
          <div className='col-1'>
            <div className="card card-body">
              <ul>
                <li>
                <div className="row">
                  <div>Price</div>
                  <div className="price">${product.price}</div>
                </div>
                </li>
                <li>
                  <div className="row">
                    <div>Status</div>
                      <div>
                        {product.countInStock > 0 ? (
                            <span className="success">In Stock</span>
                          ) : (
                            <span className="danger">Unavailable</span>
                          )}
                      </div>
                  </div>
                </li>
                <li>
                  <button className="primary block" >Add to Card</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </div>



    )
}
