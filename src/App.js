import QRCode from 'qrcode'
import { useState,useEffect } from 'react'
import './App.css'
import gpass from './guest.js'
function App() {
	const [qr, setQr] = useState('')

	useEffect(() => {
	const url = "WIFI:S:Diana Network Home;T:WPA;P:"+gpass+";;"
		QRCode.toDataURL(url, {
			width: 800,
			margin: 2,
			color: {
				dark: '#335383FF',
				light: '#EEEEEEFF'
			}
		}, (err, url) => {
			if (err) return console.error(err)
			setQr(url)
		})
	},[]);

	return (
		<div className="app">
			<h4>Welcome to,</h4>
			<h1>Diana Network</h1>
			<p>SSID: <b>Diana Network Home</b></p>
			<p>PASSWORD: <b>{gpass}</b></p>
			{qr && <>
				<img alt="qr code" src={qr} />
				<br/>
				<a href={qr} download="qrcode.png">Download</a>
				<br/>
			</>}
		</div>
	)
}

export default App
