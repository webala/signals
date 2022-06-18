
function Signal(signal) {
  return (
    <div className='signal'>
        <h2 className='currency'>{signal.comodity}</h2>
        <p className='mkt-range'>RANGE: {signal.mkt_range}</p>
        <p className='sl'>SL: <span>{signal.stop_loss}</span></p>
        <p className='tp'>TP1: <span>{signal.take_profit1}</span></p>
        <p className='tp'>TP2: <span>{signal.take_profit2}</span></p>
        <p className='tp'>TP3: <span>{signal.take_profit3}</span></p>
    </div>
  )
}

export default Signal