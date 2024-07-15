

function Sidebar({ firstName, introduce, email, phone, website }) {

  console.log('introduce', introduce)
  return (
    <div className="sidebar">
      <div className="sidebar__info">
        <div className="useravatar">
          <div className="avatar">
            <div className="img">
              <img src="/img/avatar_nghia.jpg" alt="avatar" />
            </div>
          </div>
          <h3 className="title --t3">{firstName || ""}</h3>
        </div>
      </div>
      <div className="sidebar__content">
        <h4>Giới thiệu</h4>
        <p className="description">{introduce || "--"}</p>
        <ul>
          <li>
            <img src="/img/icon-mail-outline.svg" alt="icon" />
            <span>{email || "--"}</span>
          </li>
          <li>
            <img src="/img/icon-phone-outline.svg" alt="icon" />
            <span>{phone || "--"}</span>
          </li>
          <li>
            <img src="/img/icon-link.svg" alt="icon" />
            {website ? (
              <a href={website} target="_blank">
                {website}
              </a>
            ) : (
              "--"
            )}
          </li>
        </ul>
        <div className="social">
          {/* <a href="#">
              <img src="/img/icon-facebook-dark.svg" alt />
            </a>
            <a href="#">
              <img src="/img/icon-linkedin-dark.svg" alt />
            </a>
            <a href="#">
              <img src="/img/icon-youtube-dark.svg" alt />
            </a> */}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
