import QRCode from 'qrcode'
import { useState } from 'react'
import './App.css'
function App() {
	const [url, setUrl] = useState('')
	const [qr, setQr] = useState('')

	const GenerateQRCode = () => {
	const guestpass=process.env.GUESTPASS;
		const url1 = "WIFI:S:Diana Network Guest1;T:WPA2;P:"+guestpass+";;"
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
	}

	return (
		<div className="app">
			<h1>QR Generator</h1>
			<input 
				type="text"
				placeholder="e.g. https://google.com"
				value={url}
				onChange={e => setUrl(e.target.value)} />
			<button onClick={GenerateQRCode}>Generate</button>
			{qr && <>
				<img alt="qr code" src={qr} />
				<a href={qr} download="qrcode.png">Download</a>
			</>}
		</div>
	)
}

export default App