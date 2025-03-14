import file from '../assets/file.svg'
import file2 from '../assets/file2.svg'

function Docs() {
  return (
    <div className="docs__section">
      <div className="lcontainer">
        <h2 className='section__name'>Документы</h2>
        <p className='invitation'>Приходите подписать договор. Заберите свой инструмент </p>
        <div className="three__docs">
          <div 
          className="doc selected"
          // style={{
          //   color: isSelected? 'black' : 'white'
          // }}
          >
            <h3>Договор ИП \ физлицо</h3>
            <p>Если вы арендуете инструмент как физическое лицо</p>
            <div className="doc__bottom">
              <span>220 kb</span>
              <img src={file2} alt="file icon" />
            </div>
          </div>
          <div className="doc">
            <h3>Договор ИП - ИП</h3>
            <p>Если вы арендуете инструмент как индивидуальный предприниматель</p>
            <div className="doc__bottom">
              <span>340 kb</span>
              <img src={file} alt="file icon" />
            </div>
          </div>
          <div className="doc">
            <h3>Договор ИП - OOO</h3>
            <p>Если вы арендуете инструмент как компания</p>
            <div className="doc__bottom">
              <span>158 kb</span>
              <img src={file} alt="file icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Docs