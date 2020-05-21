import React, { Component } from "react";
import "./HistoryPurchase.css";
import {
  Table,
  Container,
  Form,
  FormControl,
  Button,
  Row,
  Col,
  Modal,
} from "react-bootstrap";
import { Formik } from "formik";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Event1 from "../../image/color.jpeg";
import Event2 from "../../image/shawn.png";
import Event3 from "../../image/beer.jpeg";
class HistoryPurchase extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<Container className="mt-5 pt-5 mb-4">
					<Row>
						<Form inline className="mx-auto mt-5 mb-5">
							<FormControl
								type="text"
								placeholder="Search Purchase"
								className="mainInput "
							/>
							<Button
								variant="outline-success"
								className="buttonSearch mainSearch"
							>
								<i className="fas fa-search"></i>
							</Button>
						</Form>
					</Row>
					<Row>
						<Col>
							<h2 className="text-center">History Purchase</h2>
							<div className="underlineCarousel mb-5 mx-auto"></div>
						</Col>
					</Row>
					<Table responsive>
						<thead>
							<tr>
								<th>No</th>
								<th>Title</th>
								<th>Date</th>
								<th>Price</th>
								<th>Location</th>
								<th>Images</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>1</td>
								<td>Making the Most of Two-Colour Counters</td>
								<td>2020-05-25</td>
								<td>Rp.25000</td>
								<td>Zoom</td>
								<td>
									<img src={Event1} className="imageTable" alt="event" />
								</td>
								<td>
									<Button variant="primary" className="invoiceButton">
										Invoice
									</Button>
								</td>
							</tr>
							<tr>
								<td>2</td>
								<td>Shawn Mendes The Virtual Tour</td>
								<td>Sat, May 16, 2020 </td>
								<td>Free</td>
								<td>Online Live</td>
								<td>
									<img src={Event2} className="imageTable" alt="event" />
								</td>
								<td>
									<Button variant="primary" className="invoiceButton">
										Invoice
									</Button>
								</td>
							</tr>
							<tr>
								<td>3</td>
								<td>The Virtual Beer Festival</td>
								<td>2020-05-23</td>
								<td>45.000</td>
								<td>Online</td>
								<td>
									<img src={Event3} className="imageTable" alt="event" />
								</td>
								<td>
									<Button variant="primary" className="invoiceButton">
										Invoice
									</Button>
								</td>
							</tr>
						</tbody>
					</Table>
				</Container>
				<Footer />
			</div>
		);
	}
}

export default HistoryPurchase;
