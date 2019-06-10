import React, {ReactElement} from 'react'
import './Chart.css'

export const Chart = (): ReactElement => {
	return (
		<iframe
			id="tradingview_bde47"
			title="Fx chart"
			src="https://s.tradingview.com/dailyfx/widgetembed/?frameElementId=tradingview_bde47&amp;symbol=FX_IDC%3AEURUSD&amp;interval=D&amp;hidesidetoolbar=0&amp;symboledit=1&amp;saveimage=1&amp;toolbarbg=f4f7f9&amp;studies=%5B%5D&amp;hideideas=1&amp;theme=White&amp;timezone=exchange&amp;showpopupbutton=1&amp;studies_overrides=%7B%7D&amp;overrides=%7B%7D&amp;enabled_features=%5B%5D&amp;disabled_features=%5B%5D&amp;showpopupbutton=1&amp;locale=en&amp;utm_source=www.dailyfx.com&amp;utm_medium=widget&amp;utm_campaign=chart&amp;utm_term=FX_IDC%3AEURUSD"
			className="chart__iframe"
			frameBorder="0"
			// allowtransparency="true"
			scrolling="no"
			allowFullScreen={false}>
		</iframe>
	)
}
