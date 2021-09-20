import React from 'react'
import { Link } from 'react-router-dom'
import "./product.css"
import Chart from "../../components/chart/Chart"
import {ProductData} from "../../dummyData"
import { Publish } from '@material-ui/icons'

export default function Product() {
    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to="/newproduct">
                    <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={ProductData} dataKey="Sales" title="Sales Performance"/>
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="https://www.sbsmobile.com/dan/177773-thickbox_default/silicone-case-for-apple-airpods-pro.jpg" alt="" className="productInfoImg" />
                        <span className="productName">Apple Airpods</span>
                    </div>
                  
                    <div className="productInfoBottom">
                      <div className="productInfoItem">
                        <span className="productInfoKey">id:</span>
                        <span className="productInfoValue">123</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">Sales:</span>
                        <span className="productInfoValue">$123</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">Active:</span>
                        <span className="productInfoValue">Yes</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">In-Stock:</span>
                        <span className="productInfoValue">No</span>
                    </div>
                    </div>
                    
                </div>
            </div>
            <div className="productBottom">
                <form action="" className="productForm">
                    <div className="productFormLeft">
                        <label>Product Name</label>
                        <input type="text" placeholder="Apple Airpods" />
                        <label htmlFor="">In Stock</label>
                        <select name="instock" id="instock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <label htmlFor="">Active</label>
                        <select name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src="https://www.sbsmobile.com/dan/177773-thickbox_default/silicone-case-for-apple-airpods-pro.jpg" alt="" className="productUploadImg" />
                            <label for="file">
                                <Publish />
                            </label>
                            <input type="file" id="file" style={{display:"none"}} />
                        </div>
                        <button className="productButton">Update</button>
                    </div>   
                
                </form>
            </div>
        </div>
    )
}
