function Header() {
  return (
    <div>
      <div className='lass="p-3 mb-3 border-bottom"'>
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-between">
            <a href="/" className="d-flex align-items-center my-3 link-body-emphasis">
              <img src="https://advicehealth.com.br/wp-content/uploads/2021/07/logo_advice_150.png" alt="Logo" width="auto" height="42" className="rounded-circle" />
            </a>


            <div className="dropdown text-end my-3">
              <a href="#" className="d-block link-body-emphasis dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle" />
              </a>
              <ul className="dropdown-menu text-small">
                <li><a className="dropdown-item" href="#">New project...</a></li>
                <li><a className="dropdown-item" href="#">Settings</a></li>
                <li><a className="dropdown-item" href="#">Profile</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Sign out</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-bottom"></div>
      </div>
    </div>
  );
}

export default Header;