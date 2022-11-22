import QRCode from 'qrcode'
import { useState,useEffect } from 'react'
import './App.css'
import gpass from './guest.js'
function App() {
	const [url, setUrl] = useState('')
	const [qr, setQr] = useState('')

	const GenerateQRCode = () => {
	}
	useEffect(() => {
	console.log("GPASS1: "+gpass)
	const url1 = "WIFI:S:Diana Network Guest1;T:WPA2;P:"+gpass+";;"
		QRCode.toDataURL(url1, {
			width: 800,
			margin: 2,
			color: {
				dark: '#335383FF',
				light: '#EEEEEEFF'
			}
		}, (err, url1) => {
			if (err) return console.error(err)

			console.log(url1)
			setQr(url1)
		})
	},[]);

	return (
		<div className="app">
			<h1>QR Generator</h1>
			<input 
				type="text"
				placeholder="e.g. https://google.com"
				value={url}
				onChange={e => setUrl(e.target.value)} />
			<button onload={GenerateQRCode}>Generate</button>
			{qr && <>
				<img alt="qr code" src={qr} />
				<a href={qr} download="qrcode.png">Download</a>
			</>}
		</div>
	)
}

export default App