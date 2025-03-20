import file from '../assets/file.svg'

function Docs() {
  return (
    <div id='docs' className="docs__section">
      <div className="lcontainer">
        <h2 className='section__name'>Документы</h2>
        <p className='invitation'>Приходите подписать договор. Заберите свой инструмент </p>
        <div className="three__docs">
          <a href="https://www.wp.6164040.ru/wp-content/uploads/2025/03/dogovor-arendy-ip-s-fl.pdf" 
          target='_blank'
          className="doc"
          >
            <h3>Договор ИП \ физлицо</h3>
            <p>Если вы арендуете инструмент как физическое лицо</p>
            <div className="doc__bottom">
              <span>220 kb</span>
              <img src={file} alt="file icon" />
            </div>
          </a>
          <a href='https://www.wp.6164040.ru/wp-content/uploads/2025/03/dogovor-arendy-ip-s-ip.pdf' target='_blank' className="doc">
            <h3>Договор ИП - ИП</h3>
            <p>Если вы арендуете инструмент как индивидуальный предприниматель</p>
            <div className="doc__bottom">
              <span>340 kb</span>
              <img src={file} alt="file icon" />
            </div>
          </a>
          <a href='https://www.wp.6164040.ru/wp-content/uploads/2025/03/dogovor-arendy-ip-s-yul-s-zalogom-1.pdf' target='_blank' className="doc">
            <h3>Договор ИП - OOO</h3>
            <p>Если вы арендуете инструмент как компания</p>
            <div className="doc__bottom">
              <span>158 kb</span>
              <img src={file} alt="file icon" />
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Docs