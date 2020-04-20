import React, { Component } from 'react';
import { TwoDimensionalVideo } from 'apps/index'
import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Logo from './images/ut-logo-resized.png';
import { Link, Switch, Route, BrowserRouter } from 'react-router-dom';
import Instructions from "./videoInstruction"
import { CSVLink, CSVDownload } from "react-csv";
import { array } from 'prop-types';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import { MdBubbleChart } from 'react-icons/md';

class testDemo extends Component {
	styles = {
		color: '#ffffff',
		backgroundColor: `#007bff`,
		border: `1px solid #007bff`,

	}
	linkStyle = {
		color: '#007bff'
	}
	lowerButtonCol1Style = {
		alignItems: `right`
	}
	lowerButton1Style = {
		color: '#ffffff',
		
		border: `1px solid primary`,
		alignSelf: `right`,
		alignItems: `flex-end`,
		textAlign: `right`,
		flex: `right`, marginLeft: `auto`, marginRight: 0
	}
	lowerButton2Style = {
		color: '#ffffff',
		backgroundColor: `primary`,
		border: `1px solid primary`,
		alignSelf: `left`,
		textAlign: `left`
	}
	constructor(props) {
		super(props)
		const temp = {};
		const defaultAnnotations = [{
			id: 'jt192wyd',
			name: 'jt192wyd',
			label: '1-2',
			color: 'rgba(255,0,0,1)',
			incidents: [{
				id: 'jt192wyb', name: 'jt192wyb', x: 295.00402335586875, y: 193.3689649661968, width: 40.75402335586878, height: 41.63103503380317, time: 0.0308226495726496, status: 'Show',
			}, {
				id: 'jt1930nb', name: 'jt1930nb', x: 304.00402335586875, y: 202.3689649661968, width: 58.75402335586875, height: 60.63103503380319, time: 0.03178472222222222, status: 'Show',
			}, {
				id: 'jt193fim', name: 'jt193fim', x: 309.00402335586875, y: 213.3689649661968, width: 58.75402335586875, height: 60.63103503380319, time: 0.06388611111111112, status: 'Show',
			}, {
				id: 'jt193ijo', name: 'jt193ijo', x: 320.00402335586875, y: 220.3689649661968, width: 58.75402335586875, height: 74.63103503380319, time: 0.08677242063492063, status: 'Show',
			}, {
				id: 'jt19484m', name: 'jt19484m', x: 320.48992156587633, y: 218.42537212616642, width: 60.697616195899116, height: 78.17334040378043, time: 0.0966718253968254, status: 'Show',
			}, {
				id: 'jt193o4y', name: 'jt193o4y', x: 321.00402335586875, y: 216.3689649661968, width: 62.75402335586875, height: 71.63103503380319, time: 0.10714583333333334, status: 'Show',
			}, {
				id: 'jt194dom', name: 'jt194dom', x: 321.00402335586875, y: 218.8083044640243, width: 62.75402335586875, height: 69.1916955359757, time: 0.1195857142857143, status: 'Show',
			}, {
				id: 'jt193taw', name: 'jt193taw', x: 321.00402335586875, y: 228.3689649661968, width: 62.75402335586875, height: 59.63103503380319, time: 0.13459007936507936, status: 'Show',
			}, {
				id: 'jt193zb4', name: 'jt193zb4', x: 318.00402335586875, y: 228.3689649661968, width: 81.75402335586875, height: 59.63103503380319, time: 0.1693952380952381, status: 'Show',
			}, {
				id: 'jt195ltz', name: 'jt195ltz', x: 328.2874098641244, y: 230.6523514744525, width: 70.85164231813906, height: 56.631035033803215, time: 0.1985523622047244, status: 'Show',
			}, {
				id: 'jt194trg', name: 'jt194trg', x: 322.00402335586875, y: 232.3689649661968, width: 76.66967862975952, height: 59.63103503380319, time: 0.22047222222222224, status: 'Show',
			}, {
				id: 'jt194lgm', name: 'jt194lgm', x: 318.00402335586875, y: 228.3689649661968, width: 75.75402335586875, height: 59.63103503380319, time: 0.22967083333333332, status: 'Show',
			}, {
				id: 'jt195p7m', name: 'jt195p7m', x: 318.00402335586875, y: 228.3689649661968, width: 68.75402335586875, height: 58.19684946385905, time: 0.25359350393700786, status: 'Show',
			}, {
				id: 'jt1951r9', name: 'jt1951r9', x: 318.00402335586875, y: 228.3689649661968, width: 75.75402335586875, height: 54.63103503380319, time: 0.31307242063492063, status: 'Show',
			}, {
				id: 'jt195v9l', name: 'jt195v9l', x: 318.00402335586875, y: 228.3689649661968, width: 75.75402335586875, height: 54.63103503380319, time: 0.34623937007874017, status: 'Hide',
			}],
			childrenNames: [],
			parentName: 'jt1922xu',
		}, {
			id: 'jt192wyc',
			name: 'jt192wyc',
			label: '1-1',
			color: 'rgba(255,0,0,1)',
			incidents: [{
				id: 'jt192wyb', name: 'jt192wyb', x: 274.25, y: 171.73792993239366, width: 40.75402335586878, height: 41.63103503380317, time: 0.0308226495726496, status: 'Show',
			}, {
				id: 'jt19349x', name: 'jt19349x', x: 271.25, y: 167.73792993239366, width: 60.75402335586875, height: 58.63103503380316, time: 0.03178472222222222, status: 'Show',
			}, {
				id: 'jt193ekd', name: 'jt193ekd', x: 274.25, y: 160.73792993239366, width: 60.75402335586875, height: 58.63103503380316, time: 0.06388611111111112, status: 'Show',
			}, {
				id: 'jt193hp1', name: 'jt193hp1', x: 280.25, y: 160.73792993239366, width: 60.75402335586875, height: 58.63103503380316, time: 0.08677242063492063, status: 'Show',
			}, {
				id: 'jt194cbv', name: 'jt194cbv', x: 280.1326975821677, y: 158.62062751456136, width: 60.75402335586875, height: 58.63103503380316, time: 0.1195857142857143, status: 'Show',
			}, {
				id: 'jt193umg', name: 'jt193umg', x: 274.25, y: 154.73792993239366, width: 60.75402335586875, height: 58.63103503380316, time: 0.13459007936507936, status: 'Show',
			}, {
				id: 'jt193y7q', name: 'jt193y7q', x: 268.25, y: 155.73792993239366, width: 60.75402335586875, height: 58.63103503380316, time: 0.1693952380952381, status: 'Show',
			}, {
				id: 'jt194hxg', name: 'jt194hxg', x: 260.25, y: 157.73792993239366, width: 60.75402335586875, height: 58.63103503380316, time: 0.20233392857142857, status: 'Show',
			}, {
				id: 'jt194mj1', name: 'jt194mj1', x: 253.25, y: 156.73792993239366, width: 60.75402335586875, height: 58.63103503380316, time: 0.22967083333333332, status: 'Show',
			}, {
				id: 'jt195qgw', name: 'jt195qgw', x: 246.25, y: 156.73792993239366, width: 63.66047805713703, height: 58.63103503380316, time: 0.25359350393700786, status: 'Show',
			}, {
				id: 'jt194xqh', name: 'jt194xqh', x: 253.25, y: 156.73792993239366, width: 52.75402335586875, height: 58.63103503380316, time: 0.27642281746031744, status: 'Show',
			}, {
				id: 'jt1955u1', name: 'jt1955u1', x: 265.25, y: 159.73792993239366, width: 40.75402335586875, height: 49.63103503380316, time: 0.3564833333333333, status: 'Show',
			}, {
				id: 'jt195b3i', name: 'jt195b3i', x: 265.25, y: 141.73792993239366, width: 40.75402335586875, height: 49.63103503380316, time: 0.45984980158730154, status: 'Show',
			}, {
				id: 'jt1961v6', name: 'jt1961v6', x: 269.25, y: 144.73792993239366, width: 40.75402335586875, height: 49.63103503380316, time: 0.47851751968503936, status: 'Show',
			}, {
				id: 'jt1965az', name: 'jt1965az', x: 262.25, y: 144.73792993239366, width: 47.75402335586875, height: 49.63103503380316, time: 0.5342496062992126, status: 'Show',
			}, {
				id: 'jt1968nk', name: 'jt1968nk', x: 262.25, y: 149.73792993239366, width: 47.75402335586875, height: 49.63103503380316, time: 0.5904106299212598, status: 'Show',
			}, {
				id: 'jt196ax3', name: 'jt196ax3', x: 270.25, y: 158.73792993239366, width: 47.75402335586875, height: 49.63103503380316, time: 0.6662596456692913, status: 'Show',
			}, {
				id: 'jt196dys', name: 'jt196dys', x: 268.25, y: 164.73792993239366, width: 47.75402335586875, height: 49.63103503380316, time: 0.7368370078740157, status: 'Show',
			}, {
				id: 'jt196guu', name: 'jt196guu', x: 272.25, y: 154.73792993239366, width: 47.75402335586875, height: 49.63103503380316, time: 0.801053937007874, status: 'Show',
			}, {
				id: 'jt196k7h', name: 'jt196k7h', x: 273.25, y: 157.73792993239366, width: 47.75402335586875, height: 49.63103503380316, time: 0.8626350393700787, status: 'Show',
			}],
			childrenNames: [],
			parentName: 'jt1922xu',
		}, {
			id: 'jt1922xu',
			name: 'jt1922xu',
			label: '1',
			color: 'rgba(255,219,0,1)',
			incidents: [{
				id: 'jt1922xu', name: 'jt1922xu', x: 274.25, y: 174, width: 80, height: 81, time: 0, status: 'Show',
			}, {
				id: 'jt192wyb', name: 'jt192wyb', x: 274.25, y: 171.73792993239366, width: 81.50804671173756, height: 83.26207006760634, time: 0.0308226495726496, status: 'Split',
			}],
			childrenNames: ['jt192wyc', 'jt192wyd'],
			parentName: '',
		}];
		const url = 'https://cildata.crbs.ucsd.edu/media/videos/50507/50507_web.mp4';
		const videoWidth = 500;
		const previewNoticeList = [
			'Cells\' body range.',
			'The time that cells <u>split</u>, <u>leave</u>, <u>obscured</u> and <u>Show up</u> (if applicable).',
		];
		const previewHeader = 'Please scan the video and observe the following to help you complete the task:';
		const emptyCheckSubmissionWarningText = 'Please annotate AND track one unmarked cell to complete this task.';
		const emptyCheckAnnotationItemWarningText = 'Step 2: Please track the cell bound by this box';
		const emptyAnnotationReminderText = 'Step 1: Click the button above to add a new box around a cell';

		this.fileInput = React.createRef();
		this.state = {
			myStream: null,
			result: null,
			interpolationResult: null,
			input: {
				defaultAnnotations: JSON.stringify(defaultAnnotations),
				url,
				videoWidth,
				previewHeader,
				previewNoticeList,
				emptyCheckSubmissionWarningText,
				emptyCheckAnnotationItemWarningText,
				emptyAnnotationReminderText,
			},
			params: {
				defaultAnnotations: [],
				url,
				videoWidth,
				previewHeader,
				previewNoticeList,
				emptyCheckSubmissionWarningText,
				emptyCheckAnnotationItemWarningText,
				emptyAnnotationReminderText,
			}
		}
	}




	handleResultSubmit = result => {
		this.setState({ result: result });


	}

	handleChange = event => {
		const target = event.target;
		const name = target.name;
		const value = target.type === "checkbox" ? target.checked : target.value;
		this.setState((preState) => {
			const { input } = preState;
			return {
				input: { ...input, [name]: value }
			}

		})
	}

	getInterpolatedData = event => {
		event.preventDefault();
		
		const duration = JSON.parse(JSON.stringify(this.state.result.duration))
		const timerate = duration*60
		//collect frame/second for the video
		const timeNow = (new Date()).getTime().toString(36);
		let interpolatedResult = JSON.parse(JSON.stringify(this.state.result));
		let temp = interpolatedResult
		for(let annotation = 0; annotation < temp.annotations.length; annotation++){
			for(let incident = 0; incident < temp.annotations[annotation].incidents.length; incident++){
				temp.annotations[annotation].incidents[incident].parentName = temp.annotations[annotation].parentName
			}
		}
		for(let annotation = 0; annotation < temp.annotations.length; annotation++){

			for(let incident = 0; incident < temp.annotations[annotation].incidents.length; incident++){
				temp.annotations[annotation].incidents[incident].label = temp.annotations[annotation].label
			}
		}
		for (let i = 0; i < interpolatedResult.annotations.length; i++) {
			
			let annotIncidentLength = interpolatedResult.annotations[i].incidents.length
			if (annotIncidentLength === 1) {
				console.log("This is not possible :P")
			}
			else if (annotIncidentLength > 1) {
				
				for (let j = 0; j < annotIncidentLength; j++) {
					if ((j != annotIncidentLength-1) && (interpolatedResult.annotations[i].incidents[j+1].status == "Re-appear" || interpolatedResult.annotations[i].incidents[j+1].status == "" || interpolatedResult.annotations[i].incidents[j+1].status == "Split")){
						const source = interpolatedResult.annotations[i].incidents[j]
						const target = interpolatedResult.annotations[i].incidents[j+1]
						const tdiff = (target.time * timerate) - (source.time * timerate)
						const xSlope = (target.x - source.x)/tdiff
						const ySlope = (target.y - source.y)/tdiff
						const wSlope = (target.width - source.width)/tdiff
						const hSlope = (target.height - source.height)/tdiff
						const sFrame = Math.round(source.time * timerate)
						const tFrame = Math.round(target.time * timerate)
						for (let k=sFrame+1; k<=tFrame; k++){
							let off = k - Math.round(source.time * timerate)
							let interpolX = (source.x + (xSlope * off)).toFixed(2)
							let interpolY = (source.y + (ySlope * off)).toFixed(2)
							let interpolW = (source.width + (wSlope * off)).toFixed(2)
							let interpolH = (source.height + (hSlope * off)).toFixed(2)
							temp.annotations[i].incidents.splice(j + 1, 0, ({
								id: `${timeNow}`, name: `${timeNow}`, x: interpolX, y: interpolY, height: interpolH, width: interpolW, time: k, status,  parentName: interpolatedResult.annotations[i].parentName, label: interpolatedResult.annotations[i].label
							}));
							
						}
						
					} //close if 
					
					if ((j == annotIncidentLength-1) && (interpolatedResult.annotations[i].incidents[j].status == "Re-appear" || interpolatedResult.annotations[i].incidents[j].status == "" || interpolatedResult.annotations[i].incidents[j+1].status == "Split")){
						
						const source = interpolatedResult.annotations[i].incidents[j]
						const target = interpolatedResult.annotations[i].incidents[j]
						const tdiff = (duration * timerate) - (source.time * timerate)
						const xSlope = (target.x - source.x)/tdiff
						const ySlope = (target.y - source.y)/tdiff
						const wSlope = (target.width - source.width)/tdiff
						const hSlope = (target.height - source.height)/tdiff
						const sFrame = Math.round(source.time * timerate)
						const tFrame = Math.round(target.time * timerate)
						for (let k=sFrame+1; k<=tFrame; k++){
							let off = k - Math.round(source.time * timerate)
							let interpolX = source.x + (xSlope * off)
							let interpolY = source.y + (ySlope * off)
							let interpolW = source.width + (wSlope * off)
							let interpolH = source.height + (hSlope * off)
							temp.annotations[i].incidents.splice(j + 1, 0, ({
								id: `${timeNow}`, name: `${timeNow}`, x: interpolX, y: interpolY, height: interpolH, width: interpolW, time: k, status, parentName: temp.annotations[i].parentName, label: interpolatedResult.annotations[i].label
							}));
							
						}
						
					} //close second if
			
					
					
				} //close for loop for j
				
				

			} //close else-if annotlength>1

		} //close for loop for i

		//sort the temp object based on time/frame value
		let interpol_data_arr = [], sno = 1
		console.log("Temp array: "+JSON.stringify(temp))
		for(let x=0; x<temp.annotations.length; x++){
			for(let y=0; y<temp.annotations[x].incidents.length; y++){
				if(!(temp.annotations[x].incidents[y].time > 0 && temp.annotations[x].incidents[y].time < 1 ))
				interpol_data_arr.push(temp.annotations[x].incidents[y])
			}
		}

		for(let p=0; p<interpol_data_arr.length; p++){
			for(let q=0, stop = interpol_data_arr.length - p - 1; q<stop; q++){
				if(interpol_data_arr[q].time == interpol_data_arr[q+1].time){
					var swap = interpol_data_arr[q];
					interpol_data_arr[q] = interpol_data_arr[q+1];
					interpol_data_arr[q+1] = swap;
				}
				if(interpol_data_arr[q].time > interpol_data_arr[q+1].time){
					var swap = interpol_data_arr[q];
					interpol_data_arr[q] = interpol_data_arr[q+1];
					interpol_data_arr[q+1] = swap;
				}

			}
		}
		//sorting ends
		

		//add Sno/ID to each row
		for (let id=0; id<interpol_data_arr.length; id++){
			interpol_data_arr[id].serial = interpol_data_arr[id].label
			//sno++
		}

		for(let pa=0; pa<interpol_data_arr.length; pa++){
			for(let qa=0, stopa = interpol_data_arr.length - pa - 1; qa<stopa; qa++){
				// if(interpol_data_arr[qa].time == interpol_data_arr[qa+1].time){
				// 	var swapa = interpol_data_arr[qa];
				// 	interpol_data_arr[qa] = interpol_data_arr[qa+1];
				// 	interpol_data_arr[qa+1] = swapa;
				// }
				if(interpol_data_arr[qa].serial > interpol_data_arr[qa+1].serial){
					var swapa = interpol_data_arr[qa];
					interpol_data_arr[qa] = interpol_data_arr[qa+1];
					interpol_data_arr[qa+1] = swapa;
				}

			}
		}
		// for(let labelno=0; labelno<interpol_data_arr.length; labelno++){
		// 	var n = interpol_data_arr[labelno].label.search("-");
		// 	if(n<0){
		// 		interpol_data_arr[labelno].serial = interpol_data_arr[labelno].label
		// 	}
		// 	else {
		// 		interpol_data_arr[labelno].serial = interpol_data_arr[labelno].label[n+1]
		// 	}
		// }
		//Sno/ID added

		this.setState({ interpolationResult: interpol_data_arr });
		document.getElementById("export-interpol").style.display = "block";
	}

	handleSubmit = async event => {
		event.preventDefault();
		let result = {};

		if (this.fileInput.current.files[0]) {
			const readFilePromise = new Promise((resolve, reject) => {
				const fileReader = new FileReader();
				fileReader.onload = event => {
					if (!this.isJsonString(event.target.result))
						reject('Wrong json format');

					let result = JSON.parse(event.target.result);
					resolve(result)
				}
				fileReader.onerror = event => {
					reject(event);
				}
				fileReader.readAsText(this.fileInput.current.files[0]);
			})
			result = await readFilePromise;
		}

		let { url = '', videoWidth = 0, defaultAnnotations = [] } = result;
		//console.log(result)
		this.setState((preState) => {
			const { input } = preState;
			//console.log(preState)
			if (result.annotations.length === 0) {
				defaultAnnotations = this.isJsonString(input.defaultAnnotations) ? JSON.parse(input.defaultAnnotations) : [];
			}
			else {
				defaultAnnotations = result.annotations;
			}
			//console.log(defaultAnnotations)
			return {
				params: {
					defaultAnnotations,
					url: url || input.url,
					videoWidth: (videoWidth !== 0 ? videoWidth : parseInt(input.videoWidth, 10))
				}
			};
		}
		);
	}

	isJsonString = str => {
		try {
			JSON.parse(str);
		} catch (e) {
			return false;
		}
		return true;
	}

	createTable = e => {
		//console.log(this.state.interpolationResult);
		let temp = JSON.parse(JSON.stringify(this.state.interpolationResult));
		console.log("Table temp= \n" + JSON.stringify(this.state.interpolationResult));
		

		// var table = document.createElement('table');
		var table = document.getElementById("interpol-table");
		// var table = document.getElementById("interpol-table").appendChild(table);

		for (var i = 0; i < temp.length; i++) {
			
				var row = document.createElement('tr');
				var cell_sno = document.createElement('td')
				cell_sno.innerHTML = temp[i].serial
				// + "[" + temp[i].label + "]"
				row.appendChild(cell_sno)
				// var cell_id = document.createElement('td');
				// cell_id.innerHTML = temp[i].id 
				// row.appendChild(cell_id);

				var cell_x_min = document.createElement('td');
				var cell_y_min = document.createElement('td');
				var cell_width = document.createElement('td');
				var cell_height = document.createElement('td');
				var cell_frame = document.createElement('td');
				var cell_lost = document.createElement('td');
				var cell_occluded = document.createElement('td');
				var cell_generated = document.createElement('td');
				var cell_label = document.createElement('td');
				var cell_parent = document.createElement('td');
				
				cell_x_min.innerHTML = temp[i].x;
				cell_y_min.innerHTML =temp[i].y;
				cell_width.innerHTML = temp[i].width;
				cell_height.innerHTML =temp[i].height;
				cell_frame.innerHTML = temp[i].time;
				cell_lost.innerHTML = 0;
				cell_occluded.innerHTML = 0;
				cell_generated.innerHTML = 0;
				cell_label.innerHTML = temp[i].label;
				cell_parent.innerHTML = temp[i].parentName;
				//row.appendChild(cell_id);
				row.appendChild(cell_x_min);
				row.appendChild(cell_y_min);
				row.appendChild(cell_width);
				row.appendChild(cell_height);
				row.appendChild(cell_frame);
				row.appendChild(cell_lost);
				row.appendChild(cell_occluded);
				row.appendChild(cell_generated);
				row.appendChild(cell_label);
				row.appendChild(cell_parent);
				table.appendChild(row);
		}
		this.downloadInterpolTable();
	}

	export_table_to_csv = (html, filename) => {
		var csv = [];
		var rows = document.querySelectorAll("table tr");

		for (var i = 0; i < rows.length; i++) {
			var row = [], cols = rows[i].querySelectorAll("td, th");

			for (var j = 0; j < cols.length; j++)
				row.push(cols[j].innerText);

			csv.push(row.join(","));
		}

		// Download CSV
		this.download_csv(csv.join("\n"), filename);
	}

	download_csv = (csv, filename) => {
		var csvFile;
		var downloadLink;

		// CSV FILE
		csvFile = new Blob([csv], { type: "text/csv" });

		// Download link
		downloadLink = document.createElement("a");

		// File name
		downloadLink.download = filename;

		// We have to create a link to the file
		downloadLink.href = window.URL.createObjectURL(csvFile);

		// Make sure that the link is not displayed
		downloadLink.style.display = "none";

		// Add the link to your DOM
		document.body.appendChild(downloadLink);

		// Lanzamos
		downloadLink.click();
	}

	downloadInterpolTable = () => {
		var html = document.querySelector("table").outerHTML;
		this.export_table_to_csv(html, "table.csv");
	}

	render() {
		const { result, input, params } = this.state
		return (
			<div>
				<div className="nav-wrapper">
					<img src={Logo} alt="UT Austin Logo" className="image-logo"></img>
					<Link to="/login" className="last-nav-link" style={this.linkStyle}>Log In</Link>
					<a href="#" className="nav-link" style={this.linkStyle}>Help</a>
					<a href="#" className="nav-link" style={this.linkStyle}>About</a>
				</div>
				<Container className="py-3">
					<h1 className="display-4  text-center">CrowdMOT: A Video Annotation Tool</h1>
					<Row className="my-3 col-xs-12 col-lg-10 offset-lg-1">
						<Col>
							<Instructions />
						</Col>
					</Row>

					<Form className="mb-2 col-xs-12 col-lg-10 offset-lg-1" onSubmit={this.handleSubmit}>
						<FormGroup>
							<Label for="URL">Video Source URL</Label>
							<Input type="text" name="url" placeholder="http://..." value={input.url} onChange={this.handleChange} />
						</FormGroup>
						<FormGroup>
							<Label for="Annotation Width">Video Width</Label>
							<Input type="text" name="videoWidth" placeholder="number" value={input.videoWidth} onChange={this.handleChange} />
						</FormGroup>
						{/* <FormGroup>
							<Label for="exampleText">Default Annotations</Label>
							<Input type="textarea" name="defaultAnnotations" placeholder="[{id: .., name: .., label: .., color: .., incidents: ..}, ..]" value={input.annotations} onChange={this.handleChange} rows={10} />
						</FormGroup> */}
						<FormGroup>
							<Label for="exampleFile" className="pr-2">Upload Default Annotations</Label><br></br>
							<input type="file" name="file" id="exampleFile" ref={this.fileInput} />
						</FormGroup>
						<Row className="my-3 col-xs-12 col-lg-10 offset-lg-6">
							<Col>
								<Button style={this.styles}>Submit</Button>
							</Col>
						</Row>

					</Form>
					<Row className="py-3" style={{ background: "rgb(246, 246, 246)" }}>
						<Col>
							
							<TwoDimensionalVideo
								key={
									`${JSON.stringify(params.url)}
								 ${JSON.stringify(params.defaultAnnotations)}
								 ${JSON.stringify(params.videoWidth)}
								 ${JSON.stringify(params.previewHeader)}
								 ${JSON.stringify(params.previewNoticeList)}`
								}
								onSubmit={this.handleResultSubmit}
								url={params.url}
								defaultAnnotations={params.defaultAnnotations}
								videoWidth={params.videoWidth}
								previewHeader={params.previewHeader}
								previewNoticeList={params.previewNoticeList}
								hasReview
								isEmptyCheckEnable
								isSplitEnable
								isShowHideEnable
								numAnnotationsToBeAdded={20}
								emptyCheckSubmissionWarningText={params.emptyCheckSubmissionWarningText}
								emptyCheckAnnotationItemWarningText={params.emptyCheckAnnotationItemWarningText}
								emptyAnnotationReminderText={params.emptyAnnotationReminderText}
							/>
						</Col>
					</Row>




					{/* <Row className="my-3 col-xs-12">
						<Col>
							<Card>
								<CardBody>
									<CardTitle>Output</CardTitle>
									<CardText>{JSON.stringify(result, null, 2)}</CardText>
								</CardBody>
							</Card>
						</Col>
					</Row> */}

					<Row className="my-3 col-xs-12">
						
						<Col>
							<Button style={this.lowerButton2Style}  color="primary"><CSVLink data={JSON.stringify(result, null, 2)} style={{ color: 'white' }}>Download Raw Data</CSVLink></Button>
						</Col>
						<Col style={this.lowerButtonCol1Style}>
							<Button color="primary" style={this.lowerButton1Style} onClick={this.getInterpolatedData}>Generate Interpolated Data</Button>
						</Col>
						<Col>
							<Button id="export-interpol" color='primary' style={{
								display: 'none', color: '#ffffff',
								
								border: `1px solid`,
							}} onClick={this.createTable}>Download Interpolated Data</Button>

						</Col>
					</Row>
					{/* <Row className="my-3 col-xs-12">
						<Col>
							<Card>
								<CardBody>
									<CardTitle>Interpolated Data</CardTitle>
									
									<CardText>{JSON.stringify(this.state.interpolationResult, null, 2)}</CardText>
								</CardBody>
							</Card>
						</Col>
					</Row> */}
					{/* <Row className="my-3 col-xs-12">
						<Col>
							<Button id="export-interpol" style={{ display: 'none' }} onClick={this.createTable}>Download Interpolated Data</Button>
						</Col>
					</Row> */}

					<Row className="my-3 col-xs-12">
						<Col>
							<table id="interpol-table" style={{ display: 'none' }}>
								<tr>
									{/* <th>ID</th> */}
									<th >Track ID</th>
									<th>x-min</th>
									<th>y-min</th>
									<th>width</th>
									<th>height</th>
									<th>Frame</th>
									<th>Lost</th>
									<th>Occluded</th>
									<th>Generated</th>
									<th>Label</th>
									<th>Parent</th>
								</tr>
							</table>
							{/* <button onClick={this.downloadInterpolTable} >Export HTML table to CSV file</button> */}
						</Col>
					</Row>





				</Container>
			</div>
		);
	}
}
export default testDemo;

/*
<Form className="mb-2 col-xs-12 col-lg-10 offset-lg-1" onSubmit={this.handleSubmit}>
	<FormGroup>
	  <Label for="URL">Video Source URL</Label>
	  <Input type="text" name="url" placeholder="http://..." value={input.url} onChange={this.handleChange} />
	</FormGroup>
	<FormGroup>
	  <Label for="Annotation Width">Video Width</Label>
	  <Input type="text" name="videoWidth" placeholder="number" value={input.videoWidth} onChange={this.handleChange} />
	</FormGroup>
	<FormGroup>
		<Label for="exampleText">Default Annotations</Label>
		<Input type="textarea" name="defaultAnnotations" placeholder="[{id: .., name: .., label: .., color: .., incidents: ..}, ..]" value={input.annotations} onChange={this.handleChange} rows={10}/>
	</FormGroup>
	<FormGroup>
	  <Label for="exampleFile" className="pr-2">or Upload Default Annotations</Label>
	  <input type="file" name="file" id="exampleFile" ref={this.fileInput} />
	</FormGroup>
	<Button>Submit</Button>
</Form>
<Row className="my-3 col-xs-12 col-lg-10 offset-lg-1">
	<Col>
		<Instructions />
	</Col>
</Row>
*/